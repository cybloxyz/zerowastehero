import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Avatar,
    IconButton,
    Typography,
    MenuItem,
    InputAdornment
} from '@mui/material';
import { PhotoCamera, Visibility, VisibilityOff } from '@mui/icons-material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

function ProfilePageMUI() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        contact: '',
        oldpassword: '',
        newpassword: '',
        confirmpassword: '',
    });

    const [showPassword, setShowPassword] = useState({
        oldpassword: false,
        newpassword: false,
        confirmpassword: false
    })

    const togglePassword = (feild) => {
        setShowPassword((prev) => ({ ...prev, [feild]: !prev[feild] }));
    };

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, position: 'relative' }}>
                <Avatar
                    alt="Profile"
                    src="https://via.placeholder.com/120"
                    sx={{ width: 100, height: 100 }}
                />
                <IconButton
                    color="primary"
                    component="label"
                    sx={{ position: 'absolute', bottom: 0, right: 'calc(50% - 60px)' }}
                >
                    <PhotoCamera />
                    <input hidden accept="image/*" type="file" />
                </IconButton>
            </Box>

            <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handlechange}
                margin="normal"
            />

             <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handlechange}
                margin="normal"
            />

            <TextField
                select
                fullWidth
                label="Role"
                name="role"
                value={formData.role}
                onChange={handlechange}
                margin="normal"
            >

                <MenuItem value="">-- Select Role --</MenuItem>
                <MenuItem value="Super Admin">Super Admin</MenuItem>
            </TextField>

            <Box sx={{ textAlign: 'right', mt: 1 }}>
                <Button variant="contained" color="primary">Update</Button>
            </Box>

            <Typography variant="h6" sx={{ mt: 4 }}>Contact Number</Typography>
            <PhoneInput
                country={'us'}
                value={formData.contact}
                onChange={(phone) => setFormData((prev) => ({ ...prev, contact: phone }))}
                inputStyle={{ width: '100%' }}
            />
            <Typography variant="h6" sx={{ mt: 4 }}>Change Password</Typography>

            {[
                { name: 'oldPassword', label: 'Old Password', key: 'old' },
                { name: 'newPassword', label: 'New Password', key: 'new' },
                { name: 'confirmPassword', label: 'Confirm Password', key: 'confirm' }
            ].map(({ name, label, key }) => (
                <TextField
                    key={name}
                    fullWidth
                    label={label}
                    name={name}
                    type={showPassword[key] ? 'text' : 'password'}
                    value={formData[name]}
                    onChange={handlechange}
                    margin="normal"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => togglePassword(key)} edge="end">
                                    {showPassword[key] ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            ))}

            <Box sx={{ textAlign: 'right', mt: 2 }}>
                <Button variant="contained" color="primary">Update</Button>
            </Box>
        </Box>
    );
}

export default ProfilePageMUI;





