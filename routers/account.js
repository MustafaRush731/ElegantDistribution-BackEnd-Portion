var express = require('express');
const db = require('../database');
var router = express.Router();
const bcrypt = require('bcryptjs');


router.post('/create-account/users', async (req, res) => {
    const { name, email, password }= req.body; 
    try {
        if (name.length-1 == 0){
            return res.status(400).json({ error: 'Name is Missing'});
        }
        else if (email.length == 0){
            return res.status(400).json({ error: 'Email is Missing'});
        }
        else if (password.length < 8 ){
            return res.status(400).json({ error: 'Invalid Password Must Be Longer Than 8 Characters'});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
         await db.query('INSERT INTO user (email, password, role, name) VALUES (?,?,?,?)', [email,hashedPassword,'customer',name]);
        res.status(200).json({ message: 'User registered successfully' });
    } catch (err) {
        console.log(err);
    }
});

router.post('/create-account/business', async (req, res) => {
    const { name, email, password }= req.body;
    try {
        if (name.length == 0){
            console.log("Wrong")
            return res.status(400).json({ error: 'Business Name Missing'});
        }
        else if(email.length == 0){
            return res.status(400).json({ error: 'Email Missing'});
        }
        else if (password.length < 8 ){
            return res.status(400).json({ error: 'Invalid Password Must Be Longer Than 8 Characters'});
        }
        const salt = await bcrypt.salt(10);
        const hashedPassword = await bcrypt.hashPassword(password,salt);
        db.promise().query('INSERT INTO user (email, password, role, name) VALUES (?,?,?,?)', [email,hashedPassword,'business',name]);
        res.status(200).json({ message: 'User registered successfully' });
    } catch (err) {
        console.log(err);
    }
});

router.post('/sign-in', async (req, res) => { 
    const {email, password} = req.body;
    try {
        const [user] = await db.query('SELECT * FROM user WHERE email = ?', [email]);
        if (user.length == 0){
            return res.status(400).json({ error: 'Invalid Email or Password' });
        }
        const isPasswordValid = await bcrypt.compare(password, user[0].password);
        if(isPasswordValid == false){
            return res.status(400).json({ error: 'Invalid Email or Password' });
        }
        res.status(200).json({ message: 'Sign-in successful'});
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;