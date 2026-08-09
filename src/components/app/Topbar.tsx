import { Bell, Menu, Moon, Search, Sun, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useApp } from "@/context/AppContext";
import { Link, useNavigate } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

export function Topbar({ onMenu }: { onMenu: () => void }) {
  const { theme, toggleTheme, notifs, user, logout, markAllRead } = useApp();
  const nav = useNavigate();
  const unread = notifs.filter(n => !n.read).length;

  return (
    <header className="sticky top-0 z-20 h-16 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="grid h-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenu}>
            <Menu className="h-5 w-5" />
          </Button>
          <div className="relative hidden max-w-md flex-1 md:block md:w-80">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search patients, doctors, camps…" className="pl-9 bg-muted/50 border-transparent focus-visible:bg-background" />
          </div>
        </div>
        <div />
        <div className="flex items-center gap-1 sm:gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                {unread > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-destructive px-1 text-[10px] font-bold text-destructive-foreground">
                    {unread}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80" align="end">
              <DropdownMenuLabel className="flex items-center justify-between">
                Notifications
                <button onClick={markAllRead} className="text-xs font-normal text-primary hover:underline">Mark all read</button>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-y-auto">
                {notifs.slice(0, 6).map(n => (
                  <DropdownMenuItem key={n.id} className="flex flex-col items-start gap-1 py-2">
                    <div className="flex w-full items-center gap-2">
                      <span className={`h-2 w-2 shrink-0 rounded-full ${n.read ? "bg-muted-foreground/30" : "bg-primary"}`} />
                      <p className="truncate text-sm font-medium">{n.title}</p>
                    </div>
                    <p className="line-clamp-2 pl-4 text-xs text-muted-foreground">{n.message}</p>
                    <p className="pl-4 text-[10px] text-muted-foreground">{n.time}</p>
                  </DropdownMenuItem>
                ))}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild><Link to="/app/notifications">View all</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="ml-1 grid h-9 w-9 place-items-center rounded-full gradient-primary text-sm font-semibold text-white shadow-soft">
                {user?.name.split(" ").map(n => n[0]).slice(0,2).join("")}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <p className="text-sm font-semibold">{user?.name}</p>
                <p className="text-xs capitalize text-muted-foreground">{user?.role}</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild><Link to="/app/profile">Profile</Link></DropdownMenuItem>
              <Badge variant="secondary" className="hidden">x</Badge>
              <DropdownMenuItem
                onClick={() => { logout(); toast.success("Signed out"); nav({ to: "/" }); }}
                className="text-destructive focus:text-destructive"
              >
                <LogOut className="mr-2 h-4 w-4" /> Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
