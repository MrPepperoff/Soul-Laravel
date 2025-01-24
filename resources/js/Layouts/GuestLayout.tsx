import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import style from './GuestLayouts.module.sass';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className={style.wrap + " flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0"}>
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-100 fill-current text-gray-500" />
                </Link>
            </div>

            <div className={style.wrap__form + " mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg"}>
                {children}
            </div>
        </div>
    );
}
