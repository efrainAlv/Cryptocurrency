import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { users } from '../config/db.js';

const registerUser = async (req, res) => {

    const { email, password, name } = req.body;

    const user = await getUser(email);

    console.log(user)

    if (!user) {

        var ePassword = await encrypt(password).then(res => {
            return res;
        })

        await users.doc(email).set({
            'email': email,
            'password': ePassword,
            'name': name
        })
            .then((resp) => res.status(200).send({ response: resp }))
            .catch((err) => res.status(500).send({ response: err }));
    }
    else {
        res.status(400).send({ response: "User already exists" })
    }
}

const login = async (req, res) => {

    const { email, password } = req.body;

    const user = await getUser(email);

    if (user) {

        let valid = comparePassword(password, user.password)
        valid.then((data) => {

            if (data) {
                const token = jwt.sign({ email: email, name: user.name }, process.env.SECRET, {
                    expiresIn: 3600 //seconds
                })

                res.cookie('token', token, { maxAge: 1 * 60 * 60 * 1000, httpOnly: true });  // maxAge: 2 hours
                res.status(200).send({ response: token })
            } else res.status(401).send({ response: "Password incorrect" })

        }).catch((err) => {
            res.status(400).send({ response: err })
        })
    }
    else res.status(400).send({ response: "User not found" })
}


const getUser = async (email) => {

    const user = await users.doc(email).get();

    if (!user.exists) null
    else return user.data();
}


async function encrypt(password) {

    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

async function comparePassword(password, receivedPassword) {

    return await bcrypt.compare(password, receivedPassword);
}

export { registerUser, login }
