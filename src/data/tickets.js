// Initial set of mock tickets used by the application. Each ticket
// includes basic information such as id, title, description, customer
// name, priority level, status, and a creation date. This data is
// intended to simulate what might be returned from a backend service.

const tickets = [
  {
    id: '1001',
    title: "Login Issues - Can't Access Account",
    description:
      "Customer is unable to log in to their account. They've tried resetting their password multiple times but still cannot access.",
    customer: 'John Smith',
    priority: 'HIGH',
    status: 'OPEN',
    createdAt: '2024-01-15',
  },
  {
    id: '1002',
    title: 'Payment Failed - Card Declined',
    description:
      'Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.',
    customer: 'Sarah Johnson',
    priority: 'HIGH',
    status: 'OPEN',
    createdAt: '2024-01-16',
  },
  {
    id: '1003',
    title: 'Unable to Download Invoice',
    description:
      'Customer cannot download their January invoice from the billing section. The download button is unresponsive.',
    customer: 'Michael Brown',
    priority: 'MEDIUM',
    status: 'IN_PROGRESS',
    createdAt: '2024-01-17',
  },
  {
    id: '1004',
    title: 'Incorrect Billing Address',
    description:
      "Customer’s billing address shows a different city. They updated it but it still displays the old one.",
    customer: 'Emily Davis',
    priority: 'LOW',
    status: 'OPEN',
    createdAt: '2024-01-18',
  },
  {
    id: '1005',
    title: 'App Crash on Launch',
    description:
      'Customer reports that the mobile app crashes immediately upon opening on Android 13.',
    customer: 'David Wilson',
    priority: 'HIGH',
    status: 'OPEN',
    createdAt: '2024-01-19',
  },
  {
    id: '1006',
    title: 'Refund Not Processed',
    description:
      'Customer requested a refund two weeks ago but has not received the amount yet.',
    customer: 'Sophia Taylor',
    priority: 'MEDIUM',
    status: 'IN_PROGRESS',
    createdAt: '2024-01-20',
  },
  {
    id: '1007',
    title: 'Two-Factor Authentication Issue',
    description:
      'Customer is not receiving 2FA codes on their registered phone number.',
    customer: 'James Anderson',
    priority: 'HIGH',
    status: 'OPEN',
    createdAt: '2024-01-21',
  },
  {
    id: '1008',
    title: 'Unable to Update Profile Picture',
    description:
      "Customer tries to upload a new profile picture but gets 'Upload failed' error.",
    customer: 'Olivia Martinez',
    priority: 'LOW',
    status: 'OPEN',
    createdAt: '2024-01-22',
  },
  {
    id: '1009',
    title: 'Subscription Auto-Renewal',
    description:
      'Customer wants to enable auto-renewal for their subscription but the toggle is disabled.',
    customer: 'Liam Thomas',
    priority: 'MEDIUM',
    status: 'IN_PROGRESS',
    createdAt: '2024-01-23',
  },
  {
    id: '1010',
    title: 'Missing Order Confirmation Email',
    description:
      "Customer placed an order but didn't receive a confirmation email even though payment succeeded.",
    customer: 'Isabella Garcia',
    priority: 'MEDIUM',
    status: 'OPEN',
    createdAt: '2024-01-24',
  },
];

export default tickets;