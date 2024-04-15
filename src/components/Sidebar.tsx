import Image from 'next/image'
import React from 'react'
import { IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact } from 'react-icons/io5'
import { SidebarMenuItem } from './SidebarMenuItem'


const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={30} />,
        title: 'Dashboard',
        subTitle: 'Visualización'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={30} />,
        title: 'Counter',
        subTitle: 'Contador Client Side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoFootball size={30} />,
        title: 'Pokemons',
        subTitle: 'Generación Estática'
    }
]

export const Sidebar = () => {
    return (
        <div
            id="menu"
            style={{ width: '400px' }}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">

            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className='mr-2' />
                    <span>Admin</span>
                    <span className="text-blue-500">7</span>.</h1>
                <p className="text-slate-500 text-sm">Maneje sus acciones y actividades</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">bievenido de nuevo,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image className="rounded-full w-8 h-8" src="https://lh3.googleusercontent.com/ogw/AF2bZyhb6ArWfo6cJmb601t8UU6_Jty8W9vgzoo0KG2rQf1jEUM=s32-c-mo" alt="User avatar" width={50} height={50} />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        German Gatica
                    </span>
                </a>
            </div>

            <div id="nav" className="w-full px-6">

                {
                    menuItems.map(item => (
                        <SidebarMenuItem
                            {...item}
                            key={item.path}
                        />
                    ))
                }

            </div>
        </div>
    )
}
