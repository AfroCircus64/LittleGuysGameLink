import React, { useState, useEffect } from 'react';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent, CardHeader } from './components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { Textarea } from './components/ui/textarea';
import { Separator } from './components/ui/separator';
import { 
  Bug, 
  Search, 
  Bell, 
  Settings, 
  HelpCircle, 
  Filter, 
  SortAsc, 
  Plus, 
  ChevronDown, 
  ChevronRight,
  MoreHorizontal,
  MessageCircle,
  Download,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Expand,
  Paperclip,
  Image as ImageIcon,
  Send,
  FileText,
  Users,
  BarChart3,
  FolderOpen,
  Calendar,
  Zap,
  GitBranch,
  Clock,
  User,
  X
} from 'lucide-react';
import svgPaths from './imports/svg-1i8p95orav';

type Issue = {
  id: string | number;
  code: string;
  title: string;
  description?: string;
  priority: string;
  status: string;
  platform: string;
  reportedAt?: string;
  assignee?: string;
  // Add other fields as needed
};

const [issues, setIssues] = useState<Issue[]>([]);
const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);
const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
const [videoPlaying, setVideoPlaying] = useState(false);
const [recentProjects, setRecentProjects] = useState<string[]>([]);
const [platforms, setPlatforms] = useState<{ id: number, name: string }[]>([]);
const [users, setUsers] = useState<{ id: number, username: string }[]>([]);

// Mapping between frontend display values and backend/database values
const statusDisplayToBackend: Record<string, string> = {
  "Open": "open",
  "In Progress": "in_progress",
  "Testing": "in_progress", // If you want a separate 'testing', add it to DB ENUM
  "Resolved": "resolved",
  "Closed": "closed"
};

const statusBackendToDisplay: Record<string, string> = {
  "open": "Open",
  "in_progress": "In Progress",
  "resolved": "Resolved",
  "closed": "Closed"
  // Add "testing": "Testing" if you add it to DB
};

const priorityDisplayToBackend: Record<string, string> = {
  "Critical": "urgent",
  "High": "high",
  "Medium": "medium",
  "Low": "low"
};

const priorityBackendToDisplay: Record<string, string> = {
  "urgent": "Critical",
  "high": "High",
  "medium": "Medium",
  "low": "Low"
};

// When fetching issues from backend, map backend values to display values
function mapIssueFromBackend(issue: any): Issue {
  return {
    ...issue,
    status: statusBackendToDisplay[issue.status] || issue.status,
    priority: priorityBackendToDisplay[issue.priority] || issue.priority
  };
}

// When sending a new/updated issue to backend, map display values to backend values
function mapIssueToBackend(issue: Issue): any {
  return {
    ...issue,
    status: statusDisplayToBackend[issue.status] || issue.status,
    priority: priorityDisplayToBackend[issue.priority] || issue.priority
  };
}

// Example usage in your fetch and setIssues logic:
useEffect(() => {
  fetch("/api/bugs")
    .then((res) => res.json())
    .then((data: Issue[]) => {
      setIssues(data.map(mapIssueFromBackend));
      setSelectedIssue(data.length > 0 ? mapIssueFromBackend(data[0]) : null);
    });

  // Fetch recent projects if endpoint exists
  fetch("/api/projects")
    .then((res) => res.json())
    .then((data: { name: string }[]) => {
      setRecentProjects(data.map((p) => p.name));
    })
    .catch(() => {
      // fallback or leave empty if endpoint doesn't exist yet
      setRecentProjects([]);
    });

  fetch("/api/platforms")
    .then(res => res.json())
    .then(data => setPlatforms(data));

  fetch("/api/users")
    .then(res => res.json())
    .then(data => setUsers(data));
}, []);

const statusCounts = {
  open: issues.filter((i) => i.status === "Open").length,
  inProgress: issues.filter((i) => i.status === "In Progress").length,
  testing: issues.filter((i) => i.status === "Testing").length,
  resolved: issues.filter((i) => i.status === "Resolved").length,
};

const sidebarItems = [
  { icon: Bug, label: 'Bug Tracker', active: true },
  { icon: FolderOpen, label: 'Asset Manager' },
  { icon: FileText, label: 'Documentation' },
  { icon: Zap, label: 'Automation' },
  { icon: GitBranch, label: 'Release Manager' }
];

const workspaceItems = [
  { icon: FolderOpen, label: 'Projects' },
  { icon: Users, label: 'Team' },
  { icon: BarChart3, label: 'Analytics' }
];

function PriorityBadge({ priority }: { priority: string }) {
  const colors = {
    Critical: 'bg-red-600 text-white',
    High: 'bg-red-500/80 text-white',
    Medium: 'bg-orange-500 text-white',
    Low: 'bg-blue-500 text-white'
  };
  
  return (
    <Badge className={`${colors[priority as keyof typeof colors]} border-0 text-xs`}>
      {priority}
    </Badge>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors = {
    Open: 'bg-red-500/20 text-red-500 border-red-500/30',
    'In Progress': 'bg-orange-500/20 text-orange-500 border-orange-500/30',
    Testing: 'bg-blue-500/20 text-blue-500 border-blue-500/30',
    Resolved: 'bg-green-500/20 text-green-500 border-green-500/30'
  };
  
  return (
    <Badge variant="outline" className={`${colors[status as keyof typeof colors]} text-sm`}>
      {status}
    </Badge>
  );
}

type User = {
  name: string;
  role: string;
  avatarUrl?: string;
  initials: string;
};

export default function App() {
  const [selectedPlatform, setSelectedPlatform] = useState('UE5');
  const [selectedIssue, setSelectedIssue] = useState(issues[0]);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [user, setUser] = useState<User>({
    name: "Alex Morgan",
    role: "Lead Developer",
    avatarUrl: undefined, // or a URL string if you have one
    initials: "AM",
  });

  const statusOptions = ["Open", "In Progress", "Resolved", "Closed"];
  const priorityOptions = ["Critical", "High", "Medium", "Low"];

  // Update formIssue to use platformId and assigneeId
  const [formIssue, setFormIssue] = useState({
    id: "",
    code: "",
    title: "",
    description: "",
    priority: "Medium",
    status: "Open",
    platform: platforms[0]?.name || "",
    platformId: platforms[0]?.id || "",
    assignee: users[0]?.username || "",
    assigneeId: users[0]?.id || "",
  });
  function handleFormChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    // If platformId or assigneeId changes, update platform/assignee as well
    if (name === "platformId") {
      const platformObj = platforms.find(p => String(p.id) === value);
      setFormIssue((prev) => ({
        ...prev,
        platformId: value,
        platform: platformObj ? platformObj.name : "",
      }));
  } else if (name === "assigneeId") {
    const userObj = users.find(u => String(u.id) === value);
    setFormIssue((prev) => ({
      ...prev,
      assigneeId: value,
      assignee: userObj ? userObj.username : "",
    }));
    } else {
      setFormIssue((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }
  
    function getPlatformName(id: number) {
      const platform = platforms.find(p => p.id === id);
      return platform ? platform.name : "";
    }

  function getAssigneeName(id: number) {
    const user = users.find(u => u.id === id);
    return user ? user.username : "";
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    // Prepare issue data for backend
    const newIssue = mapIssueToBackend(formIssue);
    fetch("/api/bugs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newIssue),
    })
      .then((res) => res.json())
      .then((createdIssue) => {
        setIssues((prev) => [...prev, mapIssueFromBackend(createdIssue)]);
        setFormIssue({
          id: "",
          code: "",
          title: "",
          description: "",
          priority: "Medium",
          status: "Open",
          platform: platforms[0]?.name || "",
          platformId: platforms[0]?.id || "",
          assignee: users[0]?.username || "",
          assigneeId: users[0]?.id || "",
        });
      })
      .catch((err) => {
        // Optionally handle error
        console.error("Failed to submit issue:", err);
      });
  }
  return (
    <div className="h-screen bg-[#121212] text-white flex overflow-hidden">
      {/* Sidebar */}
      <div className={`bg-[#1e1e1e] border-r border-gray-800 flex flex-col transition-all duration-300 ${sidebarCollapsed ? 'w-16' : 'w-64'}`}>
        {/* Logo/Header */}
        <div className="p-4 border-b border-gray-800">
          {sidebarCollapsed ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 bg-[#1a237e] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">GD</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="p-1 text-gray-400 hover:text-white"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1a237e] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">GD</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-white">GameDev Suite</h1>
                <p className="text-xs text-gray-400">Professional Tools</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="ml-auto p-1 text-gray-400 hover:text-white"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              >
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex-1 p-2 space-y-6">
          {!sidebarCollapsed && (
            <>
              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
                  Main Navigation
                </h3>
                <nav className="space-y-1">
                  {sidebarItems.map((item) => (
                    <Button
                      key={item.label}
                      variant={item.active ? "default" : "ghost"}
                      className={`w-full justify-start gap-3 text-sm ${
                        item.active 
                          ? 'bg-[#1a237e] text-white hover:bg-[#1a237e]/90' 
                          : 'text-gray-400 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Button>
                  ))}
                </nav>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
                  Workspace
                </h3>
                <nav className="space-y-1">
                  {workspaceItems.map((item) => (
                    <Button
                      key={item.label}
                      variant="ghost"
                      className="w-full justify-start gap-3 text-sm text-gray-400 hover:text-white hover:bg-gray-800"
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Button>
                  ))}
                </nav>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
                  Recent Projects
                </h3>
                <nav className="space-y-1">
                  {recentProjects.map((project) => (
                    <Button
                      key={project}
                      variant="ghost"
                      className="w-full justify-start text-sm text-gray-400 hover:text-white hover:bg-gray-800 px-10"
                    >
                      {project}
                    </Button>
                  ))}
                </nav>
              </div>
            </>
          )}
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              {user.avatarUrl ? (
                <AvatarImage src={user.avatarUrl} />
              ) : (
                <AvatarFallback>{user.initials}</AvatarFallback>
              )}
            </Avatar>
            {!sidebarCollapsed && (
              <div className="flex-1">
                <p className="text-sm font-medium text-white">{user.name}</p>
                <p className="text-xs text-gray-400">{user.role}</p>
              </div>
            )}
            {!sidebarCollapsed && (
              <Button variant="ghost" size="sm" className="p-1 text-gray-400 hover:text-white">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-[#1e1e1e] border-b border-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              {/* Platform Selector */}
              <div className="flex gap-1">
                {platforms.map((platform) => (
                  <Button
                    key={platform.name}
                    variant={selectedPlatform === platform.name ? "default" : "secondary"}
                    size="sm"
                    className={`text-sm ${
                      selectedPlatform === platform.name
                        ? 'bg-[#1a237e] text-white hover:bg-[#1a237e]/90'
                        : 'bg-[#2a2a2a] text-gray-400 hover:text-white'
                    }`}
                    onClick={() => setSelectedPlatform(platform.name)}
                  >
                    {platform.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search..."
                  className="w-64 pl-10 bg-[#2a2a2a] border-gray-700 text-white placeholder:text-gray-400"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="relative text-gray-400 hover:text-white">
                  <Bell className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <HelpCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 bg-[#121212] p-6 overflow-hidden">
          <div className="h-full flex flex-col gap-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-white">Bug Tracker</h1>
                <p className="text-gray-400 mt-1">Manage and track issues across platforms</p>
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" size="sm" className="bg-[#2a2a2a] text-gray-400 hover:text-white">
                  <Filter className="h-3.5 w-3.5 mr-2" />
                  Filter
                </Button>
                <Button variant="secondary" size="sm" className="bg-[#2a2a2a] text-gray-400 hover:text-white">
                  <SortAsc className="h-3.5 w-3.5 mr-2" />
                  Sort
                </Button>
                <Button className="bg-[#1a237e] text-white hover:bg-[#1a237e]/90">
                  <Plus className="h-3.5 w-3.5 mr-2" />
                  New Issue
                </Button>
              </div>
            </div>

            {/* Status Overview */}
            <div className="grid grid-cols-4 gap-6">
              {[
                { label: 'Open', count: statusCounts.open, color: 'text-red-500', icon: '●', detail: '12 high priority' },
                { label: 'In Progress', count: statusCounts.inProgress, color: 'text-orange-500', icon: '●', detail: '8 assigned to you' },
                { label: 'Testing', count: statusCounts.testing, color: 'text-blue-500', icon: '●', detail: '3 need verification' },
                { label: 'Resolved', count: statusCounts.resolved, color: 'text-green-500', icon: '●', detail: 'Last 30 days' }
              ].map((status) => (
                <Card key={status.label} className="bg-[#1e1e1e] border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium text-white">{status.label}</h3>
                      <span className="text-2xl font-semibold text-white">{status.count}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span className={`text-xs ${status.color}`}>{status.icon}</span>
                      {status.detail}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="flex-1 grid grid-cols-5 gap-6 min-h-0">
              {/* Issues List */}
              <div className="col-span-2">
                <Card className="bg-[#1e1e1e] border-gray-800 h-full flex flex-col">
                  <CardHeader className="p-4 border-b border-gray-800">
                    <div className="flex items-center justify-between">
                      <h2 className="font-medium text-white">
                        Issues ({issues.length})
                      </h2>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="p-1 text-gray-400 hover:text-white">
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-1 text-gray-400 hover:text-white">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <div className="flex-1 overflow-auto">
                    <div className="space-y-0">
                      {issues.map((issue) => (
                        <div
                          key={issue.id}
                          className={`p-4 border-b border-gray-800 cursor-pointer transition-colors hover:bg-[#2a2a2a] ${
                            selectedIssue && selectedIssue.id === issue.id ? 'bg-[#2a2a2a]' : ''
                          }`}
                          onClick={() => setSelectedIssue(issue)}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <PriorityBadge priority={issue.priority} />
                            <span className="font-medium text-white text-sm">{issue.code}</span>
                            <span className="text-xs text-gray-400 ml-auto">
                              {issue.reportedAt ? new Date(issue.reportedAt).toLocaleString() : ''}
                            </span>
                          </div>
                          <h3 className="font-medium text-white mb-3 line-clamp-2">{issue.title}</h3>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="bg-[#1a237e]/20 text-[#1a237e] border-[#1a237e]/30 text-xs">
                                {issue.platform}
                              </Badge>
                              <div className="flex items-center gap-1 text-xs text-gray-400">
                                <MessageCircle className="h-3 w-3" />
                                {/* If you add comments to your backend, use issue.comments.length, else 0 */}
                                0
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Issue Detail */}
              <div className="col-span-2">
                <Card className="bg-[#1e1e1e] border-gray-800 h-full flex flex-col">
                  <CardHeader className="p-4 border-b border-gray-800">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          {selectedIssue && <PriorityBadge priority={selectedIssue.priority} />}
                          <span className="font-medium text-white">
                            {selectedIssue ? `${selectedIssue.code}: ${selectedIssue.title}` : "Select an issue"}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="p-1 text-gray-400 hover:text-white">
                          <X className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-1 text-gray-400 hover:text-white">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <div className="flex-1 overflow-auto p-4 space-y-6">
                    {/* Status and Assignment */}
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-white">Status:</span>
                        {selectedIssue && <StatusBadge status={selectedIssue.status} />}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-white">Assigned:</span>
                        <span className="text-sm text-white">{selectedIssue?.assignee || "Unassigned"}</span>
                      </div>
                      <Button className="bg-[#1a237e] text-white hover:bg-[#1a237e]/90 ml-auto">
                        Resolve
                      </Button>
                    </div>

                    {/* Description */}
                    <div>
                      <h3 className="text-sm font-medium text-white mb-3">Description</h3>
                      <Card className="bg-[#121212] border-gray-800 p-4">
                        <div className="space-y-4 text-white">
                          <p>{selectedIssue?.description || "No description provided."}</p>
                        </div>
                      </Card>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6 overflow-auto">
                {/* Details */}
                <Card className="bg-[#1e1e1e] border-gray-800">
                  <CardHeader className="p-4">
                    <h3 className="text-sm font-medium text-white">Details</h3>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 space-y-4">
                    <div>
                      <label className="text-xs text-gray-400">Platform</label>
                      <div className="mt-1">
                        <Badge variant="outline" className="bg-[#1a237e]/20 text-[#1a237e] border-[#1a237e]/30">
                          {selectedIssue?.platform}
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400">Priority</label>
                      <p className="text-sm text-red-500 mt-1">{selectedIssue?.priority}</p>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400">Reported</label>
                      <p className="text-sm text-white mt-1">
                        {selectedIssue?.reportedAt ? new Date(selectedIssue.reportedAt).toLocaleString() : ""}
                      </p>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400">Assignee</label>
                      <p className="text-sm text-white mt-1">{selectedIssue?.assignee || "Unassigned"}</p>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400">Status</label>
                      <p className="text-sm text-white mt-1">{selectedIssue?.status}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Issue Submission Form */}
            <Card className="bg-[#1e1e1e] border-gray-800 p-4 mb-6">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <Input
                  name="title"
                  value={formIssue.title}
                  onChange={handleFormChange}
                  placeholder="Issue Title"
                  required
                />
                <Textarea
                  name="description"
                  value={formIssue.description}
                  onChange={handleFormChange}
                  placeholder="Description"
                />
                <div className="flex gap-4">
                  <select
                    name="status"
                    value={formIssue.status}
                    onChange={handleFormChange}
                    className="bg-[#2a2a2a] text-white p-2 rounded"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                  <select
                    name="priority"
                    value={formIssue.priority}
                    onChange={handleFormChange}
                    className="bg-[#2a2a2a] text-white p-2 rounded"
                  >
                    {priorityOptions.map((priority) => (
                      <option key={priority} value={priority}>{priority}</option>
                    ))}
                  </select>
                  <select
                    name="platformId"
                    value={formIssue.platformId}
                    onChange={handleFormChange}
                    className="bg-[#2a2a2a] text-white p-2 rounded"
                  >
                    {platforms.map((platform) => (
                      <option key={platform.id} value={platform.id}>{platform.name}</option>
                    ))}
                  </select>
                </div>
                <Input
                  name="assigneeId"
                  value={formIssue.assigneeId}
                  onChange={handleFormChange}
                  placeholder="Assignee"
                />
                <Button type="submit" className="bg-[#1a237e] text-white hover:bg-[#1a237e]/90">
                  Submit Issue
                </Button>
              </form>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
