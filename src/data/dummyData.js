export const modules = [
  { id: 'order-to-dispatch', name: 'Order to Dispatch', icon: 'Truck' },
  { id: 'purchase', name: 'Purchase', icon: 'ShoppingCart' },
  { id: 'repair', name: 'Repair', icon: 'Wrench' },
  { id: 'production', name: 'Production', icon: 'Factory' },
  { id: 'maintenance', name: 'Maintenance', icon: 'Settings' },
  { id: 'checklist', name: 'Checklist', icon: 'ClipboardCheck' },
  { id: 'store', name: 'Store', icon: 'Warehouse' },
  { id: 'lead-to-enquiry', name: 'Lead to Enquiry', icon: 'Users' },
];

export const dummyReports = {
  'order-to-dispatch': [
    { id: 1, projectName: 'Global Export A1', taskDescription: 'Batch A Dispatch readiness', progress: 100, status: 'Completed', date: '2024-03-10' },
    { id: 2, projectName: 'Local Supply B2', taskDescription: 'Invoicing and documentation', progress: 65, status: 'In Progress', date: '2024-03-12' },
    { id: 3, projectName: 'Regional Hub C3', taskDescription: 'Loading bay scheduling', progress: 0, status: 'Not Started', date: '2024-03-15' },
    { id: 4, projectName: 'Express Delivery D4', taskDescription: 'Courier coordination', progress: 45, status: 'In Progress', date: '2024-03-12' },
  ],
  'purchase': [
    { id: 1, projectName: 'Raw Materials', taskDescription: 'Steel procurement', progress: 100, status: 'Completed', date: '2024-02-28' },
    { id: 2, projectName: 'Office Supplies', taskDescription: 'Printer ink refill', progress: 0, status: 'Not Started', date: '2024-03-15' },
    { id: 3, projectName: 'Electronics', taskDescription: 'Circuit board import', progress: 60, status: 'In Progress', date: '2024-03-10' },
  ],
  'repair': [
    { id: 1, projectName: 'Forklift 12', taskDescription: 'Hydraulic leak fix', progress: 100, status: 'Completed', date: '2024-03-09' },
    { id: 2, projectName: 'Drill Press B', taskDescription: 'Motor rewinding', progress: 50, status: 'In Progress', date: '2024-03-12' },
  ],
  'production': [
    { id: 1, projectName: 'Assembly Line X', taskDescription: 'Core engine assembly', progress: 80, status: 'In Progress', date: '2024-03-11' },
    { id: 2, projectName: 'Fabrication Unit Y', taskDescription: 'Shell welding', progress: 100, status: 'Completed', date: '2024-03-08' },
    { id: 3, projectName: 'Paint Shop Z', taskDescription: 'Top coat application', progress: 10, status: 'Not Started', date: '2024-03-14' },
  ],
  'maintenance': [
    { id: 1, projectName: 'Main Boiler', taskDescription: 'Annual pressure test', progress: 100, status: 'Completed', date: '2024-03-05' },
    { id: 2, projectName: 'Conveyor 4', taskDescription: 'Belt replacement', progress: 20, status: 'In Progress', date: '2024-03-13' },
  ],
  'checklist': [
    { id: 1, projectName: 'Safety Audit', taskDescription: 'Floor inspection', progress: 100, status: 'Completed', date: '2024-03-01' },
    { id: 2, projectName: 'Quality Control', taskDescription: 'Batch 505 testing', progress: 90, status: 'In Progress', date: '2024-03-13' },
  ],
  'store': [
    { id: 1, projectName: 'Inventory Count', taskDescription: 'Quarterly audit', progress: 75, status: 'In Progress', date: '2024-03-10' },
    { id: 2, projectName: 'Shelving Unit 5', taskDescription: 'Reorganization', progress: 100, status: 'Completed', date: '2024-03-05' },
  ],
  'lead-to-enquiry': [
    { id: 1, projectName: 'Project Horizon', taskDescription: 'Initial lead discovery', progress: 100, status: 'Completed', date: '2024-03-02' },
    { id: 2, projectName: 'Skyline Build', taskDescription: 'Requirement gathering', progress: 30, status: 'In Progress', date: '2024-03-13' },
  ],
};
