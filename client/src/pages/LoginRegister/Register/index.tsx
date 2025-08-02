import { type FC } from 'react'
import SignUp from '../../../components/SignUp'
import InputLoginRegister from '../../../fragments/InputLoginRegister'
import ButtonAgreement from '../../../fragments/ButtonAgreement'
import SignIn from '../../../components/SignIn'

export type RegisterProps = {
    name: string
    setName: (value: string) => void
    email: string
    setEmail: (value: string) => void
    username: string
    setUsername: (value: string) => void
    password: string
    setPassword: (value: string) => void
    agreement: boolean;
    setAgreement: (value: boolean) => void
    setLogin: (value: boolean) => void
    showLogin?: boolean | null
    handleSignUp: () => void
}


const Register: FC<RegisterProps> = ({ name, setName, email, setEmail, username, setUsername, password, setPassword, agreement, setAgreement, setLogin, showLogin, handleSignUp }) => {
    return (
        <div className='h-full w-[60%] pt-3.5 flex flex-col justify-start items-start '>
            {/* title */}
            <h2 className='text-black text-3xl font-bold capitalize'>
                {showLogin ? 'login' : 'create account'}
            </h2>
            {/* sign with facebook or google */}
            <div className='w-full flex flex-row justify-between items-center mt-3 gap-2'>
                {
                    showLogin ? (
                        <>
                            {/* google */}
                            <SignIn type='google' />
                            {/* facebook */}
                            <SignIn type='facebook' />
                        </>
                    ) : (
                        <>
                            {/* google */}
                            < SignUp type='google' />
                            {/* facebook */}
                            <SignUp type='facebook' />
                        </>
                    )
                }

            </div>
            {/* input  */}
            <div className='w-full flex flex-col justify-start items-start gap-4 mt-5'>
                {
                    !showLogin && (
                        <>
                            {/* name */}
                            <InputLoginRegister type='text' name='name' label='name' value={name} setValue={setName} maxLenght={30} />
                            {/* email */}
                            <InputLoginRegister type='email' name='email' label='email' value={email} setValue={setEmail} maxLenght={30} />
                        </>
                    )
                }

                {/* username */}
                <InputLoginRegister type='text' name='username' label='username' value={username} setValue={setUsername} maxLenght={30} />
                {/* password */}
                <InputLoginRegister type='password' name='password' label='password' value={password} setValue={setPassword} maxLenght={30} />
            </div>
            <div className='w-full flex flex-col justify-start items-start gap-2 mt-7'>
                {/* agreement */}
                {
                    !showLogin && (
                        <ButtonAgreement value={agreement} setValue={() => { setAgreement(!agreement) }} />
                    )
                }
                {/* sign up / sign in */}
                <button className='w-full bg-primary-matcha text-white py-3 rounded-full font-semibold text-center text-xs hover:bg-primary-matcha/80 transition-all duration-200 ease-in-out capitalize' onClick={() => { showLogin ? handleSignUp() : handleSignUp() }}>sign {showLogin ? 'in' : 'up'}</button>

                {/* login / register */}
                <div className='w-full flex flex-row justify-start items-center gap-1.5'>
                    <p className='text-to-small text-slate-700 capitalize'>{showLogin ? 'dont have an account?' : 'already have an account?'} </p>

                    {/* button */}
                    <button type='button' className='text-primary-matcha text-to-small font-semibold cursor-pointer capitalize' onClick={() => showLogin === null ? setLogin(true) : showLogin ? setLogin(false) : setLogin(true)}>{showLogin === null ? 'login' : showLogin ? 'register' : 'login'}</button>
                </div>
            </div>
        </div>
    )
}

export default Register
