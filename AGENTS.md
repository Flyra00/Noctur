# AGENTS.md

# URBAN DISCOVERY PLATFORM

## Master Instructions for AI Coding Agents

> **Document status:** Authoritative project instruction
> **Applies to:** Entire repository
> **Primary audience:** AI coding agents, autonomous agents, developers, reviewers
> **Language:** English for technical instructions; Indonesian may be used for product-facing content
> **Priority:** This document overrides assumptions made by an AI agent. When repository reality conflicts with an assumption in this document, the agent MUST inspect the repository and report the conflict before making destructive changes.

---

# 0. CRITICAL AGENT RULES

These rules are mandatory.

## 0.1 Never hallucinate

The agent MUST NOT:

- invent APIs
- invent API keys
- invent database tables that are not required
- invent existing files
- invent existing functionality
- invent business rules
- invent external services
- claim an integration works without verifying it
- claim a package is installed without checking `package.json`
- claim a route exists without inspecting the repository
- claim an API endpoint exists without inspecting implementation
- claim a database field exists without inspecting the schema
- fabricate test results
- fabricate production data
- fabricate event availability
- fabricate payment status
- fabricate reviews
- fabricate map coordinates
- fabricate provider capabilities

If information is unknown:

> **Inspect first. If still unknown, explicitly mark it as unknown/TBD.**

Never replace uncertainty with a guess.

---

# 0.2 Never silently change architecture

Before introducing:

- a new framework
- a new database
- a new ORM
- a new authentication system
- a new map provider
- a new payment provider
- a new image provider
- a new search engine
- a new AI provider
- a new queue
- a new cache
- a new major dependency

the agent MUST:

1. inspect the existing implementation
2. determine whether an equivalent already exists
3. explain why the new technology is required
4. identify migration impact
5. update documentation if the architectural decision is accepted

Do not silently introduce technology.

---

# 0.3 Never rewrite working code unnecessarily

Existing code must be treated as valuable until proven otherwise.

Before refactoring:

- understand it
- identify its problems
- identify dependencies
- identify affected routes
- identify affected data
- identify tests

Prefer incremental migration over wholesale replacement.

---

# 0.4 Never bypass authorization

Frontend authorization is NOT security.

The following are insufficient:

```ts
if (user.role === "ADMIN") {
  // show button
}
```

The server MUST independently verify authorization.

Every protected operation must evaluate:

```text
identity
→ role
→ permission
→ resource
→ ownership/scope
→ authorization decision
```

---

# 0.5 Never trust the client

Never trust client-provided:

- user ID
- role
- permission
- ownership
- price
- payment status
- ticket status
- moderation status
- verification status
- coordinates
- check-in validity
- event capacity
- privileged action

The server/database is authoritative.

---

# 0.6 Never invent production integrations

If an external service has not been configured:

```text
DO NOT fake it.
DO NOT create fake successful responses.
DO NOT claim it is connected.
```

Instead:

```text
provider status = NOT_CONFIGURED
```

or use an explicit development mock that is clearly marked as a mock.

---

# 0.7 Follow the phase system

Do not randomly implement features.

The project uses sequential development phases.

Each phase has:

```text
DISCOVER
→ DESIGN
→ IMPLEMENT
→ TEST
→ REVIEW
→ GATE
```

A phase is not complete because code compiles.

A phase is complete only when its acceptance criteria are satisfied.

---

# 1. PRODUCT DEFINITION

This repository builds one unified Indonesian urban discovery platform.

The product helps users discover:

- places
- food
- cafes
- restaurants
- hangout spots
- nightlife
- events
- festivals
- markets
- communities
- journeys
- hidden/local experiences

The core user question is:

> **“Malam ini enaknya ke mana?”**

and more generally:

> **“Hari ini enaknya ngapain dan ke mana?”**

---

# 2. PRODUCT INSPIRATION

The product concept combines patterns from:

1. Cafe/hangout discovery
2. Culinary tourism
3. Music festival/event discovery
4. Nightlife discovery
5. Culinary exploration/journeys

These inspirations MUST NOT become five separate applications.

They are capabilities of one platform.

---

# 3. CORE PRODUCT MODEL

The platform is a connected discovery graph.

Conceptually:

```text
USER
 │
 ▼
DISCOVERY
 │
 ├── PLACE
 │    ├── BUSINESS
 │    ├── REVIEWS
 │    ├── PHOTOS
 │    ├── EVENTS
 │    ├── SAVES
 │    └── CHECK-INS
 │
 ├── EVENT
 │    ├── ORGANIZER
 │    ├── VENUE
 │    ├── RSVP
 │    ├── TICKET
 │    └── CHECK-IN
 │
 ├── COMMUNITY
 │    ├── MEMBERS
 │    ├── POSTS
 │    ├── EVENTS
 │    └── DISCUSSIONS
 │
 └── JOURNEY
      ├── PLACES
      ├── EVENTS
      ├── FOOD
      └── ACTIVITIES
```

Features should strengthen relationships between these entities.

Do not build isolated feature silos.

---

# 4. TARGET EXPERIENCE

The consumer experience should allow:

```text
Open application
→ see relevant things to do
→ search/filter
→ inspect place/event/community
→ view map
→ save/share
→ RSVP or buy ticket
→ visit
→ check in
→ review/upload photo
→ discover next activity
```

The system should create a continuous discovery loop.

---

# 5. TARGET MARKET / CONTENT

The platform is optimized for Indonesian urban environments.

Development data may include:

- Jakarta
- Bekasi
- Depok
- Tangerang
- Bandung
- Surabaya
- Yogyakarta
- Bali
- other Indonesian cities

Use:

- Indonesian Rupiah
- Indonesian addresses
- Indonesian food
- Indonesian event examples
- realistic local terminology

Never present fictional seed data as real businesses.

---

# 6. TECHNICAL STACK

Unless an existing repository constraint requires otherwise:

## Required / primary

```text
Next.js
React
TypeScript
PostgreSQL
PostGIS
Prisma
Auth.js
Leaflet
OpenStreetMap ecosystem
```

## Supporting technologies

```text
Zod
Tailwind CSS or existing project styling system
```

Do not add alternatives without justification.

---

# 7. TECHNOLOGY DECISION RULE

When this document says a provider is:

```text
PRIMARY
```

the agent should use that provider unless the repository has a documented reason not to.

When a provider is:

```text
CONFIGURABLE
```

the agent MUST build an abstraction that allows replacement.

When a provider is:

```text
OPTIONAL
```

the agent MUST NOT add it unless the corresponding feature is actually implemented.

When something is:

```text
TBD
```

the agent MUST NOT guess.

---

# 8. EXTERNAL API / PROVIDER CONTRACT

The project MUST maintain a clear separation between domain logic and external providers.

Architecture:

```text
UI
 ↓
Application Layer
 ↓
Domain Service
 ↓
Provider Adapter
 ↓
External API
```

Never:

```text
React Component
 ↓
External API
```

unless explicitly justified for a public client-safe API.

---

# 9. MAPS

## 9.1 Mapping library

Primary:

```text
Leaflet
```

React integration:

```text
react-leaflet
```

Only use if compatible with the repository.

---

# 9.2 Map data

Default map data ecosystem:

```text
OpenStreetMap
```

---

# 9.3 Map tiles

Map tile provider MUST be configurable.

Do not hardcode a production tile provider throughout components.

Conceptual environment configuration:

```env
NEXT_PUBLIC_MAP_TILE_URL=
NEXT_PUBLIC_MAP_ATTRIBUTION=
```

If the chosen provider requires credentials, those credentials must be handled according to that provider's rules.

Never expose private secrets through:

```env
NEXT_PUBLIC_*
```

---

# 9.4 Map provider architecture

Create an abstraction conceptually equivalent to:

```text
MapConfiguration
MapTileProvider
```

The application should not need to be rewritten if the tile provider changes.

---

# 10. GEOCODING

Geocoding converts:

```text
address → coordinates
coordinates → address
```

Initial candidate:

```text
Nominatim / OpenStreetMap ecosystem
```

IMPORTANT:

The exact production geocoding provider is configurable.

The agent MUST verify:

- current provider configuration
- API availability
- rate limits
- usage policy
- production suitability

Do not assume public Nominatim is appropriate for unlimited production traffic.

---

# 10.1 Geocoding rules

Geocoding must:

- be rate limited
- be cached
- avoid duplicate requests
- store resolved coordinates where appropriate
- handle ambiguous addresses
- allow authorized correction
- avoid running repeatedly during page rendering

Never geocode every map render.

---

# 11. ROUTING

Routing is separate from map rendering.

Initial candidate:

```text
OSRM
```

Provider MUST be replaceable.

Required capabilities:

```text
origin
destination
distance
duration
route geometry
```

Do not assume OSRM hosting or public endpoint availability for production without verification.

---

# 12. SPATIAL DATABASE

Primary:

```text
PostgreSQL + PostGIS
```

Use PostGIS for:

- nearby search
- radius search
- geographic filtering
- distance sorting
- bounding-box queries
- map viewport queries

Do not load the entire place dataset into JavaScript and calculate distance manually.

---

# 13. LOCATION DATA

Place/event location should conceptually support:

```text
latitude
longitude
address
city
region
neighborhood
geographic point
```

Where appropriate, store a PostGIS geographic field.

Example conceptual structure:

```text
Place
 ├── address
 ├── city
 ├── region
 ├── latitude
 ├── longitude
 └── location
```

Database schema must be inspected before implementation.

Do not blindly duplicate location fields if the repository already has a suitable model.

---

# 14. IMAGE / MEDIA

Primary provider:

```text
Cloudinary
```

Use for:

- place photos
- business photos
- event posters
- community covers
- avatars
- review photos
- journey covers

---

# 14.1 Media rules

Never store large image binaries in PostgreSQL.

Store:

- provider ID
- public ID
- dimensions
- MIME type
- moderation state
- relevant metadata

Validate:

- MIME type
- file size
- dimensions
- upload authorization

Optimize:

- responsive sizes
- compression
- modern formats where appropriate

---

# 15. AUTHENTICATION

Primary authentication architecture:

```text
Auth.js
```

Potential methods:

- email/password
- OAuth
- email verification
- password reset
- sessions

Actual providers are determined by project requirements.

Do not invent OAuth providers.

Authentication ≠ authorization.

---

# 16. AUTHORIZATION

Authorization is server-side.

Use permission-oriented checks.

Conceptual API:

```ts
can(user, "event.update", event);
can(user, "business.update", business);
can(user, "review.moderate", review);
can(user, "user.suspend", targetUser);
```

Avoid scattered role logic.

---

# 17. PLATFORM ROLES

The platform has five principal roles:

```text
USER
ORGANIZER
BUSINESS_OWNER
MODERATOR
ADMIN
```

Roles are additive unless explicitly restricted.

---

# 18. USER ROLE

USER is the standard consumer role.

Capabilities:

### Discovery

- view places
- search places
- filter places
- view map
- discover events
- discover communities
- discover journeys

### Social

- save
- share
- follow where supported
- join communities
- comment
- post where permitted

### Place interaction

- review
- upload photos
- check in
- create collections

### Event interaction

- view event
- RSVP
- purchase ticket
- view ticket
- check in

### Profile

- manage profile
- manage preferences
- view own activity

USER cannot:

- approve events
- moderate content
- modify another user's content
- manage arbitrary businesses
- manage arbitrary events
- change platform settings
- assign roles

---

# 19. ORGANIZER ROLE

ORGANIZER includes normal user capabilities plus event management.

Capabilities:

- create events
- save drafts
- edit owned events
- submit events
- manage event media
- configure schedules
- configure capacity
- configure RSVP
- configure ticket types
- view attendees
- manage check-in
- view event analytics
- cancel owned events
- reschedule owned events
- communicate with attendees through approved mechanisms

ORGANIZER cannot automatically:

- manage other organizers' events
- manage businesses
- moderate the platform
- assign roles
- change global settings

Ownership must always be checked.

---

# 20. BUSINESS_OWNER ROLE

BUSINESS_OWNER includes user capabilities plus:

- claim business
- submit verification
- manage owned business
- edit business information
- manage business photos
- manage facilities
- manage menus where applicable
- view business analytics
- respond to reviews where supported
- manage events hosted at owned/authorized venue

IMPORTANT:

```text
BUSINESS_OWNER ≠ ORGANIZER
```

Business ownership does not automatically grant organizer privileges.

A user may have both:

```text
BUSINESS_OWNER
+
ORGANIZER
```

---

# 21. MODERATOR ROLE

MODERATOR handles moderation.

Capabilities:

- view reports
- review reported content
- moderate reviews
- moderate photos
- moderate posts
- moderate comments
- moderate events where applicable
- hide content
- remove content where policy permits
- warn users
- restrict users where authorized
- review submissions
- resolve reports
- add moderation notes

Every moderation action must be auditable.

MODERATOR cannot:

- grant ADMIN
- modify platform architecture
- alter payment records
- bypass ownership rules
- delete audit history
- change global configuration unless separately authorized

---

# 22. ADMIN ROLE

ADMIN manages the platform.

Capabilities:

- users
- roles
- permissions
- businesses
- business verification
- events
- communities
- content
- categories
- tags
- analytics
- platform settings
- audit logs

Sensitive actions require:

```text
authorization
+
validation
+
confirmation where appropriate
+
audit log
```

---

# 23. MULTI-ROLE USERS

Do not force users into one role.

Example:

```text
User A:
USER
ORGANIZER

User B:
USER
BUSINESS_OWNER

User C:
USER
ORGANIZER
BUSINESS_OWNER
```

Community roles are separate.

---

# 24. COMMUNITY-SCOPED ROLES

A community may have:

```text
OWNER
ADMIN
MODERATOR
MEMBER
```

These roles only apply inside the community.

Example:

```text
Platform role:
USER

Community role:
OWNER
```

This does NOT make the user a platform ADMIN or MODERATOR.

---

# 25. PERMISSION MODEL

Permission names should follow resource/action semantics.

Examples:

```text
place.read
place.create
place.update
place.delete

business.read
business.claim
business.update
business.verify

event.read
event.create
event.update
event.submit
event.approve
event.cancel

community.read
community.create
community.update
community.moderate

review.create
review.update
review.delete
review.moderate

report.create
report.read
report.resolve

user.read
user.update
user.suspend
user.assignRole

analytics.read

settings.read
settings.update
```

Do not implement every permission merely because it appears here.

The actual permission matrix must match the implemented domain.

---

# 26. RESOURCE OWNERSHIP

Ownership is separate from role.

Example:

```text
ORGANIZER
+
event.update
+
owns event
=
ALLOW
```

But:

```text
ORGANIZER
+
event.update
+
does not own event
=
DENY
```

Business:

```text
BUSINESS_OWNER
+
business.update
+
owns verified business
=
ALLOW
```

---

# 27. RBAC IMPLEMENTATION

Use:

```text
Role
→ Permission
→ Resource authorization
```

Avoid:

```text
role === "ADMIN"
```

throughout the codebase.

Centralize authorization logic.

Recommended conceptual structure:

```text
server/
└── authorization/
    ├── permissions
    ├── policies
    ├── role-mapping
    └── resource-checks
```

Adapt to repository structure.

---

# 28. DATABASE

Primary:

```text
PostgreSQL
```

ORM:

```text
Prisma
```

Spatial:

```text
PostGIS
```

---

# 29. DATABASE RULES

Use:

- foreign keys
- indexes
- unique constraints
- check constraints where appropriate
- transactions
- timestamps
- soft deletion where appropriate

Do not use JSON as a substitute for proper relational modeling.

JSON is appropriate only when the data is genuinely flexible/unstructured.

---

# 30. CORE DOMAIN ENTITIES

The architecture should accommodate:

```text
User
Role
Permission

Place
Business
BusinessClaim
BusinessVerification

Category
Tag
Media

Event
EventSchedule
RSVP
TicketType
Order
Ticket
CheckIn

Community
CommunityMember
CommunityPost
Comment

Review
ReviewPhoto
Report
ModerationAction

Journey
JourneyItem
Collection
SavedItem
Follow

Notification
AuditLog
```

Actual schema must be based on repository inspection and requirements.

Do not create unused tables.

---

# 31. PLACE VS BUSINESS

These concepts are different.

## Place

A physical discoverable location.

Examples:

- cafe
- restaurant
- market
- park
- venue
- nightlife venue
- hidden spot

## Business

The entity operating a place.

A business may operate:

```text
1 place
or
multiple branches
```

Do not merge them into one model unless repository analysis proves that the distinction is unnecessary.

---

# 32. EVENT

Event should support:

- title
- description
- category
- tags
- organizer
- venue/place
- location
- schedule
- status
- capacity
- RSVP
- ticketing
- media
- pricing
- cancellation
- rescheduling
- check-in

---

# 33. EVENT STATUS

Preferred lifecycle:

```text
DRAFT
↓
SUBMITTED
↓
PENDING_REVIEW
↓
PUBLISHED
↓
ONGOING
↓
COMPLETED
```

Alternative states:

```text
REJECTED
CANCELLED
RESCHEDULED
```

Do not allow arbitrary status changes.

Status transitions should be implemented as explicit domain rules.

---

# 34. EVENT APPROVAL

Organizer:

```text
DRAFT
→ SUBMITTED
```

Platform:

```text
SUBMITTED
→ PENDING_REVIEW
→ PUBLISHED
```

or:

```text
PENDING_REVIEW
→ REJECTED
```

The organizer must not be able to self-approve an event unless an explicit business rule allows it.

---

# 35. BUSINESS CLAIM

Business claim lifecycle:

```text
UNCLAIMED
↓
CLAIM_SUBMITTED
↓
UNDER_REVIEW
↓
VERIFIED
```

Alternative:

```text
CLAIM_SUBMITTED
↓
REJECTED
```

Verification must be auditable.

Never grant ownership solely because a user submits a business name.

---

# 36. REVIEWS

Reviews should support:

- rating
- text
- photos
- author
- place
- timestamp
- moderation status
- reports

Potential anti-abuse mechanisms:

- rate limits
- duplicate detection
- ownership checks
- reporting
- moderation

Business owners must not be able to silently delete legitimate customer reviews.

---

# 37. COMMUNITIES

Community supports:

- identity
- description
- category
- cover
- location
- owner
- membership
- posts
- comments
- events
- rules
- moderation

Community permissions must be scoped.

---

# 38. JOURNEYS

A Journey combines discovery items.

Example:

```text
Saturday Night in South Jakarta

1. Dinner
2. Coffee
3. Live Music
4. Night Market
```

Journey items may include:

- places
- events
- restaurants
- cafes
- markets
- community activities

Journey types may include:

```text
EDITORIAL
USER_CREATED
COMMUNITY_CREATED
ORGANIZER_CREATED
```

only if product requirements justify them.

---

# 39. SAVES / COLLECTIONS

Users may save:

- places
- events
- communities
- journeys

Collections may group saved content.

Example:

```text
Date Night
Weekend
Coffee Shops
Want to Visit
```

Do not create duplicate save systems for every entity.

Prefer a coherent model where appropriate.

---

# 40. CHECK-IN

Check-in can occur at:

- places
- events

Potential verification methods:

```text
location
QR
ticket
```

The exact method must be defined per use case.

Never trust client coordinates alone for high-value check-in validation.

Apply:

- rate limits
- duplicate prevention
- fraud checks
- timestamp validation

---

# 41. SEARCH

Initial search engine:

```text
PostgreSQL
```

Use:

- full-text search
- trigram search
- indexes
- PostGIS

Search entities:

```text
places
businesses
events
communities
journeys
```

---

# 42. OPTIONAL SEARCH ENGINE

Only introduce:

```text
Meilisearch
or
Typesense
```

when PostgreSQL search becomes insufficient.

Do not install a search engine just because it is popular.

The decision must be based on:

- dataset size
- latency
- typo tolerance
- ranking requirements
- filtering complexity
- operational cost

---

# 43. SEARCH FILTERS

Places:

```text
category
cuisine
price
rating
distance
facilities
open-now where data exists
```

Events:

```text
date
category
price
distance
organizer
availability
status
```

Communities:

```text
interest
city
activity
```

Journeys:

```text
city
theme
duration
category
```

---

# 44. MAP EXPERIENCE

Map should support:

- markers
- marker clustering
- selected marker
- list/map synchronization
- category filtering
- viewport search
- nearby search
- responsive behavior

Avoid:

```text
render 10,000 markers
```

Use:

```text
viewport query
+
clustering
+
pagination/limited results
```

---

# 45. ROUTING VS MAPS

These are different responsibilities.

```text
Leaflet
=
map rendering
```

```text
OpenStreetMap
=
map data ecosystem
```

```text
Geocoding provider
=
address ↔ coordinate
```

```text
Routing provider
=
route/distance/duration
```

Do not mix these responsibilities into one service.

---

# 46. PAYMENT

Payment is required only if paid ticketing is enabled.

Primary Indonesian provider:

```text
Midtrans
```

Use for:

- checkout
- transaction creation
- payment status
- payment webhook

---

# 47. PAYMENT SECURITY

Never trust:

```text
client payment status
```

Server must verify.

Payment flow:

```text
User
↓
Checkout
↓
Application Server
↓
Midtrans
↓
Payment
↓
Webhook
↓
Server verification
↓
Order
↓
Ticket
```

Webhook processing must be:

- authenticated
- validated
- idempotent
- logged appropriately

Never store raw card information.

---

# 48. PAYMENT STATES

Conceptually:

```text
PENDING
PAID
FAILED
EXPIRED
REFUNDED
```

Ticket state and payment state must not be incorrectly conflated.

---

# 49. EMAIL

Preferred:

```text
Resend
```

Potential uses:

- verification
- password reset
- RSVP confirmation
- ticket confirmation
- event notifications
- organizer notifications
- verification results
- moderation notices

Email logic belongs in a service layer.

---

# 50. NOTIFICATIONS

Notification architecture should be channel-independent.

Channels may include:

```text
IN_APP
EMAIL
WEB_PUSH
```

Potential triggers:

- RSVP
- ticket purchase
- event reminder
- event cancellation
- community invitation
- review interaction
- moderation action
- business verification

---

# 51. ANALYTICS

Preferred:

```text
PostHog
```

Track meaningful product events.

Examples:

```text
place_viewed
event_viewed
search_performed
place_saved
event_saved
event_rsvp
ticket_checkout_started
ticket_purchased
check_in_completed
review_created
community_joined
journey_viewed
```

Do not create arbitrary analytics names throughout components.

Centralize event definitions.

Do not send unnecessary personal data to analytics.

---

# 52. RATE LIMITING

Preferred infrastructure when required:

```text
Upstash Redis
```

Use for:

- login
- registration
- public APIs
- reviews
- reports
- search abuse
- check-ins
- sensitive actions

Redis is not the primary database.

---

# 53. AI

AI is an optional service.

AI may assist with:

- event extraction
- poster parsing
- caption parsing
- category suggestion
- tag suggestion
- duplicate detection
- moderation assistance
- journey draft generation
- recommendation assistance

AI must not become an uncontrolled source of truth.

---

# 54. AI EVENT IMPORT

Preferred flow:

```text
Poster / Caption
↓
AI extraction
↓
Structured draft
↓
Human review
↓
Event submission
↓
Approval
↓
Publication
```

Never automatically publish extracted events unless explicitly approved by product policy.

AI extraction output must be treated as untrusted input.

Validate it with schemas.

---

# 55. AI PROVIDER ABSTRACTION

Do not couple business logic directly to a specific AI SDK.

Conceptual interface:

```text
AIProvider
 ├── extractEvent()
 ├── suggestTags()
 ├── classifyContent()
 └── generateJourneyDraft()
```

Provider is replaceable.

Exact provider is:

```text
TBD / configurable
```

unless the repository explicitly configures one.

Never invent credentials.

---

# 56. BACKGROUND JOBS

Background processing may be used for:

- email
- notifications
- image processing
- AI extraction
- analytics aggregation
- batch geocoding
- moderation processing

Do not block a user request for non-essential work.

---

# 57. CACHE

Potential cache targets:

- categories
- tags
- public place data
- editorial journeys
- stable geocoding results

Do not cache private authorization-sensitive data without an explicit invalidation strategy.

---

# 58. ADMIN DASHBOARD

The admin dashboard is part of the same brand ecosystem.

It must feel:

- operational
- local
- contemporary
- editorial
- practical
- information-dense
- human

It must NOT look like generic AI-generated SaaS.

Avoid:

- purple/blue gradient dashboards
- excessive glassmorphism
- neon UI
- huge KPI cards
- decorative charts
- giant typography
- random blobs
- unnecessary illustrations
- excessive rounded cards
- excessive shadows
- chatbot centerpiece
- generic “Good morning Admin” dashboards

---

# 59. ADMIN NAVIGATION

Recommended:

```text
Overview

Discovery
├── Places
├── Businesses
├── Events
├── Communities
└── Journeys

Moderation
├── Reports
├── Reviews
├── Photos
├── Posts
└── Comments

People
├── Users
├── Organizers
└── Business Owners

Operations
├── Verification
├── Event Approvals
└── Business Claims

Analytics

System
├── Categories
├── Tags
├── Settings
└── Audit Logs
```

---

# 60. ADMIN OVERVIEW

Prioritize:

```text
What needs attention?
```

Useful metrics:

```text
Active Users
Places
Events This Week
Pending Reports
Pending Approvals
```

Do not create meaningless KPI cards.

Operational sections:

- pending event approvals
- business verification
- reported content
- recent activity

---

# 61. ADMIN PLACE MANAGEMENT

Table:

```text
photo
place
category
location
rating
status
owner
updated
actions
```

Support:

- search
- filter
- sorting
- pagination
- bulk actions where safe
- edit
- verify
- suspend
- ownership management

---

# 62. ADMIN PLACE DETAIL

Show:

- photos
- name
- verification
- owner
- category
- location
- contact
- opening hours
- rating
- reviews
- photos
- events
- reports
- history

Actions:

- approve
- edit
- suspend
- reject claim

---

# 63. ADMIN BUSINESS VERIFICATION

Show:

- claimant
- business
- evidence
- status
- reviewer
- timestamps
- history

Actions:

```text
approve
reject
request information
```

Every decision must be audited.

---

# 64. ADMIN EVENTS

Support:

- event list
- search
- filtering
- approval
- rejection
- cancellation
- rescheduling
- organizer
- attendee counts
- ticket status
- event status

---

# 65. ADMIN COMMUNITIES

Support:

- community list
- owner
- members
- reports
- status
- moderation
- event associations

---

# 66. ADMIN USERS

List:

- name
- email
- roles
- status
- registration date

Detail:

- profile
- roles
- authored content
- events
- businesses
- reports
- moderation history

Dangerous operations require confirmation.

---

# 67. MODERATION CENTER

Central queue:

```text
Reports
Reviews
Photos
Posts
Comments
Events
```

Report detail:

```text
Reporter
Target
Reason
Evidence
Previous reports
Moderation history
Current status
```

---

# 68. MODERATION ACTIONS

Possible actions:

```text
WARN
HIDE
REMOVE
RESTRICT
RESTORE
RESOLVE
```

Actual actions must be defined by policy.

Every action:

```text
actor
action
target
timestamp
reason
```

must be auditable where applicable.

---

# 69. AUDIT LOG

Audit sensitive actions:

- role changes
- business verification
- ownership changes
- event approval
- event rejection
- moderation
- user suspension
- platform setting changes
- payment administration

Conceptual structure:

```text
actor
action
resourceType
resourceId
before
after
reason
timestamp
metadata
```

Do not store secrets.

---

# 70. CONSUMER UI

Consumer UI should feel:

- urban
- local
- contemporary
- editorial
- social
- photographic
- useful

It should emphasize:

```text
discovery
trust
context
location
time
action
```

---

# 71. DESIGN SYSTEM

Define shared:

- typography
- spacing
- colors
- buttons
- inputs
- cards
- badges
- chips
- tabs
- navigation
- map markers
- dialogs
- tables
- empty states
- loading states
- error states

Use design tokens.

Do not scatter arbitrary colors and spacing values throughout the codebase.

---

# 72. VISUAL DIRECTION

Suggested direction:

```text
warm neutral background
charcoal typography
muted gray
one warm brand accent
semantic status colors
```

The exact brand palette must follow the approved design system.

Do not randomly introduce:

- gradients
- neon
- glassmorphism
- excessive shadows
- oversized typography

---

# 73. RESPONSIVE DESIGN

Required:

```text
mobile
tablet
desktop
large desktop
```

Mobile must be intentionally designed.

Important mobile flows:

- discovery
- map
- place
- event
- RSVP
- ticket
- check-in
- moderation
- approval

---

# 74. ACCESSIBILITY

Required:

- semantic HTML
- keyboard navigation
- visible focus
- labels
- contrast
- screen-reader support
- accessible forms
- accessible errors
- reduced-motion consideration

Accessibility is not a final optional step.

---

# 75. SEO

Public content should support:

- metadata
- canonical URLs
- sitemap
- robots
- semantic HTML
- structured data where appropriate

Potential SEO resources:

```text
places
businesses
events
communities
journeys
city pages
category pages
```

Never expose private user information through SEO.

---

# 76. PROJECT STRUCTURE

Preferred conceptual structure:

```text
src/
├── app/
│   ├── (consumer)/
│   ├── (auth)/
│   ├── organizer/
│   ├── business/
│   ├── moderator/
│   ├── admin/
│   └── api/
│
├── components/
│   ├── ui/
│   ├── maps/
│   ├── places/
│   ├── events/
│   ├── communities/
│   ├── journeys/
│   ├── reviews/
│   └── discovery/
│
├── features/
│   ├── auth/
│   ├── places/
│   ├── businesses/
│   ├── events/
│   ├── communities/
│   ├── journeys/
│   ├── reviews/
│   ├── moderation/
│   └── notifications/
│
├── server/
│   ├── auth/
│   ├── authorization/
│   ├── services/
│   ├── repositories/
│   └── integrations/
│
├── lib/
│   ├── db/
│   ├── validation/
│   ├── analytics/
│   └── utilities/
│
└── types/
```

This is a target architecture, not permission to blindly restructure an existing repository.

Inspect first.

---

# 77. PROVIDER ADAPTER STRUCTURE

External services should conceptually live under:

```text
server/integrations/
```

Possible:

```text
maps/
geocoding/
routing/
cloudinary/
midtrans/
resend/
posthog/
redis/
ai/
```

Do not create empty abstractions for services that are not implemented.

---

# 78. ENVIRONMENT VARIABLES

Expected categories:

```env
DATABASE_URL=

AUTH_SECRET=
AUTH_URL=

NEXT_PUBLIC_MAP_TILE_URL=
NEXT_PUBLIC_MAP_ATTRIBUTION=

GEOCODING_PROVIDER=
GEOCODING_API_KEY=

ROUTING_PROVIDER=
ROUTING_API_KEY=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

MIDTRANS_SERVER_KEY=
MIDTRANS_CLIENT_KEY=
MIDTRANS_WEBHOOK_SECRET=

RESEND_API_KEY=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

POSTHOG_KEY=
POSTHOG_HOST=

AI_PROVIDER=
AI_API_KEY=
```

These are examples of configuration categories.

The agent MUST inspect the actual project before adding variables.

Do not create variables merely because they are listed here.

---

# 79. PUBLIC VS SERVER SECRETS

Public:

```text
NEXT_PUBLIC_*
```

must contain only client-safe values.

Server-only secrets:

```text
API keys
database credentials
authentication secrets
payment server keys
Cloudinary secrets
AI keys
Redis tokens
```

must remain server-side.

---

# 80. VALIDATION

Use:

```text
Zod
```

or an already-established equivalent.

Validate:

- forms
- API requests
- query parameters
- route parameters
- uploads
- webhooks
- external API responses

External data is untrusted.

---

# 81. ERROR HANDLING

Distinguish:

```text
400 Validation
401 Unauthenticated
403 Unauthorized
404 Not Found
409 Conflict
429 Rate Limited
502/503 Provider Failure
500 Internal Error
```

Do not expose:

- stack traces
- SQL errors
- secrets
- internal infrastructure
- provider credentials

to users.

---

# 82. TRANSACTIONS

Use database transactions for operations such as:

```text
RSVP + capacity
ticket creation
payment state update
business ownership transfer
role assignment
moderation + audit log
event approval + publication
```

Avoid partial state.

---

# 83. IDEMPOTENCY

Use idempotency where duplicate requests could cause damage.

Especially:

```text
payment webhooks
ticket creation
RSVP
notifications
emails
moderation actions
```

---

# 84. DATABASE MIGRATIONS

Every schema change must use a migration.

Before a destructive migration:

- inspect data
- understand dependencies
- plan migration
- consider rollback
- consider production compatibility

Never casually delete production columns/tables.

---

# 85. PERFORMANCE

Monitor:

- page load
- server response
- database query time
- map rendering
- search
- image loading
- API latency

Avoid:

- N+1 queries
- unnecessary client components
- huge payloads
- unbounded queries
- thousands of map markers
- unoptimized images

Use pagination/cursors where appropriate.

---

# 86. TESTING

## Unit

Test:

- domain rules
- permissions
- validation
- state transitions
- pricing
- recommendation rules

## Integration

Test:

- repositories
- database constraints
- auth
- provider adapters
- payment webhooks
- notification services

## E2E

Critical flows:

```text
User:
register
→ discover
→ view place
→ save
→ review

Organizer:
create event
→ submit
→ approval
→ publish

Customer:
RSVP
→ payment
→ ticket
→ check-in

Business:
claim
→ verification
→ manage business

Moderator:
report
→ review
→ action
```

---

# 87. SECURITY TESTING

Must test:

- IDOR
- privilege escalation
- unauthorized access
- role manipulation
- malicious uploads
- XSS
- injection
- rate-limit bypass
- webhook forgery
- invalid payment state
- session vulnerabilities

---

# 88. DATA PRIVACY

Collect only necessary data.

Especially protect:

- location history
- check-in history
- private profile information
- authentication data

Never expose private location history publicly.

---

# 89. CONTENT MODERATION STATES

Possible states:

```text
VISIBLE
REPORTED
UNDER_REVIEW
HIDDEN
REMOVED
RESTORED
```

Do not permanently destroy moderation evidence unnecessarily.

---

# 90. RECOMMENDATION SYSTEM

Initial recommendation system should be deterministic.

Potential inputs:

```text
location
time
category
saved items
visited places
events
popularity
editorial content
```

Do not introduce ML simply to claim AI recommendations.

Never fabricate:

- popularity
- reviews
- availability
- attendance
- trends

---

# 91. ANALYTICS VS BUSINESS TRUTH

Analytics are observational.

Domain data is authoritative.

For example:

```text
PostHog says:
100 checkout_started
```

does NOT mean:

```text
100 payments succeeded
```

Payment/database records remain authoritative for financial state.

---

# 92. DEVELOPMENT SEED DATA

Development seed data may contain fictional examples.

It MUST be clearly development data.

Do not imply fictional entities are real.

Never seed production with:

- fake reviews
- fake payments
- fake users
- fake attendance
- fake popularity

just to make dashboards look impressive.

---

# 93. API ROUTE RULES

Internal APIs should be domain-oriented.

Examples:

```text
/api/places
/api/businesses
/api/events
/api/communities
/api/journeys
/api/reviews
/api/reports
/api/check-ins
/api/tickets
/api/notifications
```

Do not create APIs merely because a component needs one endpoint.

---

# 94. SERVER ACTIONS / ROUTE HANDLERS

Use the appropriate Next.js mechanism.

Do not turn every operation into a client-side fetch.

Sensitive operations should run server-side.

Examples:

```text
role assignment
event approval
payment processing
business verification
moderation
ticket creation
```

must never rely on client-only logic.

---

# 95. FILE UPLOAD SECURITY

Uploads must verify:

- authenticated user
- authorization
- MIME type
- file size
- file extension
- provider response
- moderation status

Never trust:

```text
filename
Content-Type header alone
client metadata
```

---

# 96. EXTERNAL API FAILURE

External services can fail.

The application must gracefully handle:

```text
timeout
rate limit
invalid response
authentication failure
service unavailable
network error
```

Do not crash the entire application because a recommendation API is unavailable.

Core discovery should degrade gracefully.

---

# 97. PROVIDER FALLBACK

Where appropriate:

```text
primary provider
→ controlled fallback
```

But do not create fake fallback data.

If no provider is available:

```text
show honest unavailable state
```

---

# 98. OBSERVABILITY

Production should provide enough telemetry for:

- application errors
- slow requests
- database failures
- external API failures
- payment webhook failures
- job failures
- authentication problems

Never log:

- passwords
- API secrets
- access tokens
- payment secrets

---

# 99. LOGGING

Logs should be:

- structured
- useful
- privacy-conscious
- searchable

Sensitive values must be redacted.

---

# 100. PHASE SYSTEM

The project MUST be developed in the following phases.

---

# PHASE 0 — REPOSITORY DISCOVERY

## Objective

Understand what already exists.

## Inspect

- filesystem
- package.json
- lockfile
- Next.js version
- TypeScript configuration
- styling
- database
- Prisma
- routes
- components
- authentication
- API
- environment configuration
- tests

## Deliverables

```text
repository map
architecture map
dependency map
database assessment
risk list
technical debt list
reuse/refactor list
```

## Restrictions

Do not perform major refactoring.

## Gate

Agent can explain the existing architecture without guessing.

---

# PHASE 1 — PRODUCT DEFINITION

Define:

- target users
- MVP
- non-MVP
- domain boundaries
- primary flows
- role model
- feature relationships

## Gate

Product does not contain contradictory requirements.

---

# PHASE 2 — UX / INFORMATION ARCHITECTURE

Define:

```text
Home
Discover
Map
Places
Events
Communities
Journeys
Saved
Profile

Organizer
Business Owner
Moderator
Admin
```

Create primary user flows.

## Gate

Each role has a clear experience.

---

# PHASE 3 — DESIGN SYSTEM

Create:

- visual language
- typography
- spacing
- colors
- components
- responsive rules
- consumer screens
- operational screens

Use the approved Stitch UI direction.

## Gate

UI does not look like generic AI-generated SaaS.

---

# PHASE 4 — TECHNICAL FOUNDATION

Implement/validate:

```text
Next.js
TypeScript
PostgreSQL
Prisma
PostGIS
Auth.js
validation
error handling
environment system
logging
```

## Gate

Application runs reliably.

---

# PHASE 5 — DATABASE + RBAC

Implement:

- users
- roles
- permissions
- places
- businesses
- claims
- categories
- tags
- media

Implement:

- authorization
- ownership
- audit foundation

## Gate

Unauthorized access tests pass.

---

# PHASE 6 — AUTHENTICATION + PROFILE

Implement:

- register
- login
- logout
- session
- verification
- password reset
- profile

## Gate

Authentication is secure and role-aware.

---

# PHASE 7 — PLACES + FOOD DISCOVERY

Implement:

- places
- businesses
- categories
- photos
- facilities
- menus
- reviews
- saves
- place detail

Integrations:

```text
Leaflet
OpenStreetMap
Geocoding
PostGIS
Cloudinary
```

## Gate

Place discovery works end-to-end.

---

# PHASE 8 — SEARCH + MAP

Implement:

- search
- filters
- nearby
- distance
- viewport
- clustering
- map/list sync
- routing

Integrations:

```text
PostgreSQL
PostGIS
Leaflet
Geocoding provider
Routing provider
```

## Gate

Map and search work correctly at realistic data volume.

---

# PHASE 9 — EVENTS + ORGANIZER

Implement:

- event CRUD
- draft
- submission
- approval
- publication
- schedule
- capacity
- RSVP
- tickets
- attendee
- check-in

Integrations:

```text
Cloudinary
Leaflet
Geocoding
Midtrans
Resend
Notifications
```

Only activate integrations actually required by enabled features.

## Gate

Organizer cannot modify another organizer's event.

---

# PHASE 10 — BUSINESS OWNER

Implement:

- business claim
- verification
- ownership
- business dashboard
- photos
- facilities
- menus
- analytics
- venue/event relationship

## Gate

Business ownership is secure and auditable.

---

# PHASE 11 — COMMUNITY

Implement:

- community
- membership
- community roles
- posts
- comments
- events
- reports
- moderation

## Gate

Community authorization is scoped correctly.

---

# PHASE 12 — JOURNEYS + ENGAGEMENT

Implement:

- journeys
- journey items
- collections
- saves
- check-ins
- follows
- discovery history where justified

## Gate

Discovery loop is coherent.

---

# PHASE 13 — ADMIN + MODERATOR

Implement:

- admin overview
- places
- businesses
- verification
- events
- approvals
- communities
- users
- reports
- reviews
- photos
- journeys
- analytics
- audit logs
- settings

## Gate

Every privileged action is server-authorized and appropriately audited.

---

# PHASE 14 — NOTIFICATIONS + ANALYTICS + AI

Implement as needed:

```text
Resend
PostHog
Upstash Redis
AI provider
background jobs
```

## Gate

Integrations are observable, secure, and replaceable.

---

# PHASE 15 — FINAL QA / SECURITY / PERFORMANCE / DEPLOYMENT

Complete:

- unit tests
- integration tests
- E2E
- security tests
- accessibility
- performance
- SEO
- database indexes
- backups
- logging
- deployment
- environment validation

## Gate

No known critical security or authorization defect.

---

# 101. DEFINITION OF DONE

A feature is complete only when:

```text
UI
+
Backend
+
Database
+
Validation
+
Authorization
+
Error handling
+
Loading state
+
Empty state
+
Responsive behavior
+
Accessibility
+
Testing
+
Documentation
```

are addressed as applicable.

---

# 102. FEATURE IMPLEMENTATION CHECKLIST

Before declaring a feature complete, ask:

### Product

- What user problem does this solve?
- Which role uses it?
- Which domain entity does it affect?

### Database

- Does schema need modification?
- Are constraints correct?
- Are indexes required?
- Is a migration required?

### Authorization

- Who can access it?
- Who can modify it?
- Is ownership required?
- Is community scope required?

### API

- Is there an internal API?
- Does it need validation?
- Is it idempotent?
- Is it rate limited?

### External services

- Does it use an external provider?
- Is the provider configured?
- Is the provider adapter isolated?
- What happens if it fails?

### UI

- loading?
- empty?
- error?
- mobile?
- accessibility?

### Testing

- unit?
- integration?
- E2E?
- security?

---

# 103. AGENT DECISION PROTOCOL

When facing ambiguity:

## Case A — Repository already has implementation

Use existing implementation unless there is a documented reason to replace it.

## Case B — Requirement is explicit

Implement it.

## Case C — Requirement is unclear

Do not invent behavior.

Record:

```text
OPEN QUESTION
```

and ask for clarification if implementation cannot safely proceed.

## Case D — External provider is unknown

Mark:

```text
TBD / CONFIGURABLE
```

Do not fabricate an API.

## Case E — Security-sensitive ambiguity

Choose the safer behavior:

```text
deny by default
```

until authorization is explicitly defined.

---

# 104. AGENT REPORTING FORMAT

When finishing a task, report:

```text
## Summary

## Files Changed

## Database Changes

## API / Integration Changes

## Authorization Changes

## Tests Run

## Remaining Risks

## Open Questions
```

Do not say “all good” without evidence.

---

# 105. NO-HALLUCINATION REPORTING

If a test was not run:

```text
Not run — reason.
```

If an API was not verified:

```text
Not verified — provider credentials/configuration unavailable.
```

If production behavior is unknown:

```text
Not verified in production.
```

Never convert unknown into successful.

---

# 106. DEPENDENCY RULE

Before installing a package:

1. inspect `package.json`
2. inspect lockfile
3. inspect existing utilities
4. determine whether existing dependencies can solve the problem
5. determine bundle/runtime impact
6. install only if justified

Avoid dependency accumulation.

---

# 107. CODE QUALITY

Prefer:

- clear naming
- small functions
- explicit types
- domain-oriented services
- predictable error handling
- reusable components
- testable logic

Avoid:

- clever abstractions without need
- giant components
- duplicated business rules
- hidden side effects
- magic constants
- dead code

---

# 108. COMPONENT RULES

Components should not contain:

- payment business logic
- authorization logic
- database logic
- secret API calls

Components may contain:

- presentation
- interaction state
- client-specific behavior

Domain logic belongs in appropriate services/server modules.

---

# 109. SERVER COMPONENT RULE

Use Server Components by default in Next.js.

Use Client Components only when required for:

- browser interaction
- state
- effects
- map interaction
- complex client UI

Do not mark entire trees `"use client"` unnecessarily.

---

# 110. MAP COMPONENT RULE

Maps normally require browser APIs.

Keep mapping implementation isolated.

Conceptually:

```text
components/maps/
```

Do not spread Leaflet-specific implementation throughout unrelated components.

---

# 111. PAYMENT COMPONENT RULE

Payment UI must never determine final payment success.

Client:

```text
starts checkout
```

Server:

```text
verifies transaction
```

Database:

```text
stores authoritative state
```

---

# 112. ADMIN SECURITY RULE

Admin UI is not an authorization mechanism.

Even if:

```text
/admin/users
```

exists, the server must verify:

```text
authenticated
+
admin permission
```

for every sensitive operation.

---

# 113. MODERATOR SECURITY RULE

Moderator permissions must be narrower than admin.

Do not accidentally grant moderator:

```text
settings.update
role.assign
payment.admin
```

unless explicitly required.

---

# 114. BUSINESS OWNER SECURITY RULE

Business ownership must be resource-scoped.

A Business Owner can manage:

```text
owned/verified business
```

not:

```text
all businesses
```

---

# 115. ORGANIZER SECURITY RULE

Organizer permissions are event-scoped.

Organizer can manage:

```text
events they own/manage
```

not:

```text
all events
```

---

# 116. COMMUNITY SECURITY RULE

Community moderation is scoped to the community.

A community moderator cannot automatically moderate the entire platform.

---

# 117. PUBLIC DATA VS PRIVATE DATA

Public:

- published places
- published events
- public communities
- public journeys
- public reviews according to policy

Private:

- private profile fields
- private location history
- authentication information
- payment details
- moderation internal notes
- private organizer/business information

Do not expose private data through APIs.

---

# 118. STATUS CONSISTENCY

Use consistent terminology.

Possible:

```text
DRAFT
PENDING
PUBLISHED
ACTIVE
COMPLETED
CANCELLED
REJECTED
SUSPENDED
HIDDEN
VERIFIED
REPORTED
```

Do not invent ten variations for the same concept.

---

# 119. UI STATUS CONSISTENCY

Use semantic badges.

Examples:

```text
Verified
Pending
Rejected
Suspended
Published
Draft
Cancelled
Completed
Reported
Hidden
```

Color must communicate meaning, not decoration.

---

# 120. EMPTY STATES

Every major collection must define an empty state.

Example:

```text
No saved places yet.

Explore places and save the ones you want to visit.
```

Do not show empty blank containers.

---

# 121. ERROR STATES

Every important async operation must provide:

- understandable message
- retry where appropriate
- no technical secrets
- useful next step

---

# 122. LOADING STATES

Use:

- skeletons
- progress indicators
- optimistic updates only where safe

Do not block entire applications for small asynchronous operations.

---

# 123. CONTENT QUALITY

The platform should prioritize real information.

Never fabricate:

- opening hours
- menu
- event schedule
- ticket price
- review
- rating
- venue capacity
- business ownership
- availability

When unavailable:

```text
Information unavailable
```

is better than invented data.

---

# 124. MAP DATA QUALITY

Coordinates must come from:

- verified source
- geocoding
- authorized manual input
- imported trusted data

Do not randomly generate coordinates to make a map look populated.

---

# 125. EVENT DATA QUALITY

AI/imported event information is untrusted.

Required pipeline:

```text
raw source
→ extraction
→ validation
→ human/authorized review
→ publication
```

---

# 126. BUSINESS DATA QUALITY

Business ownership requires verification.

Do not infer:

```text
user owns business
```

from:

- matching name
- email similarity
- social media username alone
- user claim without verification

---

# 127. SOCIAL FEATURES

Social features must respect privacy.

Examples:

- follows
- saves
- collections
- check-ins
- activity

must have explicit visibility rules.

Do not make private activity public by default.

---

# 128. ANALYTICS PRIVACY

Analytics should capture product behavior without collecting unnecessary personal information.

Avoid sending:

- passwords
- raw tokens
- sensitive profile data
- private messages
- unnecessary precise location

---

# 129. PRODUCTION READINESS

Before production:

```text
.env validated
database migrations reviewed
backups configured
auth tested
RBAC tested
payment tested if enabled
webhooks tested
uploads tested
rate limits configured
logging configured
monitoring configured
SEO reviewed
accessibility reviewed
performance reviewed
```

---

# 130. FINAL ARCHITECTURE

The intended platform is:

```text
                         ┌───────────────┐
                         │     USER      │
                         └───────┬───────┘
                                 │
                         ┌───────▼───────┐
                         │   DISCOVERY   │
                         └───────┬───────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                  │
        ┌─────▼─────┐      ┌─────▼─────┐      ┌────▼─────┐
        │   PLACES  │      │   EVENTS  │      │COMMUNITY │
        └─────┬─────┘      └─────┬─────┘      └────┬─────┘
              │                  │                  │
              │                  │                  │
              └──────────────────┼──────────────────┘
                                 │
                         ┌───────▼───────┐
                         │    JOURNEY    │
                         └───────┬───────┘
                                 │
                  ┌──────────────┼──────────────┐
                  │              │              │
                SAVE           RSVP         CHECK-IN
                  │              │              │
                  └──────────────┼──────────────┘
                                 │
                       REVIEW / SHARE / FOLLOW
                                 │
                         ┌───────▼───────┐
                         │ MORE DISCOVERY│
                         └───────────────┘
```

---

# 131. FINAL TECHNOLOGY MAP

The intended integration architecture is:

```text
                         NEXT.JS
                            │
              ┌─────────────┼─────────────┐
              │             │             │
           React        Server          API
              │             │             │
              │       ┌─────┼─────┐       │
              │       │     │     │       │
              │      Auth  Domain DB      │
              │             │     │       │
              │             │ PostgreSQL  │
              │             │ + PostGIS   │
              │             │             │
              │       ┌─────┴─────────────┐
              │       │ Provider Adapters │
              │       └─────┬─────────────┘
              │             │
      ┌───────┼─────────────┼─────────────────────────┐
      │       │             │                         │
    Maps    Media        Payment                    Email
      │       │             │                         │
  Leaflet  Cloudinary   Midtrans                   Resend
      │
OpenStreetMap
      │
Geocoding / Routing
      │
 configurable providers

Additional infrastructure:

PostHog
Upstash Redis
AI Provider
Background Jobs
```

---

# 132. FINAL PROVIDER TABLE

| Capability        | Primary / Default                  | Status       |
| ----------------- | ---------------------------------- | ------------ |
| Framework         | Next.js                            | Required     |
| UI                | React                              | Required     |
| Language          | TypeScript                         | Required     |
| Database          | PostgreSQL                         | Required     |
| Spatial DB        | PostGIS                            | Required     |
| ORM               | Prisma                             | Required     |
| Authentication    | Auth.js                            | Primary      |
| Maps              | Leaflet                            | Primary      |
| Map data          | OpenStreetMap ecosystem            | Default      |
| Map tiles         | Configurable provider              | Configurable |
| Geocoding         | Nominatim initially / configurable | Configurable |
| Routing           | OSRM initially / configurable      | Configurable |
| Images            | Cloudinary                         | Primary      |
| Payments          | Midtrans                           | Conditional  |
| Email             | Resend                             | Conditional  |
| Analytics         | PostHog                            | Conditional  |
| Rate limiting     | Upstash Redis                      | Conditional  |
| Search            | PostgreSQL                         | Default      |
| Advanced search   | Meilisearch / Typesense            | Optional     |
| AI                | Configurable provider              | Optional     |
| Push notification | Web Push                           | Optional     |
| Background jobs   | Configurable                       | Conditional  |

**Important:** “Primary” does not mean credentials are automatically available. The agent must inspect environment configuration before claiming an integration is active.

---

# 133. WHAT THE AGENT MUST DO FIRST

For a new task, the agent must follow:

```text
1. Read AGENTS.md
2. Identify project phase
3. Inspect repository
4. Inspect relevant existing code
5. Inspect package.json
6. Inspect database schema
7. Inspect environment configuration
8. Identify dependencies
9. Plan change
10. Implement
11. Test
12. Review authorization/security
13. Review API integrations
14. Report results
```

---

# 134. WHAT THE AGENT MUST NOT DO FIRST

Do NOT immediately:

```text
install packages
rewrite folders
create database tables
create API routes
create mock integrations
create fake data
replace authentication
replace map system
replace styling
```

without repository inspection.

---

# 135. WHEN THE AGENT IS UNSURE

Use this hierarchy:

```text
Repository evidence
        ↓
AGENTS.md
        ↓
Existing documentation
        ↓
Explicit user requirement
        ↓
Established project convention
        ↓
Ask / mark TBD
```

Never:

```text
guess
```

when a guess can alter architecture or data.

---

# 136. FINAL PRINCIPLE

The goal is not to maximize:

```text
features
dependencies
AI
abstractions
screens
```

The goal is to maximize:

```text
correctness
clarity
security
maintainability
user value
```

Build one coherent product.

Build phase by phase.

Use explicit providers.

Keep providers replaceable.

Keep authorization server-side.

Keep financial state authoritative.

Treat external data as untrusted.

Treat AI output as untrusted.

Never hallucinate missing information.

When something is unknown:

> **Inspect it, verify it, or explicitly mark it unknown. Never invent it.**

---

# END OF AGENTS.md
