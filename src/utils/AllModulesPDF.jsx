import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font, Svg, Path, Circle } from '@react-pdf/renderer';

const ArrowUpRightIcon = () => (
  <Svg viewBox="0 0 24 24" width={8} height={8}>
    <Path d="M 7 7 L 17 7 L 17 17" stroke="#64748b" strokeWidth={2} fill="none" />
    <Path d="M 7 17 L 17 7" stroke="#64748b" strokeWidth={2} fill="none" />
  </Svg>
);

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#f8fafc',
    fontFamily: 'Helvetica',
    paddingBottom: 60, // increased padding for footer
  },
  headerContainer: {
    backgroundColor: '#0a2e65', // Dark blue background
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 30,
    position: 'relative',
    marginBottom: 20,
  },
  innerHeaderBox: {
    borderWidth: 1,
    borderColor: '#4267b2',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0c387a',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  headerRightText1: {
    color: '#a0bdf2',
    fontSize: 8,
    marginBottom: 4,
  },
  headerRightText2: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  dateBox: {
    position: 'absolute',
    bottom: -15,
    left: 30,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '60%',
    borderWidth: 1,
    borderColor: '#eeeeee',
  },
  dateText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#0a2e65',
  },
  body: {
    paddingHorizontal: 30,
  },
  moduleNameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222222',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#0a2e65',
    marginBottom: 10,
    marginTop: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 10,
  },
  cardItem: {
    width: '31%',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  cardIconBoxCompleted: { width: 32, height: 32, borderRadius: 8, backgroundColor: '#dcfce7', justifyContent: 'center', alignItems: 'center' },
  cardIconBoxInProgress: { width: 32, height: 32, borderRadius: 8, backgroundColor: '#eff6ff', justifyContent: 'center', alignItems: 'center' },
  cardIconBoxNotStarted: { width: 32, height: 32, borderRadius: 8, backgroundColor: '#f3e8ff', justifyContent: 'center', alignItems: 'center' },
  cardViewAllWrap: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  cardViewAllText: { fontSize: 7, fontWeight: 'bold', color: '#64748b', marginRight: 2 },
  
  cardMiddleRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 4,
  },
  cardCountText: { fontSize: 24, fontWeight: 'bold', color: '#0f172a', marginRight: 4 },
  cardLabelTextCompleted: { fontSize: 9, fontWeight: 'bold', color: '#94a3b8', paddingBottom: 4 },
  cardLabelTextInProgress: { fontSize: 9, fontWeight: 'bold', color: '#94a3b8', paddingBottom: 4 },
  cardLabelTextNotStarted: { fontSize: 9, fontWeight: 'bold', color: '#94a3b8', paddingBottom: 4 },
  cardSubDesc: { fontSize: 8, fontStyle: 'italic', color: '#64748b', marginBottom: 15 },
  
  cardBottomBarBase: { height: 4, width: '100%', backgroundColor: '#f1f5f9', borderRadius: 2 },
  cardBottomBarFillCompleted: { height: 4, width: '40%', backgroundColor: '#10b981', borderRadius: 2 },
  cardBottomBarFillInProgress: { height: 4, width: '40%', backgroundColor: '#3b82f6', borderRadius: 2 },
  cardBottomBarFillNotStarted: { height: 4, width: '40%', backgroundColor: '#8b5cf6', borderRadius: 2 },

  activityContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  activityBox: { width: '31%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderWidth: 1, borderColor: '#e2e8f0', borderRadius: 4, backgroundColor: '#ffffff' },
  activityText: { fontSize: 9, color: '#475569' },
  activityValue: { fontSize: 11, fontWeight: 'bold', color: '#0f172a' },
  
  tableHeaderWrap: { flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#0a2e65', paddingBottom: 6, marginBottom: 10 },
  tableHeaderTitle: { fontSize: 10, fontWeight: 'bold', color: '#0a2e65' },
  tableSubTitle: { fontSize: 8, color: '#64748b' },
  table: { width: '100%', backgroundColor: '#ffffff', borderRadius: 8, padding: 8, borderWidth: 1, borderColor: '#e2e8f0' },
  tableRowHeader: { flexDirection: 'row', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#e2e8f0' },
  tableRow: { flexDirection: 'row', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#f1f5f9', alignItems: 'center' },
  col1: { width: '22%', paddingHorizontal: 4 },
  col2: { width: '28%', paddingHorizontal: 4 },
  col3: { width: '12%', paddingHorizontal: 4 },
  col4: { width: '18%', paddingHorizontal: 4 },
  col5: { width: '20%', paddingHorizontal: 4 },
  colTextHeader: { fontSize: 8, fontWeight: 'bold', color: '#475569' },
  colText: { fontSize: 8, color: '#1e293b' },
  colTextSuccess: { fontSize: 8, color: '#16a34a', fontWeight: 'bold' },
  colTextWarning: { fontSize: 8, color: '#d97706', fontWeight: 'bold' },
  colTextNeutral: { fontSize: 8, color: '#475569', fontWeight: 'bold' },
  emptyText: { fontSize: 10, color: '#64748b', textAlign: 'center', marginTop: 20 },
  
  // New styles for Executive Summary and Header
  badge: {
    backgroundColor: 'rgba(37, 99, 235, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(37, 99, 235, 0.2)',
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#2563eb',
    fontSize: 6,
    fontWeight: 'black',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  moduleSubtitle: {
    fontSize: 9,
    color: '#64748b',
    marginTop: 4,
    marginBottom: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    flex: 1,
    marginLeft: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingTop: 10,
  },
  footerText: { fontSize: 8, color: '#94a3b8' },
});

const AllModulesPDF = ({ modules, allData, logoPath }) => {
  const today = new Date().toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  const padZero = (num) => String(num).padStart(2, '0');

  const totalCompleted = modules.reduce((sum, mod) => sum + (allData[mod.id] || []).filter(r => r.status === 'Completed').length, 0);
  const totalInProgress = modules.reduce((sum, mod) => sum + (allData[mod.id] || []).filter(r => r.status === 'In Progress').length, 0);
  const totalNotStarted = modules.reduce((sum, mod) => sum + (allData[mod.id] || []).filter(r => r.status === 'Not Started').length, 0);

  return (
    <Document>
      {/* Executive Overview Page */}
      <Page size="A4" style={styles.page}>
        <View style={styles.headerContainer} fixed>
          <View style={styles.dateBox}>
            <Text style={styles.dateText}>Executive Overview - {today}</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>All-Module Summary</Text>
          </View>
          <Text style={styles.moduleNameText}>Project Report Summary</Text>
          <Text style={styles.moduleSubtitle}>Aggregated task status across all operations and departments</Text>
          
          <Text style={styles.sectionTitle}>Global Portfolio Status</Text>
          <View style={styles.cardsContainer}>
            <View style={styles.cardItem}>
              <View style={styles.cardTopRow}>
                <View style={styles.cardIconBoxCompleted}>
                  <Svg viewBox="0 0 24 24" width={14} height={14}>
                    <Circle cx="12" cy="12" r="9" stroke="#16a34a" strokeWidth={2} fill="none" />
                    <Path d="M 8 12 L 11 15 L 16 10" stroke="#16a34a" strokeWidth={2} fill="none" />
                  </Svg>
                </View>
              </View>
              <View style={styles.cardMiddleRow}>
                <Text style={styles.cardCountText}>{padZero(totalCompleted)}</Text>
                <Text style={styles.cardLabelTextCompleted}>TOTAL COMPLETED</Text>
              </View>
            </View>

            <View style={styles.cardItem}>
              <View style={styles.cardTopRow}>
                <View style={styles.cardIconBoxInProgress}>
                  <Svg viewBox="0 0 24 24" width={14} height={14}>
                    <Circle cx="12" cy="13" r="8" stroke="#2563eb" strokeWidth={2} fill="none" />
                    <Path d="M 12 9 L 12 13 L 14 15" stroke="#2563eb" strokeWidth={2} fill="none" />
                  </Svg>
                </View>
              </View>
              <View style={styles.cardMiddleRow}>
                <Text style={styles.cardCountText}>{padZero(totalInProgress)}</Text>
                <Text style={styles.cardLabelTextInProgress}>TOTAL ACTIVE</Text>
              </View>
            </View>

            <View style={styles.cardItem}>
              <View style={styles.cardTopRow}>
                <View style={styles.cardIconBoxNotStarted}>
                  <Svg viewBox="0 0 24 24" width={14} height={14}>
                    <Circle cx="12" cy="12" r="9" stroke="#8b5cf6" strokeWidth={2} fill="none" />
                  </Svg>
                </View>
              </View>
              <View style={styles.cardMiddleRow}>
                <Text style={styles.cardCountText}>{padZero(totalNotStarted)}</Text>
                <Text style={styles.cardLabelTextNotStarted}>TOTAL PENDING</Text>
              </View>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Breakdown by Module</Text>
          <View style={styles.table}>
            <View style={styles.tableRowHeader}>
              <Text style={[styles.col2, styles.colTextHeader, { width: '40%' }]}>Module Name</Text>
              <Text style={[styles.col3, styles.colTextHeader, { width: '20%' }]}>Tasks</Text>
              <Text style={[styles.col4, styles.colTextHeader, { width: '20%' }]}>Completed</Text>
              <Text style={[styles.col5, styles.colTextHeader, { width: '20%' }]}>Status</Text>
            </View>
            {modules.map((mod) => {
              const modReports = allData[mod.id] || [];
              const modCompleted = modReports.filter(r => r.status === 'Completed').length;
              const progress = modReports.length > 0 ? Math.round((modCompleted / modReports.length) * 100) : 0;
              return (
                <View key={mod.id} style={styles.tableRow} wrap={false}>
                  <Text style={[styles.col2, styles.colText, { width: '40%' }]}>{String(mod.name)}</Text>
                  <Text style={[styles.col3, styles.colText, { width: '20%' }]}>{modReports.length}</Text>
                  <Text style={[styles.col4, styles.colText, { width: '20%' }]}>{modCompleted}</Text>
                  <Text style={[styles.col5, styles.colText, { width: '20%', color: progress === 100 ? '#16a34a' : '#2563eb' }]}>{progress}% Done</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>Powered by Botivate</Text>
          <Text style={styles.footerText} render={({ pageNumber, totalPages }) => (`Page ${pageNumber} of ${totalPages}`)} />
        </View>
      </Page>
      {modules.map((module) => {
        const reports = allData[module.id] || [];

        const completedCount = reports.filter(r => r.status === 'Completed').length;
        const inProgressCount = reports.filter(r => r.status === 'In Progress').length;
        const notStartedCount = reports.filter(r => r.status === 'Not Started').length;

        return (
          <Page key={module.id} size="A4" style={styles.page}>
            <View style={styles.headerContainer} fixed>
              <View style={styles.dateBox}>
                <Text style={styles.dateText}>Daily Report - {today}</Text>
              </View>
            </View>

            <View style={styles.body}>
              <View style={styles.headerRow}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>Module: {String(module.id).replace(/-/g, ' ')}</Text>
                </View>
                <View style={styles.divider} />
              </View>
              <Text style={styles.moduleNameText}>{String(module.name)}</Text>
              <Text style={styles.moduleSubtitle}>Monitoring live operations and work reports for the current cycle</Text>
              
              <Text style={styles.sectionTitle}>Tasks Summary</Text>
              
              <View style={styles.cardsContainer}>
                {/* Completed Card */}
                <View style={styles.cardItem}>
                  <View style={styles.cardTopRow}>
                    <View style={styles.cardIconBoxCompleted}>
                      <Svg viewBox="0 0 24 24" width={14} height={14}>
                        <Circle cx="12" cy="12" r="9" stroke="#16a34a" strokeWidth={2} fill="none" />
                        <Path d="M 8 12 L 11 15 L 16 10" stroke="#16a34a" strokeWidth={2} fill="none" />
                      </Svg>
                    </View>
                    <View style={styles.cardViewAllWrap}>
                      <Text style={styles.cardViewAllText}>VIEW ALL</Text>
                      <ArrowUpRightIcon />
                    </View>
                  </View>
                  <View style={styles.cardMiddleRow}>
                    <Text style={styles.cardCountText}>{padZero(completedCount)}</Text>
                    <Text style={styles.cardLabelTextCompleted}>COMPLETED</Text>
                  </View>
                  <Text style={styles.cardSubDesc}>Tasks successfully finished</Text>
                  <View style={styles.cardBottomBarBase}>
                    <View style={styles.cardBottomBarFillCompleted} />
                  </View>
                </View>

                {/* In Progress Card */}
                <View style={styles.cardItem}>
                  <View style={styles.cardTopRow}>
                    <View style={styles.cardIconBoxInProgress}>
                      <Svg viewBox="0 0 24 24" width={14} height={14}>
                        <Circle cx="12" cy="13" r="8" stroke="#2563eb" strokeWidth={2} fill="none" />
                        <Path d="M 12 9 L 12 13 L 14 15" stroke="#2563eb" strokeWidth={2} fill="none" />
                        <Path d="M 10 2 L 14 2" stroke="#2563eb" strokeWidth={2} fill="none" />
                      </Svg>
                    </View>
                    <View style={styles.cardViewAllWrap}>
                      <Text style={styles.cardViewAllText}>VIEW ALL</Text>
                      <ArrowUpRightIcon />
                    </View>
                  </View>
                  <View style={styles.cardMiddleRow}>
                    <Text style={styles.cardCountText}>{padZero(inProgressCount)}</Text>
                    <Text style={styles.cardLabelTextInProgress}>IN PROGRESS</Text>
                  </View>
                  <Text style={styles.cardSubDesc}>Tasks currently active</Text>
                  <View style={styles.cardBottomBarBase}>
                    <View style={styles.cardBottomBarFillInProgress} />
                  </View>
                </View>

                {/* Not Started Card */}
                <View style={styles.cardItem}>
                  <View style={styles.cardTopRow}>
                    <View style={styles.cardIconBoxNotStarted}>
                      <Svg viewBox="0 0 24 24" width={14} height={14}>
                        <Circle cx="12" cy="12" r="9" stroke="#8b5cf6" strokeWidth={2} fill="none" />
                        <Path d="M 12 7 L 12 12" stroke="#8b5cf6" strokeWidth={2} fill="none" />
                        <Circle cx="12" cy="16" r="1.5" fill="#8b5cf6" />
                      </Svg>
                    </View>
                    <View style={styles.cardViewAllWrap}>
                      <Text style={styles.cardViewAllText}>VIEW ALL</Text>
                      <ArrowUpRightIcon />
                    </View>
                  </View>
                  <View style={styles.cardMiddleRow}>
                    <Text style={styles.cardCountText}>{padZero(notStartedCount)}</Text>
                    <Text style={styles.cardLabelTextNotStarted}>NOT STARTED</Text>
                  </View>
                  <Text style={styles.cardSubDesc}>Tasks in the pipeline</Text>
                  <View style={styles.cardBottomBarBase}>
                    <View style={styles.cardBottomBarFillNotStarted} />
                  </View>
                </View>
              </View>

              <Text style={styles.sectionTitle}>Activity</Text>
              
              <View style={styles.activityContainer}>
                <View style={styles.activityBox}>
                  <Text style={styles.activityText}>Task Updates</Text>
                  <Text style={styles.activityValue}>{String(reports.length)}</Text>
                </View>
                <View style={styles.activityBox}>
                  <Text style={styles.activityText}>Issues Created</Text>
                  <Text style={styles.activityValue}>0</Text>
                </View>
                <View style={styles.activityBox}>
                  <Text style={styles.activityText}>Attendance Logged</Text>
                  <Text style={styles.activityValue}>0</Text>
                </View>
              </View>

              <View style={styles.tableHeaderWrap}>
                <Text style={styles.tableHeaderTitle}>Task Updates: {today}</Text>
                <Text style={styles.tableSubTitle}>Category: {String(module.name)}</Text>
              </View>

              <View style={styles.table}>
                <View style={styles.tableRowHeader}>
                  <Text style={[styles.col1, styles.colTextHeader]}>Project Details</Text>
                  <Text style={[styles.col2, styles.colTextHeader]}>Objective</Text>
                  <Text style={[styles.col3, styles.colTextHeader]}>Completion</Text>
                  <Text style={[styles.col4, styles.colTextHeader]}>Status</Text>
                  <Text style={[styles.col5, styles.colTextHeader]}>Timeline</Text>
                </View>

                {reports.length > 0 ? reports.map((report, idx) => (
                  <View key={String(report.id)} style={styles.tableRow} wrap={false}>
                    <View style={styles.col1}>
                      <Text style={styles.colText}>{String(report.projectName)}</Text>
                      <Text style={[styles.colText, { color: '#94a3b8', fontSize: 6 }]}>ID: #PR-00{report.id}</Text>
                    </View>
                    <Text style={[styles.col2, styles.colText]}>{String(report.taskDescription)}</Text>
                    <Text style={[styles.col3, styles.colText]}>{String(report.progress)}%</Text>
                    <Text style={[
                      styles.col4, 
                      report.status === 'Completed' ? styles.colTextSuccess : 
                      report.status === 'In Progress' ? styles.colTextWarning : 
                      styles.colTextNeutral
                    ]}>
                      {String(report.status)}
                    </Text>
                    <Text style={[styles.col5, styles.colText]}>{String(report.date || 'Mar 10')}</Text>
                  </View>
                )) : (
                  <Text style={styles.emptyText}>No tasks found for this module.</Text>
                )}
              </View>
            </View>
            <View style={styles.footer} fixed>
              <Text style={styles.footerText}>Powered by Botivate</Text>
              <Text style={styles.footerText} render={({ pageNumber, totalPages }) => (`Page ${pageNumber} of ${totalPages}`)} />
            </View>
          </Page>
        );
      })}
    </Document>
  );
};

export default AllModulesPDF;

