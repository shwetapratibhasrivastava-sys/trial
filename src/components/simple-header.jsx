import React from 'react'; 
import { Grid2x2PlusIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { MenuToggle } from '@/components/menu-toggle';

export function SimpleHeader() {
	const [open, setOpen] = React.useState(false);

	const links = [
		{
			label: 'Features',
			href: '#',
		},
		{
			label: 'Pricing',
			href: '#',
		},
		{
			label: 'About',
			href: '#',
		},
	];

	return (
        <header
            className="bg-blue-800 text-white  z-50 w-full border-b backdrop-blur-lg">
            <nav
                className="mx-auto flex p-1 w-full  items-center justify-around ">
				<div className="flex items-center justify-start gap-7">
				
					<a href="tel:+917905856080" className='items-center'>+91 7905856080</a>
					<a href="mailto:shwetapratibhasrivastava@gmail.com" className='items-center'>shwetapratibhasrivastava@gmail.com</a>

				</div>
				<div className="hidden items-center gap-2 lg:flex">
					{/* {links.map((link) => (
						<a className={buttonVariants({ variant: 'ghost' })} href={link.href}>
							{link.label}
						</a>
					))} */}
					<Button variant="outline" className="bg-white text-blue-800 rounded-lg">Sign In</Button>
					<Button variant="outline" className="bg-white text-blue-800 rounded-lg">Get Started</Button>
				</div>
				<Sheet open={open} onOpenChange={setOpen}>
					<Button size="icon" variant="outline" className="lg:hidden">
						<MenuToggle strokeWidth={2.5} open={open} onOpenChange={setOpen} className="size-6" />
					</Button>
					<SheetContent
                        className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
                        showClose={false}
                        side="left">
						<div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
							{links.map((link) => (
								<a
                                    className={buttonVariants({
										variant: 'ghost',
										className: 'justify-start',
									})}
                                    href={link.href}>
									{link.label}
								</a>
							))}
						</div>
						<SheetFooter>
							<Button variant="outline">Sign In</Button>
							<Button>Get Started</Button>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</nav>
        </header>
    );
}
