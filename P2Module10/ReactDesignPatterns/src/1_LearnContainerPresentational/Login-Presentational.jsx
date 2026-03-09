import React from 'react'

const LoginPresentational = ({setEmail, setPassword, email, password, isSubmitting, error, handleSubmit}) => {
    return (
        <form
            onSubmit={handleSubmit}
            noValidate
            className="max-w-lg mx-auto border-2 p-4 space-y-4"
        >
            <h2 className="text-2xl font-semibold">Login Form</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="border-2 rounded block p-2"
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="border-2 rounded block p-2"
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button
                type="submit"
                disabled={isSubmitting}
                className="border-2 rounded px-4 py-2 cursor-pointer active:bg-white/20"
            >
                {isSubmitting ? "Logging in..." : "Login"}
            </button>
        </form>
    );
}

export default LoginPresentational
