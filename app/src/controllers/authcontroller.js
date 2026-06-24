const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Array sementara untuk menyimpan data user di memori RAM (tanpa database dulu agar cepat)
const usersMockDatabase = [];
const JWT_SECRET = process.env.JWT_SECRET || 'rahasia_lks_kaltim_2026';

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Name, email, and password are required"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            id: usersMockDatabase.length + 1,
            name,
            email,
            password_hash: hashedPassword,
            role: 'citizen',
            created_at: new Date()
        };

        usersMockDatabase.push(newUser);

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: { id: newUser.id, name: newUser.name, email: newUser.email }
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password are required" });
        }

        const user = usersMockDatabase.find(u => u.email === email);
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({
            success: true,
            message: "Login successful",
            data: { token: token, user: { id: user.id, name: user.name, role: user.role } }
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};