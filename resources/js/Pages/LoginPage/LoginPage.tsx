import { Head } from '@inertiajs/react';
import Login from '../Auth/Login';
import style from './LoginPage.module.sass'

export default function LoginPage(){
    return(
        <>
            <Head title="SKBA"/>
            <Login canResetPassword={false} />
        </>
    );
}