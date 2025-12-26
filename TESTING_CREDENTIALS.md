# Dhanvantariji.com - Testing Credentials

**Version:** 1.0  
**Last Updated:** December 26, 2025  
**Environment:** Development & Testing

---

## Overview

This document provides comprehensive testing credentials for all user roles within the Dhanvantariji.com platform. These credentials are for development and testing purposes only and should **never** be used in production environments.

---

## Role-Based Test Accounts

### 1. Patient Account

**Purpose:** Test patient-facing features including Q&A submission, doctor discovery, appointment booking, and wellness feed interactions.

- **Email:** `patient@test.com`
- **Password:** `patient123`
- **Access Level:** Patient Portal
- **Dashboard:** `/dashboard/patient`

**Features to Test:**
- Browse and search doctors
- Submit health questions
- Book appointments (clinic & video)
- Interact with wellness feed (like, comment, share, follow)
- View saved articles and followed doctors
- Manage profile and health interests

---

### 2. Doctor Account

**Purpose:** Test practitioner-facing features including profile management, availability settings, content creation, and patient interactions.

- **Email:** `doctor@test.com`
- **Password:** `doctor123`
- **Access Level:** Doctor Portal
- **Dashboard:** `/dashboard/doctor`

**Features to Test:**
- Manage professional profile and credentials
- Set availability and consultation hours
- Respond to patient questions
- Create and publish blog articles
- View appointment bookings
- Access patient chat/messaging
- Monitor profile analytics (views, followers, engagement)

---

### 3. Admin Account

**Purpose:** Test platform moderation, doctor verification, content review, and support ticket management.

- **Email:** `admin@test.com`
- **Password:** `admin123`
- **Access Level:** Admin Portal
- **Dashboard:** `/admin/dashboard`

**Features to Test:**
- Review and verify doctor credentials
- Moderate flagged content (questions, answers, comments)
- Manage support tickets
- View platform analytics and reports
- Approve or reject doctor applications
- Monitor community health metrics

---

### 4. Super Admin Account

**Purpose:** Test system-level controls, resource monitoring, global access management, and technical infrastructure oversight.

- **Email:** `superadmin@test.com`
- **Password:** `superadmin123`
- **Access Level:** Super Admin Portal (Full System Authority)
- **Dashboard:** `/super-admin/dashboard`

**Features to Test:**
- Monitor real-time system telemetry
- Manage resource allocation (database, API, storage)
- Grant/revoke admin privileges
- Access system audit logs
- View global traffic and engagement metrics
- Configure platform-wide settings
- Emergency system controls

---

## Security Notes

### Important Considerations:

1. **Development Only:** These credentials are for testing in development environments. They must be replaced with secure authentication in production.

2. **Role-Based Access Control (RBAC):** Each role has specific permissions and access restrictions. The system should validate roles on both frontend and backend.

3. **Session Management:** Implement proper session timeouts and token-based authentication in production.

4. **Password Security:** In production, all passwords must be hashed using bcrypt or similar algorithms with proper salt rounds.

5. **Admin Access:** Admin and Super Admin portals should have additional security layers including:
   - Two-factor authentication (2FA)
   - IP whitelisting for sensitive operations
   - Audit logging of all admin actions
   - Rate limiting on login attempts

---

## Testing Workflow

### 1. Patient Journey
1. Login as Patient → Browse doctors → Ask question → Book appointment → Interact with feed

### 2. Doctor Journey
1. Login as Doctor → Set availability → Answer questions → Publish blog → Check analytics

### 3. Admin Journey
1. Login as Admin → Verify doctor credentials → Moderate content → Handle support tickets

### 4. Super Admin Journey
1. Login as Super Admin → Monitor system health → Manage admins → Review audit logs

---

## Quick Access Links

- **Unified Login:** `/auth/login`
- **Unified Signup:** `/auth/signup`
- **Patient Dashboard:** `/dashboard/patient`
- **Doctor Dashboard:** `/dashboard/doctor`
- **Admin Dashboard:** `/admin/dashboard`
- **Super Admin Dashboard:** `/super-admin/dashboard`

---

## Implementation Notes

### Current Authentication Status:

**Frontend Implementation:** Complete with role-based UI tabs and credential display toggle.

**Backend Implementation:** Not yet integrated. Current system uses mock authentication for demonstration purposes.

### Next Steps for Production:

1. Integrate database-backed authentication (Supabase Auth or custom solution)
2. Implement proper password hashing and secure session management
3. Add role-based middleware to protect admin and super admin routes
4. Enable 2FA for privileged accounts
5. Set up audit logging for all sensitive operations
6. Configure environment-based access controls

---

## Contact & Support

For issues or questions regarding these test accounts, contact the development team or refer to the platform documentation.

**Last Verified:** December 26, 2025
\`\`\`
