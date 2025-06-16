import { IconChevronRight } from '@tabler/icons-react';

import styles from './footer.module.css'

function Footer() {
    return (
        <div className='mt-auto flex justify-center pb-7'>
            <span className={`${styles.RKTerminal} order-2 md:order-1`}>
                <IconChevronRight stroke={2} size={18} />_ Rishi
            </span>
        </div>
    )
}

export default Footer