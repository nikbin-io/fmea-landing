type ColumnDef = {
  title: string
  width: string
  align?: 'left' | 'center' | 'right'
  sticky?: boolean
  color?: string
}

type HeaderSection = {
  id: string
  groupTitle?: string
  color: string
  columns: ColumnDef[]
}

export const DFMEA_HEAD_COLORS = {
  grey: 'bg-[#d9d9d9]',
  blue: 'bg-[#b9d7ed]',
  purple: 'bg-[#cdbfda]',
  greenRisk: 'bg-[#aad08e]',
  greenOpt: 'bg-[#e4efda]'
}

export const DFMEA_HEAD: HeaderSection[] = [
  {
    id: 'meta-issue',
    groupTitle: '\u00A0',
    color: DFMEA_HEAD_COLORS.grey,
    columns: [{ title: 'Issue #', width: 'w-16', sticky: true }]
  },
  {
    id: 'meta-history',
    groupTitle: 'Continuous Improvement',
    color: DFMEA_HEAD_COLORS.grey,
    columns: [{ title: 'History / Change Authorization', width: 'w-24' }]
  },
  {
    id: 'structure',
    groupTitle: 'STRUCTURE ANALYSIS (STEP 2)',
    color: DFMEA_HEAD_COLORS.grey,
    columns: [
      { title: '1. Next Higher Level', width: 'w-48' },
      { title: '2. Focus Element', width: 'w-48' },
      { title: '3. Next Lower Level or Characteristic Type', width: 'w-48' }
    ]
  },
  {
    id: 'function',
    groupTitle: 'FUNCTION ANALYSIS (STEP 3)',
    color: DFMEA_HEAD_COLORS.blue,
    columns: [
      { title: '1. Next Higher Level Function and Requirement', width: 'w-64' },
      { title: '2. Focus Element Function and Requirement', width: 'w-64' },
      {
        title: '3. Next Lower Level Function and Requirement or Characteristic',
        width: 'w-64'
      }
    ]
  },
  {
    id: 'failure',
    groupTitle: 'FAILURE ANALYSIS (STEP 4)',
    color: DFMEA_HEAD_COLORS.purple,
    columns: [
      {
        title:
          '1. Failure Effects (FE) to the Next Higher Level Element and/or End User',
        width: 'w-64'
      },
      { title: 'Severity (S) of FE', width: 'w-10' },
      { title: '2. Failure Mode (FM) of the Focus Element', width: 'w-64' },
      {
        title:
          '3. Failure Cause (FC) of the Next Lower Element or Characteristic',
        width: 'w-64'
      }
    ]
  },
  {
    id: 'risk',
    groupTitle: 'RISK ANALYSIS (STEP 5)',
    color: DFMEA_HEAD_COLORS.greenRisk,
    columns: [
      { title: 'Current Prevention Control (PC) of FC', width: 'w-64' },
      { title: 'Occurrence (O) of FC', width: 'w-10' },
      { title: 'Current Detection Controls (DC) of FC or FM', width: 'w-64' },
      { title: 'Detection (D) of FC/FM', width: 'w-10' },
      { title: 'DFMEA AP', width: 'w-16' },
      { title: 'Filter Code (Optional)', width: 'w-16', color: 'white' }
    ]
  },
  {
    id: 'optimization',
    groupTitle: 'OPTIMIZATION (STEP 6)',
    color: DFMEA_HEAD_COLORS.greenOpt,
    columns: [
      { title: 'DFMEA Preventive Action', width: 'w-48' },
      { title: 'DFMEA Detection Action', width: 'w-48' },
      { title: "Responsible Person's Name", width: 'w-24', color: 'white' },
      { title: 'Target Completion Date', width: 'w-24', color: 'white' },
      { title: 'Status', width: 'w-24', color: 'white' },
      {
        title: 'Action Taken with Pointer to Evidence',
        width: 'w-48',
        color: 'white'
      },
      { title: 'Completion Date', width: 'w-24', color: 'white' },
      { title: 'Severity (S)', width: 'w-10' },
      { title: 'Occurrence (O)', width: 'w-10' },
      { title: 'Detection (D)', width: 'w-10' },
      { title: 'DFMEA AP', width: 'w-10', color: 'white' },
      {
        title: 'Filter Code (Optional)',
        width: 'w-10',
        color: 'white'
      },
      { title: 'Remarks', width: 'w-48', color: '#fff' }
    ]
  }
]

export const DFMEA_BODY = [
  {
    id: 'FC_011',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Locking Mechanism',
    structure_focus: 'Peripheral Locking Elements',
    structure_nextLower: 'Steel Balls',
    func_nextHigher:
      'Implement a locking mechanism that acts on the form-fit geometry to provide high load transfer capabilities.',
    func_focus:
      'Engage with the form-fit geometry of the mated HOTDOCK to create a secure, preloaded mechanical connection.',
    func_nextLower:
      'Roll into position and act as a locking key, transferring shear and bending loads between the two interfaces.',
    fail_effect:
      'A steel ball fractures or is missing | The locking mechanism has reduced load capacity at that location | Connection is weak and may fail under operational loads | Structural failure of the interface, potential liberation of a module.',
    fail_severity: '10',
    fail_mode: 'Fails to transfer mechanical load',
    fail_cause:
      'Brittle fracture of a steel ball due to an undetected material defect (e.g., inclusion) combined with shock loading during a mating event.',
    risk_prevention:
      'The mass budget specifies the material for the balls (Table 7-1 implies a standard material). Design Requirement DesR_005 mandates a robust design.',
    risk_occurrence: '3',
    risk_detection:
      'The mechanical interface is required to withstand operational loads, verified by testing (FuncR_008).',
    risk_detScore: '7',
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Procure steel balls with certified material quality (e.g., vacuum-arc remelted steel) and perform lot-level NDT (non-destructive testing) to screen for material defects.',
    opt_detection:
      'Implement a proof-load test on the fully assembled locking ring to a level exceeding the maximum expected operational loads to screen for any weak components.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_dfmeaAp: '',
    opt_filter: '',
    opt_remarks: 'D2.5, DesR_005, page 18, D2.5, FuncR_008, page 12'
  },
  {
    id: 'FC_171',
    history: '',
    structure_nextHigher: 'Spacecraft Module [SM3-BAT]',
    structure_focus: 'Battery Payload',
    structure_nextLower: 'Battery Controller',
    func_nextHigher: 'Enable storage and delivery of electrical power.',
    func_focus:
      'Manage the balance, charge, and discharge of the internal Lithium-Ion battery pack.',
    func_nextLower:
      'Control the charging/discharging circuitry (DC/DC converters) and monitor cell voltages.',
    fail_effect:
      'Controller fails to terminate charge | A battery cell is overcharged | The cell undergoes thermal runaway, leading to fire or explosion | Catastrophic destruction of the module and potential damage to the entire spacecraft.',
    fail_severity: '10',
    fail_mode: 'Causes thermal runaway',
    fail_cause:
      'A firmware hang or component failure in the battery controller prevents it from stopping the charging process when the battery reaches full capacity.',
    risk_prevention:
      "The battery controller manages the charging/discharging circuitry. It's based on the OG5 design. (D2.4, Section 6.4.4)",
    risk_occurrence: '4',
    risk_detection:
      'The battery controller telemetry includes voltage, current, and temperature, which would show anomalous readings before a catastrophic failure.',
    risk_detScore: '4',
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Implement multiple, independent layers of protection, including firmware limits, a hardware voltage comparator cutoff, and a one-time thermal fuse on the battery pack.',
    opt_detection:
      'Perform fault injection testing on the battery controller to verify that all protection mechanisms function correctly under overcharge and over-temperature conditions.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_dfmeaAp: '',
    opt_filter: '',
    opt_remarks: 'MOSAR D2.4, page 81, MOSAR D2.4, Table 6-4, page 82'
  },
  {
    id: 'FC_004',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Barrel-Cam Mechanism',
    structure_nextLower: 'Cam Follower (e.g., on locking ring)',
    func_nextHigher:
      'Translate motor rotation into axial motion of the connector plate and rotational motion of the locking ring.',
    func_focus:
      'Convert rotational input from the gearing system into the prescribed motion profile for the locking ring and connector plate.',
    func_nextLower:
      'Follow the cam groove profile to guide the moving element, with contact stress below material yield limits (per DesR_015).',
    fail_effect:
      'Cam follower fractures | Follower is no longer constrained by the cam groove | Locking ring and connector plate motion becomes uncontrolled or jammed | Actuation fails | Inability to connect/disconnect module.',
    fail_severity: '9',
    fail_mode: 'Fails to constrain motion (fracture)',
    fail_cause:
      'Fatigue fracture of the cam follower due to high cycle stress accumulated over the mission lifetime (target 100-1000 cycles).',
    risk_prevention:
      'Design requirement DesR_015 specifies that peak hertzian contact stress shall be below 93% of yield. Minimum design safety factors are required per DesR_014.',
    risk_occurrence: '4',
    risk_detection:
      'Verification for safety factors (DesR_014) is by Analysis and Test. Life testing is implied by reusability requirement OpR_002.',
    risk_detScore: '5',
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Perform a detailed Finite Element Analysis (FEA) on the cam follower, including a fatigue analysis, to verify positive design margin over the required life.',
    opt_detection:
      'Implement a test-to-failure or accelerated life test on the barrel-cam mechanism to identify the high-stress points and validate the fatigue life prediction.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_dfmeaAp: '',
    opt_filter: '',
    opt_remarks: 'D2.5, DesR_015 & DesR_014, page 21, D2.5, OpR_002, page 25'
  },
  {
    id: 'FC_007',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Microcontroller (e.g., SAMV71)',
    structure_nextLower: 'Internal Memory (SRAM)',
    func_nextHigher:
      'Control all HOTDOCK functionalities, including motor control, sensor processing, and communication.',
    func_focus:
      'Execute firmware to process commands, run the motor control state machine, and handle telemetry, storing status in internal memory.',
    func_nextLower:
      'Store and retrieve transient data, such as sensor readings, state machine status, and communication buffers, with low latency.',
    fail_effect:
      'Bit flip in a critical memory location | State machine enters an invalid state, or a critical variable is corrupted | Uncommanded motor activation, failure to respond to commands, or system crash | Loss of control over HOTDOCK | Mission failure or damage to hardware.',
    fail_severity: '9',
    fail_mode: 'Firmware enters fault state or hangs',
    fail_cause:
      'Single Event Upset (SEU) caused by a charged particle strike on an SRAM cell in the space radiation environment.',
    risk_prevention:
      "The design must withstand 'space environment conditions' (EnvR_001). However, the document does not specify radiation hardening requirements or mitigation strategies.",
    risk_occurrence: '7',
    risk_detection:
      "The state machine includes a 'Fault' state (Figure 4-2) to detect anomalies. A reset command (TC_3) exists.",
    risk_detScore: '5',
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Implement a watchdog timer that must be periodically reset by the firmware; if the firmware hangs, the watchdog will trigger a hardware reset of the microcontroller.',
    opt_detection:
      'Perform fault injection testing (e.g., via a debugger or targeted radiation exposure) to verify that the watchdog timer and fault recovery logic correctly reset and restore the system from an SEU-induced hang.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_dfmeaAp: '',
    opt_filter: '',
    opt_remarks: 'D2.5, EnvR_001, page 28, D2.5, Figure 4-2, page 34'
  }
]
