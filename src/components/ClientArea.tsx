'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Server, HardDrive, Globe, CreditCard, BarChart2, Bell, Settings, Users, Home, PlusCircle, ShoppingCart, LogOut, UserCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Check, Download, Laptop, Shield, ChevronRight } from 'lucide-react';

// Define the structure of a service
interface Service {
    id: string;
    name: string;
    type: string;
    status: 'active' | 'suspended' | 'pending';
    recurringAmount: number;
    nextDueDate: string;
}

// Define the structure of an invoice
interface Invoice {
    id: string;
    invoiceNumber: string;
    createdAt: string;
    dueDate: string;
    total: number;
    status: 'paid' | 'unpaid' | 'overdue';
}

const ClientArea: React.FC = () => {
    const [activeTab, setActiveTab] = useState('services');
    const [services, setServices] = useState<Service[]>([]);
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [userFullName, setUserFullName] = useState('');
    const [userPhoneNumber, setUserPhoneNumber] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [profileUpdateMessage, setProfileUpdateMessage] = useState('');

    const router = useRouter();
    const { user, signOut, getUserData, updateUserData } = useAuth();

    const userData = getUserData();
    const displayName = userData.full_name || user?.email || 'User';

    // Initialize form values from user data
    useEffect(() => {
        setUserFullName(userData.full_name || '');
        setUserPhoneNumber(userData.phone_number || '');
    }, [userData]);

    // No more mock data - we'll display empty states instead

    const handleLogout = async () => {
        try {
            await signOut();
            router.push('/');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const handleSaveProfile = async () => {
        try {
            setIsSaving(true);
            setProfileUpdateMessage('');

            await updateUserData({
                full_name: userFullName,
                phone_number: userPhoneNumber
            });

            setProfileUpdateMessage('Profile updated successfully!');

            // Clear the message after 3 seconds
            setTimeout(() => {
                setProfileUpdateMessage('');
            }, 3000);
        } catch (error) {
            console.error('Error updating profile:', error);
            setProfileUpdateMessage('Failed to update profile. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };

    const navigateTo = (path: string) => {
        router.push(path);
    };

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Get the status color for services
    const getStatusColor = (status: Service['status']) => {
        switch (status) {
            case 'active':
                return 'bg-green-500';
            case 'suspended':
                return 'bg-yellow-500';
            case 'pending':
                return 'bg-blue-500';
            default:
                return 'bg-gray-500';
        }
    };

    // Get the status color for invoices
    const getInvoiceStatusColor = (status: Invoice['status']) => {
        switch (status) {
            case 'paid':
                return 'bg-green-500 hover:bg-green-600';
            case 'unpaid':
                return 'bg-yellow-500 hover:bg-yellow-600';
            case 'overdue':
                return 'bg-red-500 hover:bg-red-600';
            default:
                return 'bg-gray-500 hover:bg-gray-600';
        }
    };

    return (
        <section className="py-12 bg-gray-900 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 pt-12 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-white">Client Area</h1>
                    <div className="flex space-x-4 items-center">
                        <div className="text-right mr-3">
                            <p className="text-sm text-gray-400">Welcome,</p>
                            <p className="text-white font-medium">{displayName}</p>
                        </div>
                        <Link href="/" className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 flex items-center">
                            <Home className="h-4 w-4 mr-2" />
                            Back to Home
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-6">
                    {/* Sidebar Navigation */}
                    <div className="col-span-12 md:col-span-3 lg:col-span-2">
                        <div className="bg-gray-800 rounded-lg p-3">
                            <div className="space-y-1">
                                <button
                                    onClick={() => setActiveTab('services')}
                                    className={`w-full flex items-center px-4 py-2 text-sm rounded-lg ${activeTab === 'services' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                                >
                                    <Server className="h-5 w-5 mr-3" />
                                    My Services
                                </button>
                                <button
                                    onClick={() => setActiveTab('invoices')}
                                    className={`w-full flex items-center px-4 py-2 text-sm rounded-lg ${activeTab === 'invoices' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                                >
                                    <CreditCard className="h-5 w-5 mr-3" />
                                    Billing & Invoices
                                </button>
                                <button
                                    onClick={() => setActiveTab('account')}
                                    className={`w-full flex items-center px-4 py-2 text-sm rounded-lg ${activeTab === 'account' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                                >
                                    <UserCircle className="h-5 w-5 mr-3" />
                                    Account Settings
                                </button>

                                <div className="border-t border-gray-700 my-2 pt-2">
                                    <Link
                                        href="/#services"
                                        className="w-full flex items-center px-4 py-2 text-sm rounded-lg text-gray-300 hover:bg-gray-700"
                                    >
                                        <Server className="h-5 w-5 mr-3" />
                                        Our Services
                                    </Link>
                                    <Link
                                        href="/#features"
                                        className="w-full flex items-center px-4 py-2 text-sm rounded-lg text-gray-300 hover:bg-gray-700"
                                    >
                                        <Settings className="h-5 w-5 mr-3" />
                                        Features
                                    </Link>
                                    <Link
                                        href="/#pricing"
                                        className="w-full flex items-center px-4 py-2 text-sm rounded-lg text-gray-300 hover:bg-gray-700"
                                    >
                                        <CreditCard className="h-5 w-5 mr-3" />
                                        Pricing
                                    </Link>
                                </div>

                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center px-4 py-2 text-sm rounded-lg text-red-400 hover:bg-gray-700"
                                >
                                    <LogOut className="h-5 w-5 mr-3" />
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-span-12 md:col-span-9 lg:col-span-10">
                        {/* Top Navigation */}
                        <div className="bg-gray-800 p-4 rounded-lg mb-4">
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => setActiveTab('services')}
                                    className="flex items-center text-gray-400 hover:text-white"
                                >
                                    <Server className="h-5 w-5 mr-2" />
                                    <span>My Services</span>
                                </button>
                                <div className="text-gray-600">/</div>
                                <button
                                    onClick={() => setActiveTab('invoices')}
                                    className="flex items-center text-gray-400 hover:text-white"
                                >
                                    <CreditCard className="h-5 w-5 mr-2" />
                                    <span>Billing & Invoices</span>
                                </button>
                                <div className="text-gray-600">/</div>
                                <button
                                    onClick={() => setActiveTab('account')}
                                    className="flex items-center text-gray-400 hover:text-white"
                                >
                                    <UserCircle className="h-5 w-5 mr-2" />
                                    <span>Account Settings</span>
                                </button>
                            </div>
                        </div>

                        {/* Services Content */}
                        {activeTab === 'services' && (
                            <div className="bg-gray-800 rounded-lg">
                                <div className="p-4 border-b border-gray-700">
                                    <h2 className="text-xl font-semibold text-white">My Services</h2>
                                    <p className="text-gray-400 text-sm mt-1">View and manage all your active services</p>
                                </div>
                                <div className="p-8 text-center">
                                    <p className="text-gray-400 mb-4">You don't have any active services yet</p>
                                    <Button
                                        onClick={() => navigateTo('/product/gameserver')}
                                        className="bg-purple-600 hover:bg-purple-700"
                                    >
                                        Browse Services
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* Invoices Content */}
                        {activeTab === 'invoices' && (
                            <div className="bg-gray-800 rounded-lg">
                                <div className="p-4 border-b border-gray-700">
                                    <h2 className="text-xl font-semibold text-white">Billing & Invoices</h2>
                                    <p className="text-gray-400 text-sm mt-1">Manage your billing information and view invoices</p>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-white font-medium mb-3">Payment Method</h3>
                                    <div className="bg-gray-700/50 rounded-lg p-6 mb-8">
                                        <div className="text-center">
                                            <p className="text-gray-400 mb-4">No payment methods added yet</p>
                                            <Button
                                                variant="outline"
                                                className="border-gray-600 text-white hover:bg-gray-700"
                                            >
                                                Add Payment Method
                                            </Button>
                                        </div>
                                    </div>

                                    <h3 className="text-white font-medium mb-3">Recent Invoices</h3>
                                    <div className="bg-gray-700/50 rounded-lg p-6">
                                        <div className="text-center">
                                            <p className="text-gray-400">No invoices found</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Account Settings Content */}
                        {activeTab === 'account' && (
                            <div className="bg-gray-800 rounded-lg">
                                <div className="p-4 border-b border-gray-700">
                                    <h2 className="text-xl font-semibold text-white">Account Settings</h2>
                                    <p className="text-gray-400 text-sm mt-1">Manage your account information and preferences</p>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-white font-medium mb-3">Profile Information</h3>
                                    <div className="bg-gray-700/50 rounded-lg p-6 mb-8">
                                        <div className="flex flex-col md:flex-row items-center mb-6">
                                            <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white text-2xl font-bold mb-4 md:mb-0 md:mr-6">
                                                {displayName.charAt(0).toUpperCase()}
                                            </div>
                                            <div className="text-center md:text-left">
                                                <h4 className="text-white text-lg font-medium">{userData.full_name || 'Set your name'}</h4>
                                                <p className="text-gray-400 break-all">{user?.email}</p>
                                            </div>
                                        </div>

                                        {profileUpdateMessage && (
                                            <div className="mb-6 p-3 bg-green-900/30 text-green-400 text-sm rounded">
                                                {profileUpdateMessage}
                                            </div>
                                        )}

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                                                <input
                                                    type="text"
                                                    className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white"
                                                    placeholder="Your full name"
                                                    value={userFullName}
                                                    onChange={(e) => setUserFullName(e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                                                <input
                                                    type="email"
                                                    className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white"
                                                    defaultValue={user?.email || ''}
                                                    disabled
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white"
                                                    placeholder="Your phone number"
                                                    value={userPhoneNumber}
                                                    onChange={(e) => setUserPhoneNumber(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-6 flex justify-end">
                                            <Button
                                                onClick={handleSaveProfile}
                                                disabled={isSaving}
                                                className="bg-purple-600 hover:bg-purple-700"
                                            >
                                                {isSaving ? 'Saving...' : 'Save Changes'}
                                            </Button>
                                        </div>
                                    </div>

                                    <h3 className="text-white font-medium mb-3">Change Password</h3>
                                    <div className="bg-gray-700/50 rounded-lg p-6 mb-8">
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-gray-400 text-sm mb-2">Current Password</label>
                                                <input
                                                    type="password"
                                                    className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white"
                                                    placeholder="••••••••"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 text-sm mb-2">New Password</label>
                                                <input
                                                    type="password"
                                                    className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white"
                                                    placeholder="••••••••"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 text-sm mb-2">Confirm New Password</label>
                                                <input
                                                    type="password"
                                                    className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white"
                                                    placeholder="••••••••"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-6 flex justify-end">
                                            <Button className="bg-purple-600 hover:bg-purple-700">
                                                Update Password
                                            </Button>
                                        </div>
                                    </div>

                                    <h3 className="text-white font-medium mb-3">Notification Preferences</h3>
                                    <div className="bg-gray-700/50 rounded-lg p-6 mb-8">
                                        <div className="space-y-6">
                                            <div className="flex flex-col md:flex-row justify-between">
                                                <div className="flex md:items-center mb-3 md:mb-0">
                                                    <Bell className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0" />
                                                    <div>
                                                        <p className="text-white font-medium">Billing Notifications</p>
                                                        <p className="text-sm text-gray-400">Receive emails about your invoices and payments</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center md:ml-8 pl-8 md:pl-0">
                                                    <input
                                                        id="billing-notifications"
                                                        type="checkbox"
                                                        className="h-5 w-5 rounded"
                                                        defaultChecked
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:flex-row justify-between">
                                                <div className="flex md:items-center mb-3 md:mb-0">
                                                    <Bell className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0" />
                                                    <div>
                                                        <p className="text-white font-medium">Service Updates</p>
                                                        <p className="text-sm text-gray-400">Receive emails about your services status and updates</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center md:ml-8 pl-8 md:pl-0">
                                                    <input
                                                        id="service-updates"
                                                        type="checkbox"
                                                        className="h-5 w-5 rounded"
                                                        defaultChecked
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:flex-row justify-between">
                                                <div className="flex md:items-center mb-3 md:mb-0">
                                                    <Bell className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0" />
                                                    <div>
                                                        <p className="text-white font-medium">Marketing Emails</p>
                                                        <p className="text-sm text-gray-400">Receive emails about new features and special offers</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center md:ml-8 pl-8 md:pl-0">
                                                    <input
                                                        id="marketing-emails"
                                                        type="checkbox"
                                                        className="h-5 w-5 rounded"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex justify-end">
                                            <Button className="bg-purple-600 hover:bg-purple-700">
                                                Save Preferences
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="bg-gray-700/50 rounded-lg p-6">
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                            <div className="mb-4 md:mb-0">
                                                <h3 className="text-white font-medium">Sign Out</h3>
                                                <p className="text-sm text-gray-400">Sign out from your account on this device</p>
                                            </div>
                                            <Button
                                                variant="destructive"
                                                onClick={handleLogout}
                                                className="bg-red-600 hover:bg-red-700 text-white"
                                            >
                                                <LogOut className="h-4 w-4 mr-2" />
                                                Sign Out
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientArea; 