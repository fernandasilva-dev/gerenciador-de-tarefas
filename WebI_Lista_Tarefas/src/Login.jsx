import './styleLogin.css'

function Login() {
    return (
        <div className='body'>
            <main className='container'>
                <form>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Nome' />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Tipo' />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <div className='remenber-forget'>
                        <label>
                            <input type="checkbox" />
                            Lembrar senha
                        </label>
                        <a href='#'>Esqueci a senha</a>
                    </div>

                    <button className='login-bt' type='submit'>Login</button>

                    <div className='register-link'>
                        <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Login