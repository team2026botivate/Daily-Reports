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
    { id: 1, projectName: 'Global Export A1', taskDescription: 'Batch A Dispatch readiness', progress: 100, status: 'Completed', date: '2024-03-10', actual: '2024-03-09', delay: '0 days' },
    { id: 2, projectName: 'Local Supply B2', taskDescription: 'Invoicing and documentation', progress: 65, status: 'In Progress', date: '2024-03-12', actual: '2024-03-13', delay: '1 day' },
    { id: 3, projectName: 'Regional Hub C3', taskDescription: 'Loading bay scheduling', progress: 0, status: 'Not Started', date: '2024-03-15', actual: '-', delay: '-' },
    { id: 4, projectName: 'Express Delivery D4', taskDescription: 'Courier coordination', progress: 45, status: 'In Progress', date: '2024-03-12', actual: '2024-03-14', delay: '2 days' },
  ],
  'purchase': [
    { id: 1, projectName: 'Raw Materials', taskDescription: 'Steel procurement', progress: 100, status: 'Completed', date: '2024-02-28', actual: '2024-02-27', delay: '0 days' },
    { id: 2, projectName: 'Office Supplies', taskDescription: 'Printer ink refill', progress: 0, status: 'Not Started', date: '2024-03-15', actual: '-', delay: '-' },
    { id: 3, projectName: 'Electronics', taskDescription: 'Circuit board import', progress: 60, status: 'In Progress', date: '2024-03-10', actual: '2024-03-11', delay: '1 day' },
  ],
  'repair': [
    { id: 1, projectName: 'Forklift 12', taskDescription: 'Hydraulic leak fix', progress: 100, status: 'Completed', date: '2024-03-09', actual: '2024-03-09', delay: '0 days' },
    { id: 2, projectName: 'Drill Press B', taskDescription: 'Motor rewinding', progress: 50, status: 'In Progress', date: '2024-03-12', actual: '2024-03-15', delay: '3 days' },
  ],
  'production': [
    { id: 1, projectName: 'Assembly Line X', taskDescription: 'Core engine assembly', progress: 80, status: 'In Progress', date: '2024-03-11', actual: '2024-03-12', delay: '1 day' },
    { id: 2, projectName: 'Fabrication Unit Y', taskDescription: 'Shell welding', progress: 100, status: 'Completed', date: '2024-03-08', actual: '2024-03-07', delay: '0 days' },
    { id: 3, projectName: 'Paint Shop Z', taskDescription: 'Top coat application', progress: 10, status: 'Not Started', date: '2024-03-14', actual: '-', delay: '-' },
  ],
  'maintenance': [
    { id: 1, projectName: 'Main Boiler', taskDescription: 'Annual pressure test', progress: 100, status: 'Completed', date: '2024-03-05', actual: '2024-03-04', delay: '0 days' },
    { id: 2, projectName: 'Conveyor 4', taskDescription: 'Belt replacement', progress: 20, status: 'In Progress', date: '2024-03-13', actual: '2024-03-15', delay: '2 days' },
  ],
  'checklist': [
    { id: 1, projectName: 'Safety Audit', taskDescription: 'Floor inspection', progress: 100, status: 'Completed', date: '2024-03-01', actual: '2024-03-01', delay: '0 days' },
    { id: 2, projectName: 'Quality Control', taskDescription: 'Batch 505 testing', progress: 90, status: 'In Progress', date: '2024-03-13', actual: '2024-03-14', delay: '1 day' },
  ],
  'store': [
    { id: 1, projectName: 'Inventory Count', taskDescription: 'Quarterly audit', progress: 75, status: 'In Progress', date: '2024-03-10', actual: '2024-03-11', delay: '1 day' },
    { id: 2, projectName: 'Shelving Unit 5', taskDescription: 'Reorganization', progress: 100, status: 'Completed', date: '2024-03-05', actual: '2024-03-05', delay: '0 days' },
  ],
  'lead-to-enquiry': [
    { id: 1, projectName: 'Project Horizon', taskDescription: 'Initial lead discovery', progress: 100, status: 'Completed', date: '2024-03-02', actual: '2024-03-01', delay: '0 days' },
    { id: 2, projectName: 'Skyline Build', taskDescription: 'Requirement gathering', progress: 30, status: 'In Progress', date: '2024-03-13', actual: '2024-03-15', delay: '2 days' },
  ],
};
