import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import './globals.css';
import { SideMenu } from '@/components/navigation/SideMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="">
			<body className={inter.className}>
				<div className="border-b">
					<div className="container mx-auto flex h-16 items-center px-4">
						LOGO-HERE
						<div className="ml-auto flex items-center space-x-4">
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</div>
					</div>
				</div>
				<div className="flex">
					<SideMenu />
					<div className="w-full px-4 pt-8">{children}</div>
				</div>
			</body>
		</html>
	);
}
