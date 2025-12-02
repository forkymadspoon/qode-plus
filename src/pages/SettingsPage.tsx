// src/Settings.tsx
import React from 'react';
import {
  Upload,
  Plus,
  Edit2,
  Trash2,
  RefreshCw,
  Copy,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

// ---------- Mock data ----------

const mockUsers = [
  {
    id: 1,
    name: 'Sarah Chen',
    email: 'sarah.chen@qodeplus.com',
    role: 'Admin',
    category: 'FMCG',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    email: 'marcus.r@qodeplus.com',
    role: 'Editor',
    category: 'BCRS',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Aisha Patel',
    email: 'aisha.patel@qodeplus.com',
    role: 'Editor',
    category: 'Beauty',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Thomas Zhang',
    email: 'thomas.z@qodeplus.com',
    role: 'Viewer',
    category: 'FMCG',
    status: 'Pending',
  },
  {
    id: 5,
    name: 'Elena Kowalski',
    email: 'elena.k@qodeplus.com',
    role: 'Viewer',
    category: 'BCRS',
    status: 'Suspended',
  },
];

const mockAuditLog = [
  {
    id: 1,
    timestamp: '2025-11-30 14:32:11',
    user: 'Sarah Chen',
    action: 'Updated organization profile',
    result: 'Success',
    category: 'FMCG',
  },
  {
    id: 2,
    timestamp: '2025-11-30 13:15:42',
    user: 'Marcus Rodriguez',
    action: 'Added new user',
    result: 'Success',
    category: 'BCRS',
  },
  {
    id: 3,
    timestamp: '2025-11-30 11:48:09',
    user: 'Aisha Patel',
    action: 'Regenerated API key',
    result: 'Success',
    category: 'Beauty',
  },
  {
    id: 4,
    timestamp: '2025-11-30 10:22:33',
    user: 'Thomas Zhang',
    action: 'Failed login attempt',
    result: 'Error',
    category: 'FMCG',
  },
  {
    id: 5,
    timestamp: '2025-11-29 16:05:21',
    user: 'Sarah Chen',
    action: 'Updated webhook URL',
    result: 'Success',
    category: 'BCRS',
  },
];

// ---------- helpers for badges ----------

function getRoleColor(role: string) {
  if (role === 'Admin') return 'bg-[#05466C] text-white';
  if (role === 'Editor') return 'bg-[#F0B82E] text-[#05466C]';
  if (role === 'Viewer') return 'bg-[#E5E7EB] text-[#6B7280]';
  return 'bg-gray-100 text-gray-700';
}

function getCategoryColor(category: string) {
  if (category === 'FMCG') return 'bg-[#05466C] text-white';
  if (category === 'BCRS') return 'bg-[#F0B82E] text-[#05466C]';
  if (category === 'Beauty') return 'bg-[#FEE2E2] text-[#EB121E]';
  return 'bg-gray-100 text-gray-700';
}

function getStatusColor(status: string) {
  if (status === 'Active') return 'bg-[#D1FAE5] text-[#065F46]';
  if (status === 'Pending') return 'bg-[#FEF3C7] text-[#92400E]';
  if (status === 'Suspended') return 'bg-[#FEE2E2] text-[#991B1B]';
  return 'bg-gray-100 text-gray-700';
}

function getResultColor(result: string) {
  if (result === 'Success') return 'bg-[#D1FAE5] text-[#065F46]';
  if (result === 'Error') return 'bg-[#FEE2E2] text-[#991B1B]';
  return 'bg-gray-100 text-gray-700';
}

// ---------- main page component ----------

export function Settings() {
  const [aiAssistant, setAiAssistant] = React.useState(true);
  const [autoReports, setAutoReports] = React.useState(true);
  const [supplierAlerts, setSupplierAlerts] = React.useState(false);
  const [regulatoryUpdates, setRegulatoryUpdates] = React.useState(true);

  return (
    <div className="flex flex-col gap-8">
      {/* Page header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-[#05466C]">Settings</h1>
        <p className="text-[#6B7280]">
          Manage organization information, user access, and integrations.
        </p>
      </div>

      {/* Organization Profile */}
      <section className="flex flex-col gap-4">
        <h2 className="text-[#05466C]">Organization Profile</h2>
        <Card className="p-6 bg-white border border-[#E5E7EB]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Organization Name */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="org-name" className="text-sm text-[#374151]">
                Organization Name
              </Label>
              <Input
                id="org-name"
                defaultValue="Qode+ Sustainability Inc."
                className="border-[#E5E7EB] focus-visible:ring-[#05466C]"
              />
            </div>

            {/* Industry Type */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="industry" className="text-sm text-[#374151]">
                Industry Type
              </Label>
              <Select defaultValue="fmcg">
                <SelectTrigger className="border-[#E5E7EB] focus-visible:ring-[#05466C]">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fmcg">FMCG</SelectItem>
                  <SelectItem value="bcrs">
                    BCRS (Beverage Packaging / Recycling)
                  </SelectItem>
                  <SelectItem value="beauty">Beauty / Cosmetics</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Logo Upload */}
            <div className="flex flex-col gap-2">
              <Label className="text-sm text-[#374151]">Organization Logo</Label>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#F9FAFB] border-2 border-dashed border-[#E5E7EB] rounded-lg flex items-center justify-center">
                  <div className="w-10 h-10 rounded-lg bg-[#05466C] flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Q+</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="border-[#E5E7EB] text-[#6B7280] hover:bg-[#F9FAFB]"
                >
                  <Upload className="size-4 mr-2" />
                  Upload Logo
                </Button>
              </div>
            </div>

            {/* Country / Region */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="country" className="text-sm text-[#374151]">
                Country / Region
              </Label>
              <Select defaultValue="singapore">
                <SelectTrigger className="border-[#E5E7EB] focus-visible:ring-[#05466C]">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="singapore">Singapore</SelectItem>
                  <SelectItem value="eu">European Union</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="china">China</SelectItem>
                  <SelectItem value="global">Global</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Contact Email */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-sm text-[#374151]">
                Contact Email
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue="contact@qodeplus.com"
                className="border-[#E5E7EB] focus-visible:ring-[#05466C]"
              />
            </div>

            {/* Compliance Region */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="compliance" className="text-sm text-[#374151]">
                Compliance Region
              </Label>
              <Select defaultValue="singapore">
                <SelectTrigger className="border-[#E5E7EB] focus-visible:ring-[#05466C]">
                  <SelectValue placeholder="Select compliance region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="singapore">Singapore</SelectItem>
                  <SelectItem value="eu">EU</SelectItem>
                  <SelectItem value="us">US</SelectItem>
                  <SelectItem value="china">China</SelectItem>
                  <SelectItem value="global">Global</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button className="bg-[#05466C] text-white hover:bg-[#003C65]">
              Save Changes
            </Button>
          </div>
        </Card>
      </section>

      {/* User Management */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-[#05466C]">User Management</h2>
          <Button className="w-full sm:w-auto bg-[#05466C] text-white hover:bg-[#003C65]">
            <Plus className="size-4 mr-2" />
            Add User
          </Button>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <tr>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm text-[#6B7280]">
                    Name
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm text-[#6B7280]">
                    Email
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm text-[#6B7280]">
                    Role
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm text-[#6B7280]">
                    Assigned Category
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm text-[#6B7280]">
                    Status
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm text-[#6B7280]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {mockUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-[#F9FAFB]">
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-[#111827]">
                      {user.name}
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-[#6B7280]">
                      {user.email}
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <Badge
                        className={`${getRoleColor(
                          user.role,
                        )} rounded-full px-3 py-1 text-xs`}
                      >
                        {user.role}
                      </Badge>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <Badge
                        className={`${getCategoryColor(
                          user.category,
                        )} rounded-full px-3 py-1 text-xs`}
                      >
                        {user.category}
                      </Badge>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <Badge
                        className={`${getStatusColor(
                          user.status,
                        )} rounded-full px-3 py-1 text-xs`}
                      >
                        {user.status}
                      </Badge>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#05466C] hover:bg-[#EFF6FF]"
                        >
                          <Edit2 className="size-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#EB121E] hover:bg-[#FEE2E2]"
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Access Controls */}
      <section className="flex flex-col gap-4">
        <h2 className="text-[#05466C]">Access Controls</h2>
        <Card className="p-6 bg-white border border-[#E5E7EB]">
          <div className="space-y-6">
            {[
              {
                title: 'Enable AI Assistant',
                desc: 'Allow AI-powered insights and recommendations',
                checked: aiAssistant,
                onChange: setAiAssistant,
              },
              {
                title: 'Allow Auto-Generated Reports',
                desc: 'Automatically generate weekly and monthly reports',
                checked: autoReports,
                onChange: setAutoReports,
              },
              {
                title: 'Allow Supplier Risk Alerts',
                desc: 'Receive notifications for high-risk suppliers',
                checked: supplierAlerts,
                onChange: setSupplierAlerts,
              },
              {
                title: 'Allow Regulatory Patch Updates',
                desc: 'Automatic updates for compliance requirements',
                checked: regulatoryUpdates,
                onChange: setRegulatoryUpdates,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex flex-col gap-1">
                  <Label className="text-sm text-[#111827]">{item.title}</Label>
                  <p className="text-sm text-[#6B7280]">{item.desc}</p>
                </div>
                <div className="sm:ml-4">
                  <Switch
                    checked={item.checked}
                    onCheckedChange={item.onChange}
                    className="data-[state=checked]:bg-[#F0B82E]"
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Integrations & API Keys */}
      <section className="flex flex-col gap-4">
        <h2 className="text-[#05466C]">Integrations & API Keys</h2>
        <Card className="p-6 bg-white border border-[#E5E7EB]">
          <div className="space-y-6">
            {/* API Key */}
            <div className="flex flex-col gap-2">
              <Label className="text-sm text-[#374151]">API Key</Label>
              <div className="flex flex-col gap-3 md:flex-row">
                <Input
                  type="password"
                  value="qode_sk_live_••••••••••••••••••••"
                  readOnly
                  className="flex-1 border-[#E5E7EB] bg-[#F9FAFB]"
                />
                <div className="flex gap-2 md:ml-2">
                  <Button
                    variant="outline"
                    className="flex-1 md:flex-none border-[#E5E7EB] text-[#6B7280] hover:bg-[#F9FAFB]"
                  >
                    <Copy className="size-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 md:flex-none border-[#E5E7EB] text-[#6B7280] hover:bg-[#F9FAFB]"
                  >
                    <RefreshCw className="size-4 mr-2" />
                    Regenerate Key
                  </Button>
                </div>
              </div>
              <p className="text-xs text-[#6B7280]">
                Use API keys to connect external systems (EPCIS, PLM, LCA tools).
              </p>
            </div>

            {/* Webhook URL */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="webhook" className="text-sm text-[#374151]">
                Webhook URL
              </Label>
              <Input
                id="webhook"
                type="url"
                placeholder="https://your-domain.com/webhook"
                defaultValue="https://api.qodeplus.com/webhooks/impact-ledger"
                className="border-[#E5E7EB] focus-visible:ring-[#05466C]"
              />
            </div>

            {/* Integration Status */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between p-4 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-[#05466C] mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-[#111827]">
                    Integration Status
                  </p>
                  <p className="text-xs text-[#6B7280]">
                    All systems operational
                  </p>
                </div>
              </div>
              <Badge className="self-start md:self-auto bg-[#05466C] text-white rounded-full px-3 py-1 text-xs">
                Active
              </Badge>
            </div>
          </div>
        </Card>
      </section>

      {/* Audit Log */}
      <section className="flex flex-col gap-4 mb-4">
        <h2 className="text-[#05466C]">Audit Log</h2>
        <div className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <tr>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm text-[#6B7280]">
                    Timestamp
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm text-[#6B7280]">
                    User
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm text-[#6B7280]">
                    Action
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm text-[#6B7280]">
                    Result
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm text-[#6B7280]">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {mockAuditLog.map((log) => (
                  <tr key={log.id} className="hover:bg-[#F9FAFB]">
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-[#6B7280]">
                      <div className="flex items-center gap-2">
                        <Clock className="size-4" />
                        <span>{log.timestamp}</span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-[#111827]">
                      {log.user}
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-[#6B7280]">
                      {log.action}
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <Badge
                        className={`${getResultColor(
                          log.result,
                        )} rounded-full px-3 py-1 text-xs`}
                      >
                        {log.result}
                      </Badge>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <Badge
                        className={`${getCategoryColor(
                          log.category,
                        )} rounded-full px-3 py-1 text-xs`}
                      >
                        {log.category}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Settings;
