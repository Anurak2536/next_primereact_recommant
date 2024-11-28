/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { AppTopbarRef } from '@/types';
import { LayoutContext } from './context/layoutcontext';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { InputText } from 'primereact/inputtext';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { MenuProvider } from './context/menucontext';
import AppMenuitem from './AppMenuitem';

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
    const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));

    interface ExMenuItem extends MenuItem {
        label?: string;
        items?: any;
        badge?: number;
        shortcut?: string;
        link?: any;
    }

    const itemRenderer = (item: ExMenuItem) => (
        <Link href={item.link} style={{ cursor: 'pointer' }}>
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </Link>
    );

    const items: ExMenuItem[] = [
        {
            label: 'แจ้งปัญหาและข้อเสนอแนะ',
            icon: 'pi pi-bell',
            url: '/recommant/'
        },
        {
            label: 'รายงานคิวการปรับปรุงระบบ',
            icon: 'pi pi-list',
            url: '/recommant/uikit/panel'
        },
    ];

    const start = (
        <span className="inline-flex align-items-center gap-1 pl-2 pr-4">
            <img alt="logo" src={`/recommant/layout/images/LogoRecommants.png`} height="40" className="mr-2"></img>
            <span className="font-medium text-xl font-semibold appname">
            <span>แจ้งปัญหาและข้อเสนอแนะ</span>&nbsp;<span className="text-primary">ระบบสารสนเทศ</span>
            </span>
        </span>
    );
    const end = (
        <div className="flex align-items-center gap-2">
            <button className='w-full p-link flex align-items-center p-1 pl-4 text-color border-noround'>
                {/* <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="large" className="mr-2" shape="circle" /> */}
                <div className="flex flex-column align">
                    <span className="font-bold">By Admin System</span>
                    <span className="text-sm">Admin</span>
                </div>
            </button>
        </div>
    );

    return (
        <div className="layout-menu">
            <Menubar model={items} start={start} end={end} style={{backgroundColor:"var(--surface-card)"}} />
        </div>
    );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;
