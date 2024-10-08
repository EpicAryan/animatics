import Link from "next/link"

const Sidebar = () => {
  return (
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
            <div className="relative overflow-hidden h-full py-6 pr-6 lg:py-8">
                <div className="h-full w-full rounded-[inherit] overflow-hidden scroll-smooth">
                    <div className=" min-w-full table">
                        <div className="w-full">
                            <div className="pb-4">
                                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Components</h4>
                                <div className="grid grid-flow-row auto-rows-max text-sm">
                                    <Link href="text-hover-lift" className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Text Hover Lift</Link>
                                    <Link href="box-animate" className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Box Animate</Link>
                                    <Link href="mask-cursor" className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Mask Cursor</Link>
                                    <Link href="smooth-scroll" className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Smooth Scroll</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
  )
}

export default Sidebar