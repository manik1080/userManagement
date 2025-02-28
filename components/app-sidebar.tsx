import { Building, Home, Inbox, LogOut, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"

  const items = [ // here i define all sidebar options
    {
      id: 0,
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      id: 1,
      title: "Dashboard",
      url: "dashboard",
      icon: Inbox,
    },
    // {
    //   title: "Search",  # not adding this feature as of now
    //   url: "#",
    //   icon: Search,
    // },
    {
        id: 2,
        title: "Tenants",
        url: "tenants",
        icon: Building,
      },
    {
      id: 3,
      title: "Manage Roles",
      url: "manage",
      icon: Settings,
    },
    {
      id: 4,
      title: "LogOut",
      url: "logout",
      icon: LogOut,
    }
  ]

  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel><h1>Tenant Manager</h1></SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <a key={item.id} href={item.url}>
                                    <item.icon />
                                    <span key={item.id}>{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }