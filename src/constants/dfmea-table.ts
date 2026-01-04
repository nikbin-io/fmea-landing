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
  white: 'bg-[#ffffff]',
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
      {
        title: 'Filter Code (Optional)',
        width: 'w-16',
        color: DFMEA_HEAD_COLORS.white
      }
    ]
  },
  {
    id: 'optimization',
    groupTitle: 'OPTIMIZATION (STEP 6)',
    color: DFMEA_HEAD_COLORS.greenOpt,
    columns: [
      { title: 'DFMEA Preventive Action', width: 'w-48' },
      { title: 'DFMEA Detection Action', width: 'w-48' },
      {
        title: "Responsible Person's Name",
        width: 'w-24',
        color: DFMEA_HEAD_COLORS.white
      },
      {
        title: 'Target Completion Date',
        width: 'w-24',
        color: DFMEA_HEAD_COLORS.white
      },
      { title: 'Status', width: 'w-24', color: DFMEA_HEAD_COLORS.white },
      {
        title: 'Action Taken with Pointer to Evidence',
        width: 'w-48',
        color: DFMEA_HEAD_COLORS.white
      },
      {
        title: 'Completion Date',
        width: 'w-24',
        color: DFMEA_HEAD_COLORS.white
      },
      { title: 'Severity (S)', width: 'w-10' },
      { title: 'Occurrence (O)', width: 'w-10' },
      { title: 'Detection (D)', width: 'w-10' },
      { title: 'DFMEA AP', width: 'w-10', color: DFMEA_HEAD_COLORS.white },
      {
        title: 'Filter Code (Optional)',
        width: 'w-10',
        color: DFMEA_HEAD_COLORS.white
      },
      { title: 'Remarks', width: 'w-48', color: DFMEA_HEAD_COLORS.white }
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
    fail_severity: 10,
    fail_mode: 'Fails to transfer mechanical load',
    fail_cause:
      'Brittle fracture of a steel ball due to an undetected material defect (e.g., inclusion) combined with shock loading during a mating event.',
    risk_prevention:
      'The mass budget specifies the material for the balls (Table 7-1 implies a standard material). Design Requirement DesR_005 mandates a robust design.',
    risk_occurrence: 3,
    risk_detection:
      'The mechanical interface is required to withstand operational loads, verified by testing (FuncR_008).',
    risk_detScore: 7,
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
    structure_nextHigher: 'Spacecraft Module (SM3-BAT)',
    structure_focus: 'Battery Payload',
    structure_nextLower: 'Battery Controller',
    func_nextHigher: 'Enable storage and delivery of electrical power.',
    func_focus:
      'Manage the balance, charge, and discharge of the internal Lithium-ion battery pack.',
    func_nextLower:
      'Control the charging\/discharging circuitry (DC\/DC converters) and monitor cell voltages.',
    fail_effect:
      'Controller fails to terminate charge | A battery cell is overcharged | The cell undergoes thermal runaway, leading to fire or explosion | Catastrophic destruction of the module and potential damage to the entire spacecraft.',
    fail_severity: 10,
    fail_mode: 'Causes thermal runaway',
    fail_cause:
      'A firmware hang or component failure in the battery controller prevents it from stopping the charging process when the battery reaches full capacity.',
    risk_prevention:
      "The battery controller manages the charging\/discharging circuitry. It's based on the OG5 design. (D2.4, Section 6.4.4)",
    risk_occurrence: 4,
    risk_detection:
      'The battery controller telemetry includes voltage, current, and temperature, which would show anomalous readings before a catastrophic failure.',
    risk_detScore: 4,
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
      'Cam follower fractures | Follower is no longer constrained by the cam groove | Locking ring and connector plate motion becomes uncontrolled or jammed | Actuation fails | Inability to connect\/disconnect module.',
    fail_severity: 9,
    fail_mode: 'Fails to constrain motion (fracture)',
    fail_cause:
      'Fatigue fracture of the cam follower due to high cycle stress accumulated over the mission lifetime (target 100-1000 cycles).',
    risk_prevention:
      'Design requirement DesR_015 specifies that peak hertzian contact stress shall be below 93% of yield. Minimum design safety factors are required per DesR_014.',
    risk_occurrence: 4,
    risk_detection:
      'Verification for safety factors (DesR_014) is by Analysis and Test. Life testing is implied by reusability requirement OpR_002.',
    risk_detScore: 5,
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
    fail_severity: 9,
    fail_mode: 'Firmware enters fault state or hangs',
    fail_cause:
      'Single Event Upset (SEU) caused by a charged particle strike on an SRAM cell in the space radiation environment.',
    risk_prevention:
      "The design must withstand 'space environment conditions' (EnvR_001). However, the document does not specify radiation hardening requirements or mitigation strategies.",
    risk_occurrence: 7,
    risk_detection:
      "The state machine includes a 'Fault' state (Figure 4-2) to detect anomalies. A reset command (TC_3) exists.",
    risk_detScore: 5,
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
  },
  {
    id: 'FC_010',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Structure',
    structure_focus: 'Form-Fit Guidance Geometry',
    structure_nextLower: 'Tooth-like Geometries on Circumference',
    func_nextHigher:
      'Provide mechanical alignment, connection, and load transfer between two HOTDOCKs, withstanding 400N axial\/radial forces.',
    func_focus:
      'Enable self-guidance and positioning during final approach, compensating for misalignments and supporting diagonal engagement.',
    func_nextLower:
      'Provide guiding surfaces machined from high-strain aluminum alloy to align and bear mechanical loads upon mating.',
    fail_effect:
      'Surface of a guidance tooth is severely galled or deformed | Increased friction and potential for jamming during mating\/de-mating | Failure to achieve a successful mate, or inability to de-mate | Module is stuck or cannot be attached.',
    fail_severity: 9,
    fail_mode: 'Fails to guide mating (jams)',
    fail_cause:
      'Galling (adhesive wear) between aluminum surfaces under high contact pressure in vacuum, particularly during a misaligned engagement.',
    risk_prevention:
      'The body is machined from high-strain aluminum alloy with a surface coating (D2.5, pg 37). DesR_012 requires lubrication on sliding surfaces. DesR_009 allows for dissimilar materials.',
    risk_occurrence: 4,
    risk_detection:
      'Mating\/de-mating force is minimized and subject to testing (FuncR_009). The process is tested for diagonal engagement (DesR_007).',
    risk_detScore: 5,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Specify and apply a hard, low-friction surface coating (e.g., hard anodize with PTFE impregnation) to all form-fit guidance surfaces to prevent galling.',
    opt_detection:
      'Perform abuse testing by forcing mating at the maximum specified misalignment limits for multiple cycles, then inspect surfaces for any signs of galling or excessive wear.',
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
    opt_remarks: 'D2.5, DesR_012, page 20, D2.5, FuncR_009, page 12'
  },
  {
    id: 'FC_026',
    history: '',
    structure_nextHigher: 'HOTDOCK Structure',
    structure_focus: 'Housing',
    structure_nextLower: 'Surface Coating',
    func_nextHigher:
      'Provide the main structure and enclosure for all internal components.',
    func_focus:
      'Maintain dimensional stability and provide a protective enclosure.',
    func_nextLower:
      'Provide thermal control, corrosion resistance, and specific electrical properties to the aluminum structure.',
    fail_effect:
      'Coating flakes or delaminates | Flakes become conductive debris | Debris causes a short circuit on the controller PCB or connector plate | Loss of controller or entire interface.',
    fail_severity: 9,
    fail_mode: 'Generates Foreign Object Debris (FOD)',
    fail_cause:
      'Poor surface preparation of the aluminum alloy before coating application leads to a weak bond and flaking due to thermal cycling stress.',
    risk_prevention:
      'The body is specified to have a surface coating (D2.5, pg 37). Material selection and processing must meet space standards (implied).',
    risk_occurrence: 4,
    risk_detection:
      'Visual inspection post-manufacturing. The document does not specify thermal cycling tests for the housing.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Specify a detailed surface preparation and coating application process specification (e.g., based on NASA or ESA standards) and require supplier certification.',
    opt_detection:
      'Perform thermal vacuum cycling on a coated structural coupon and perform tape-pull tests to verify coating adhesion before and after cycling.',
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
    opt_remarks:
      'D2.5, Section 5.1.2, page 37, No specific test identified in documents'
  },
  {
    id: 'FC_035',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Locking Mechanism',
    structure_focus: 'Unlockable Secondary Mechanism',
    structure_nextLower: 'Secondary Actuation Feature',
    func_nextHigher:
      'Allow two attached interfaces to unlock by a secondary mechanism.',
    func_focus: 'The standard interface shall be unlockable (FuncR_011).',
    func_nextLower:
      'Provide a feature, different from the standard actuation approach, to release the locking mechanism.',
    fail_effect:
      'Secondary unlock mechanism fails to operate | The interfaces cannot be separated if the primary motor has failed | The module is permanently stuck | Loss of servicer asset, inability to complete mission.',
    fail_severity: 9,
    fail_mode: 'Fails to unlock',
    fail_cause:
      'The secondary mechanism, being rarely used, seizes due to vacuum welding or contamination over a long mission duration.',
    risk_prevention:
      'FuncR_011 requires the feature. The design is detailed in document RD4 (not provided).',
    risk_occurrence: 6,
    risk_detection:
      'Verification is by Testing. This would be a specific contingency test.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Design the secondary mechanism with robust, space-proven principles, using dissimilar metals and appropriate coatings to prevent seizure.',
    opt_detection:
      'Perform a ground test of the secondary unlock mechanism after an extended period in thermal vacuum to verify its reliability.',
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
    opt_remarks: 'D2.5, FuncR_011, page 12, No specific test plan cited'
  },
  {
    id: 'FC_042',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Firmware',
    structure_nextLower: 'Bootloader',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus: 'Execute firmware to process commands and control hardware.',
    func_nextLower:
      'Initialize the microcontroller hardware upon power-up and load the main application firmware.',
    fail_effect:
      'Bootloader code is corrupted | The microcontroller fails to boot and load the main application | The controller is unresponsive | Loss of all HOTDOCK functionality.',
    fail_severity: 9,
    fail_mode: 'Fails to boot',
    fail_cause:
      'Corruption of the bootloader section of the flash memory due to a Single Event Effect (SEE) or an error during a firmware update attempt.',
    risk_prevention:
      'None identified in documents. Robust bootloader design is standard practice but not explicitly required.',
    risk_occurrence: 4,
    risk_detection:
      'The device would fail to respond to any command upon power-up, which would be detected during system initialization.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Implement a redundant bootloader design with a checksum verification. If the primary bootloader is corrupt, the system can attempt to boot from a protected, secondary copy.',
    opt_detection:
      "Perform radiation testing on the microcontroller's flash memory to characterize its susceptibility to SEEs and validate the robustness of the bootloader design.",
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
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_059',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'POGO Pin Connector',
    structure_nextLower: 'Dielectric Separation',
    func_nextHigher: 'Provide a separable interface for power and data.',
    func_focus: 'Transfer power with voltage >100V (D2.5, pg 41).',
    func_nextLower:
      'Maintain sufficient distance and insulation between conductors to prevent arcing in vacuum.',
    fail_effect:
      'Arcing occurs between two high-voltage pins | A plasma channel shorts the two conductors | Catastrophic failure of power supplies, potential damage to the entire connector.',
    fail_severity: 9,
    fail_mode: 'Short circuit between pins',
    fail_cause:
      "Paschen's Law breakdown: arcing occurs between two conductors in a partial vacuum (e.g., during ascent or due to outgassing) at a voltage lower than would be required in full vacuum or at sea level.",
    risk_prevention:
      "The 'Dielectric separation distance between the POGO pins allows to transfer power with voltage >100V'.",
    risk_occurrence: 4,
    risk_detection:
      'Analysis is the primary method. No specific high-voltage test is mentioned.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Perform a detailed analysis of pin spacing according to NASA\/ESA standards for high-voltage design in space, considering creepage and clearance distances. Potentially add a conformal coating to the PCB.',
    opt_detection:
      'Perform a high-voltage standoff test (Hipot test) between all adjacent pins in a vacuum chamber, stepping through various pressure levels to check for Paschen curve susceptibility.',
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
    opt_remarks: 'D2.5, Section 5.2.1, page 41, No specific test plan cited'
  },
  {
    id: 'FC_061',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Motor Drive Circuitry',
    structure_nextLower: 'Gate Driver IC',
    func_nextHigher: 'Control the brushless DC motor.',
    func_focus:
      'Drive the 3-phase H-bridge by switching current to the windings.',
    func_nextLower:
      'Rapidly charge and discharge the gates of the power MOSFETs to ensure efficient switching.',
    fail_effect:
      'Gate driver fails to turn a MOSFET off | Shoot-through condition occurs where high-side and low-side MOSFETs are on simultaneously | A dead short across the power bus is created | Catastrophic failure of the H-bridge, potential damage to power supply.',
    fail_severity: 9,
    fail_mode: 'Creates short circuit on power bus',
    fail_cause:
      'A Single Event Latch-up (SEL) in the gate driver IC causes it to lose control and turn on both MOSFETs in a half-bridge.',
    risk_prevention:
      'The design must withstand the space environment (EnvR_001). Overcurrent protection (FuncR_015) is implemented.',
    risk_occurrence: 5,
    risk_detection:
      'Overcurrent would be detected by current monitoring. Verification of FuncR_015 is by Testing.',
    risk_detScore: 4,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Select a radiation-hardened gate driver IC. Implement latch-up protection circuitry (a current-limiting switch that is cycled) for all non-hardened ICs.',
    opt_detection:
      'Perform heavy ion testing (latch-up screening) on the selected gate driver IC to verify its robustness to SEL.',
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
    opt_remarks: 'D2.5, EnvR_001, page 28, D2.5, FuncR_015, page 13'
  },
  {
    id: 'FC_069',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Structure',
    structure_focus: 'Housing',
    structure_nextLower: 'Fasteners (internal)',
    func_nextHigher: 'Provide the main structure and enclosure.',
    func_focus: 'Hold internal components (PCB, motor) in place.',
    func_nextLower:
      'Provide clamping force to secure components against vibration and shock.',
    fail_effect:
      'A fastener backs out due to vibration | The component it was holding (e.g., controller PCB) becomes loose | The loose component can be damaged or cause damage to other parts. It may create a short circuit.',
    fail_severity: 9,
    fail_mode: 'Fails to secure internal component',
    fail_cause:
      'Loss of preload on an internal fastener due to vibration because no locking feature was used.',
    risk_prevention:
      'The interface must be compliant with launch loads (FuncR_007).',
    risk_occurrence: 4,
    risk_detection:
      'Post-vibration inspection could potentially find loose hardware, but it might be internal and not visible.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'All internal fasteners must use a positive locking feature, such as lock-wire, thread-locking inserts (e.g., Helicoil), or a space-qualified thread-locking compound.',
    opt_detection:
      'During assembly, require an independent quality inspection step to verify that all fasteners have been correctly torqued and that locking features have been properly applied.',
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
    opt_remarks:
      'D2.5, FuncR_007, page 11, No specific workmanship standard cited'
  },
  {
    id: 'FC_077',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Locking Mechanism',
    structure_focus: 'Unlockable Secondary Mechanism',
    structure_nextLower: 'Interface for External Tool',
    func_nextHigher: 'Allow two attached interfaces to unlock.',
    func_focus: 'The interface shall be unlockable by a secondary mechanism.',
    func_nextLower:
      "Provide a feature that can be actuated by an external tool (e.g., another robot's gripper, an astronaut's tool).",
    fail_effect:
      'The interface feature is inaccessible or incompatible with the available tool | The contingency unlock procedure cannot be performed | The modules remain permanently stuck.',
    fail_severity: 9,
    fail_mode: 'Fails to allow external actuation',
    fail_cause:
      'The design of the secondary unlock feature requires a specific custom tool that is not available on the servicing spacecraft.',
    risk_prevention:
      'The requirement for a secondary mechanism is defined (FuncR_011).',
    risk_occurrence: 5,
    risk_detection:
      'The design would be reviewed for compatibility with standard robotic or EVA tools.',
    risk_detScore: 5,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Design the secondary unlock mechanism interface to be compatible with a widely available standard, such as a simple hex drive or a standard robotic micro-gripper interface.',
    opt_detection:
      'Perform a fit-check and functional test of the secondary unlock mechanism using a mock-up of the intended tool as part of the ground validation program.',
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
    opt_remarks: 'D2.5, FuncR_011, page 12, No specific tool standard cited'
  },
  {
    id: 'FC_088',
    history: '',
    structure_nextHigher: 'HOTDOCK Structure',
    structure_focus: 'Main Housing and Cover',
    structure_nextLower: 'Venting Path',
    func_nextHigher: 'Provide the main structure and enclosure.',
    func_focus: 'Maintain structural integrity during ascent.',
    func_nextLower:
      'Allow trapped air to escape during ascent to prevent pressure-induced structural loads.',
    fail_effect:
      'A venting path is blocked (e.g., by sealant) | A large internal pressure differential develops during launch | The housing or cover deforms or fractures | Catastrophic structural failure of the unit.',
    fail_severity: 9,
    fail_mode: 'Structural failure during launch',
    fail_cause:
      'An assembly error, such as misapplication of staking compound, blocks a designed vent path.',
    risk_prevention:
      'The interface must be compliant with launch loads (FuncR_007). Standard space design practices include venting analysis.',
    risk_occurrence: 3,
    risk_detection:
      'This would only be detected by a failure during launch, or by a specific vacuum ascent test.',
    risk_detScore: 9,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      "Perform a venting analysis to identify all trapped volumes and specify the required vent paths and sizes. Clearly mark all vent paths on the engineering drawings as 'DO NOT OBSTRUCT'.",
    opt_detection:
      'Add a specific inspection step to the pre-launch closeout procedure to verify that all designed vent paths are clear and unobstructed.',
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
    opt_remarks:
      'D2.5, FuncR_007, page 11, No specific venting analysis document cited'
  },
  {
    id: 'FC_090',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Firmware',
    structure_nextLower: 'Telecommand (TC) Parser',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus: 'Send and receive TM\/TC from the host OBC (FuncR_030).',
    func_nextLower:
      'Parse incoming command packets to determine the requested action and parameters.',
    fail_effect:
      "A bug in the parser misinterprets a command | The controller executes the wrong action (e.g., 'unlock' instead of 'report status') | Uncommanded, potentially hazardous operation | Loss of control, damage to hardware.",
    fail_severity: 9,
    fail_mode: 'Executes incorrect command',
    fail_cause:
      'A software bug in the TC parser logic causes it to misinterpret the arguments of a valid command.',
    risk_prevention:
      'The TC list is defined (Table 4-1). The interface must be tested.',
    risk_occurrence: 4,
    risk_detection: 'Verification is by Testing (FuncR_030).',
    risk_detScore: 5,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Use a formal method or automated tool to generate the TC parsing code directly from the ICD to eliminate manual coding errors.',
    opt_detection:
      'Develop a comprehensive test suite that sends every possible command with both valid and invalid parameters and verifies that the system responds correctly and safely in all cases.',
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
    opt_remarks:
      'D2.5, Table 4-1, page 34, No interface control document (ICD) cited'
  },
  {
    id: 'FC_133',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Reset Circuitry',
    structure_nextLower: 'Power-On-Reset (POR) circuit',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus:
      'Ensure the microcontroller starts in a known state on power-up.',
    func_nextLower:
      'Hold the microcontroller in a reset state until all voltage rails are stable.',
    fail_effect:
      'POR circuit releases reset prematurely | Microcontroller begins executing code with unstable power | Brown-out condition corrupts memory or causes unpredictable code execution | Controller fails to boot or hangs.',
    fail_severity: 9,
    fail_mode: 'Fails to boot correctly',
    fail_cause:
      'The threshold of the internal Power-On-Reset circuit is too low for a slow-ramping power supply.',
    risk_prevention:
      'None identified in documents. Use of an internal POR is standard practice.',
    risk_occurrence: 5,
    risk_detection:
      'Failure may be intermittent and difficult to reproduce, only occurring with certain power supplies or temperatures.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Implement an external, high-precision reset supervisor IC with an adjustable delay to ensure a robust and reliable power-on reset.',
    opt_detection:
      'Perform power-up testing with various voltage ramp rates at temperature extremes to verify reset reliability.',
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
    opt_remarks: 'no evidence, no evidence'
  },
  {
    id: 'FC_134',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Firmware',
    structure_nextLower: 'Stack Memory',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus: 'Execute firmware functions and handle interrupts.',
    func_nextLower:
      'Allocate memory for local variables and function call return addresses.',
    fail_effect:
      'Stack overflows | Critical data (return addresses, other variables) is overwritten | Firmware crashes or enters an unpredictable state | Loss of control over HOTDOCK.',
    fail_severity: 9,
    fail_mode: 'Firmware crashes or hangs',
    fail_cause:
      'A deep chain of nested function calls, combined with a high-frequency interrupt service routine, consumes all available stack memory.',
    risk_prevention:
      'None identified in documents. Stack size is typically set by the linker script.',
    risk_occurrence: 6,
    risk_detection:
      'None identified in documents. This is a difficult failure to detect as it depends on a specific sequence of events.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Use static analysis tools to calculate the worst-case stack depth. Implement stack canaries and memory protection unit (MPU) regions to detect stack overflows at runtime.',
    opt_detection:
      'Perform stress testing that exercises the deepest possible function call paths and highest interrupt loads to measure the stack high-water mark and verify sufficient margin.',
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
    opt_remarks: 'no evidence, no evidence'
  },
  {
    id: 'FC_136',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'POGO Pin Connector',
    structure_nextLower: 'Pin Plunger',
    func_nextHigher: 'Provide a separable interface for power and data.',
    func_focus:
      'Establish and maintain a compliant electrical connection by pressing a pin against a pad.',
    func_nextLower:
      'Provide a conductive path from the internal spring to the contact tip.',
    fail_effect:
      "A bent pin plunger makes contact with an adjacent pin's barrel | A short-circuit occurs between two signal or power lines | Power bus is shorted, or data signals are corrupted | Loss of power or data link, potential for cascading damage.",
    fail_severity: 9,
    fail_mode: 'Short circuit between pins',
    fail_cause:
      'A POGO pin plunger is bent during a severely misaligned mating attempt, causing it to short against a neighboring pin.',
    risk_prevention:
      "The design is 'particularly tolerant to misalignment' (D2.5, pg 40) and has form-fit guidance.",
    risk_occurrence: 5,
    risk_detection:
      'A short circuit on the power bus would be detected by overcurrent protection (FuncR_015). A data line short would be harder to diagnose.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Increase the pin-to-pin spacing in the layout. Implement an insulator shroud around each POGO pin to physically prevent bent plungers from contacting adjacent pins.',
    opt_detection:
      "Perform 'abuse' testing by attempting to mate the interface at the extreme limits of misalignment and inspect for any pin damage.",
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
    opt_remarks: 'D2.5, Section 5.2, page 40, D2.5, FuncR_015, page 13'
  },
  {
    id: 'FC_146',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Firmware',
    structure_nextLower: 'Interrupt Service Routine (ISR)',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus: 'Respond to hardware events in real-time.',
    func_nextLower:
      'Handle asynchronous hardware interrupts (e.g., from a timer or CAN controller) with low latency.',
    fail_effect:
      'A bug in an ISR fails to clear the interrupt flag | The processor immediately re-enters the same ISR upon exit | The system is stuck in an interrupt loop | Main application code never runs, controller hangs.',
    fail_severity: 9,
    fail_mode: 'Firmware hangs',
    fail_cause:
      'A software bug in an ISR (Interrupt Service Routine) prevents it from correctly clearing the hardware interrupt source, leading to an infinite interrupt loop.',
    risk_prevention:
      'None identified in documents. This is a common embedded software bug class.',
    risk_occurrence: 5,
    risk_detection:
      'This failure would be detected during hardware\/software integration testing when the specific interrupt is enabled.',
    risk_detScore: 5,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Enforce a strict code review checklist for all ISRs, which includes verification that the interrupt source is cleared correctly. Keep ISRs as short as possible.',
    opt_detection:
      'During unit testing, develop test harnesses that trigger each interrupt and verify that the system remains responsive and that the interrupt does not re-trigger unexpectedly.',
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
    opt_remarks: 'no evidence, no evidence'
  },
  {
    id: 'FC_150',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Firmware',
    structure_nextLower: 'Bootloader',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus: 'Initialize the system on power-up.',
    func_nextLower:
      'Perform a checksum of the main application firmware before booting it.',
    fail_effect:
      'Bootloader has a bug and fails to detect a corrupt application | The bootloader jumps to a corrupt application image | The controller crashes or behaves erratically.',
    fail_severity: 9,
    fail_mode: 'Fails to boot correctly',
    fail_cause:
      "A software bug in the bootloader's checksum validation routine causes it to incorrectly validate a corrupt firmware image.",
    risk_prevention:
      'None identified in documents. A validating bootloader is standard practice for high-reliability systems.',
    risk_occurrence: 4,
    risk_detection:
      'This would be tested by intentionally loading a corrupt application image and verifying the bootloader refuses to boot it.',
    risk_detScore: 3,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'The bootloader must be subject to the same rigorous code review and testing process as the main application. The checksum algorithm (e.g., CRC-32) must be a robust, industry-standard implementation.',
    opt_detection:
      'Develop a specific test case that flashes a known-bad application image (e.g., with a single bit flipped) and verifies that the bootloader enters its recovery mode instead of attempting to boot.',
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
    opt_remarks: 'no evidence, no evidence'
  },
  {
    id: 'FC_155',
    history: '',
    structure_nextHigher: 'Servicer Spacecraft (SVC)',
    structure_focus: 'On-Board Computer (OBC-S) Software',
    structure_nextLower: 'Autonomy Agent (ERGO)',
    func_nextHigher:
      'Manage all operations of the servicer spacecraft during reconfiguration.',
    func_focus:
      'Execute the operation plan by triggering successive actions on components like the WM and HOTDOCK.',
    func_nextLower:
      "Send a high-level command (e.g., 'Update SI State') to the R-ICU\/WM Controller via the Component Management layer.",
    fail_effect:
      'A logic error in the Agent sends an incorrect command | HOTDOCK is commanded to lock when not aligned | High mechanical loads on the interface | Damage to form-fit geometry or POGO pins | Mission failure.',
    fail_severity: 9,
    fail_mode: 'Sends incorrect command sequence',
    fail_cause:
      "A bug in the planner or a fault in the state estimation causes the Autonomy Agent to send a 'lock' command before the 'approach' routine has successfully completed.",
    risk_prevention:
      'The Autonomy Agent manages the execution of the plan by sending commands to the Functional Layer (SM\/WM Managers). (D2.4, Figure 6-6)',
    risk_occurrence: 5,
    risk_detection:
      'The plan is validated by simulation on the ground. Proximity sensors (OpR_008) provide a hardware interlock against this failure.',
    risk_detScore: 4,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'The HOTDOCK controller firmware should include a pre-condition check, verifying proximity sensor feedback confirms alignment before executing a lock command.',
    opt_detection:
      'Develop a specific hardware-in-the-loop test case where the Autonomy Agent is commanded to lock a misaligned interface, and verify that the local controller rejects the command.',
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
    opt_remarks: 'MOSAR D2.4, Figure 6-6, page 70, D2.5, OpR_008, page 26'
  },
  {
    id: 'FC_158',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Firmware',
    structure_nextLower: 'Real-Time Operating System (RTOS)',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus:
      'Execute firmware to process commands, run motor control, and handle telemetry.',
    func_nextLower:
      'Manage concurrent tasks and protect shared resources (e.g., hardware peripherals).',
    fail_effect:
      'A deadlock condition occurs | Two tasks are each waiting for a resource held by the other | Both tasks halt, and the system becomes unresponsive | Controller hangs and must be reset by watchdog or power cycle | Loss of control.',
    fail_severity: 9,
    fail_mode: 'Firmware hangs',
    fail_cause:
      'A software bug in resource locking logic where the CAN command task and the motor control task request mutexes in a different order, leading to a deadlock.',
    risk_prevention:
      'None identified in documents. This is a classic concurrency bug in multi-threaded software.',
    risk_occurrence: 5,
    risk_detection:
      'None identified in documents. Deadlocks are timing-dependent and notoriously difficult to find in standard functional tests.',
    risk_detScore: 9,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Implement a strict resource allocation hierarchy (lock ordering) to prevent circular waits. Use a watchdog timer as a fail-safe to recover from hangs.',
    opt_detection:
      'Perform static code analysis to detect potential deadlock conditions. Implement long-duration stress testing with randomized command timing to try and trigger the race condition.',
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
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_161',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Controller PCB',
    structure_nextLower: 'Solder Finish (on traces\/pads)',
    func_nextHigher: 'Provide interconnection for all electronic components.',
    func_focus:
      'Route electrical signals and power between components reliably.',
    func_nextLower:
      'Provide a conductive path with a protective surface finish.',
    fail_effect:
      'A tin whisker grows from a solder-finished trace | The whisker grows to contact an adjacent trace | A low-resistance short circuit is created | Unpredictable circuit behavior or catastrophic failure of a component.',
    fail_severity: 9,
    fail_mode: 'Creates short circuit on PCB',
    fail_cause:
      "A microscopic filament of tin (a 'whisker') grows from a pure tin or high-tin-content solder finish over time, causing a short circuit.",
    risk_prevention:
      'None identified in documents. Mitigation of tin whiskers is a standard practice in high-reliability electronics design but not explicitly mentioned.',
    risk_occurrence: 4,
    risk_detection:
      'None identified in documents. Whisker growth is unpredictable and a failure may not occur for years.',
    risk_detScore: 10,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Prohibit the use of pure tin plating. Mandate the use of leaded solder or other qualified tin whisker mitigation strategies (e.g., nickel underplating, conformal coating) per space agency standards.',
    opt_detection:
      'Perform long-term, powered life testing in a humid environment (for ground qualification) to accelerate whisker growth, followed by detailed microscopic inspection.',
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
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_165',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Clock Generation Circuitry',
    structure_nextLower: 'Crystal Oscillator',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus:
      'Execute firmware at a defined speed to perform real-time tasks.',
    func_nextLower:
      'Provide a stable high-frequency clock signal to the microcontroller.',
    fail_effect:
      'Crystal oscillator fails to start or stops oscillating | Microcontroller loses its clock signal | The entire controller hangs | Loss of all HOTDOCK functionality.',
    fail_severity: 9,
    fail_mode: 'Firmware hangs',
    fail_cause:
      'Fracture of the quartz crystal element or its mounting due to high-G mechanical shock during launch.',
    risk_prevention:
      'None identified in documents. An external crystal is standard practice for providing a stable clock for peripherals like CAN.',
    risk_occurrence: 3,
    risk_detection:
      'The controller would be completely unresponsive, which would be detected during post-shock functional testing.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Select a space-qualified, high-shock-rated crystal oscillator. The microcontroller should be configured to use its internal RC oscillator as a backup clock source if the external crystal fails.',
    opt_detection:
      'Perform mechanical shock testing on the controller board and verify full functionality, including checking the clock frequency for stability.',
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
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_170',
    history: '',
    structure_nextHigher: 'Client Satellite (CLT)',
    structure_focus: 'SM1-DMS On-Board Computer (OBC-C)',
    structure_nextLower: 'Reconfiguration Management Software',
    func_nextHigher: 'Manage the client satellite during nominal operations.',
    func_focus:
      'Manage the modes of the software according to which SMs are available, and support data\/power routing.',
    func_nextLower:
      'Execute logic to isolate a faulty SM by commanding upstream cPDUs to cut power.',
    fail_effect:
      'Software fails to detect and isolate a faulty SM | A fault (e.g., a short circuit) on one SM propagates through the power bus | The entire spacecraft bus may brown out or fail | Loss of the client satellite.',
    fail_severity: 9,
    fail_mode: 'Fails to isolate fault',
    fail_cause:
      'A software bug in the fault detection and isolation recovery (FDIR) logic prevents it from correctly identifying the location of a fault and taking the proper recovery action.',
    risk_prevention:
      'The OBC-C includes Data and Power Management for FDIR. The network can be reconfigured to handle faults. (D2.4, Section 3.2.2.1 & 4.1.2.2)',
    risk_occurrence: 5,
    risk_detection:
      'The failure of the FDIR would be demonstrated by the loss of the system after a fault is injected.',
    risk_detScore: 6,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Implement a robust FDIR architecture with clear separation of detection, isolation, and recovery functions. Use a watchdog system to ensure the FDIR task itself is running.',
    opt_detection:
      'Perform extensive fault injection testing at the system level, creating faults on various SMs and verifying that the OBC-C correctly isolates them.',
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
    opt_remarks: 'MOSAR D2.4, page 19, MOSAR D2.4, page 25'
  },
  {
    id: 'FC_174',
    history: '',
    structure_nextHigher: 'Walking Manipulator (WM)',
    structure_focus: 'WM On-Board Computer (OBC)',
    structure_nextLower: 'USB-to-SpaceWire Bridge',
    func_nextHigher: 'Interface with the main spacecraft OBC-S.',
    func_focus:
      'Manage control of the arm, end-effectors, and cPDU, and interface with the SpW bus.',
    func_nextLower:
      "Convert data between the WM OBC's native bus (e.g., USB) and the system SpaceWire network.",
    fail_effect:
      'The bridge hardware hangs or fails | All communication between the OBC-S and the WM is lost | The WM cannot be commanded or monitored | Loss of all robotic capability.',
    fail_severity: 9,
    fail_mode: 'Fails to communicate with system OBC',
    fail_cause:
      'A component failure or firmware crash within the external USB\/SpW brick.',
    risk_prevention:
      'The WM OBC interfaces the SpW bus through a USB\/SpW brick. (D2.4, Section 6.5.1 and Figure 6-18)',
    risk_occurrence: 5,
    risk_detection:
      'The OBC-S would immediately detect the loss of communication (e.g., RMAP timeout) and declare the WM as failed.',
    risk_detScore: 4,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Select a high-reliability, space-qualified interface converter. Implement a hardware watchdog in the converter. The system should have a plan for how to safe the spacecraft if the WM is lost.',
    opt_detection:
      'Perform extensive environmental and life testing on the USB\/SpW bridge to ensure its reliability.',
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
    opt_remarks: 'MOSAR D2.4, page 86, MOSAR D2.4, page 87'
  },
  {
    id: 'FC_175',
    history: '',
    structure_nextHigher: 'Walking Manipulator (WM)',
    structure_focus: 'Internal Harnessing',
    structure_nextLower: 'EtherCAT Bus',
    func_nextHigher: 'Provide data communication between internal components.',
    func_focus: 'Interconnect all seven joint controllers with the WM OBC.',
    func_nextLower:
      'Provide a real-time, deterministic, high-speed communication link for joint commands and feedback.',
    fail_effect:
      'A break occurs in the EtherCAT cable or a connector fails | The communication ring is broken | All joint controllers downstream of the break lose communication | Multiple joints become uncontrollable | Catastrophic loss of manipulator control.',
    fail_severity: 9,
    fail_mode: 'Loses control of multiple joints',
    fail_cause:
      'Fatigue failure of a wire in a harness that flexes repeatedly as the manipulator moves.',
    risk_prevention:
      'An EtherCAT bus connects the joint controllers to the WM OBC. (D2.4, Section 6.5.1 and Figure 6-18)',
    risk_occurrence: 4,
    risk_detection:
      'The WM OBC would detect the loss of communication with multiple EtherCAT slaves and trigger an emergency stop.',
    risk_detScore: 4,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Use high-flex-life cabling and strain relief for all harnesses that cross moving joints. Implement a redundant EtherCAT ring topology if supported by the hardware.',
    opt_detection:
      'Perform a life test on the complete WM, cycling all joints through their full range of motion for thousands of cycles, while monitoring the EtherCAT bus for errors.',
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
    opt_remarks: 'MOSAR D2.4, page 86, MOSAR D2.4, page 87'
  },
  {
    id: 'FC_178',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Firmware',
    structure_nextLower: 'Firmware Update Logic',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus: 'Allow for in-flight or on-ground firmware updates.',
    func_nextLower:
      'Receive a new firmware image and write it to flash memory, overwriting the old image.',
    fail_effect:
      "A power loss occurs during the flash writing process | The firmware image in flash is incomplete or corrupted | The bootloader detects the corruption on next boot and cannot load an application | The device is 'bricked' and unresponsive.",
    fail_severity: 9,
    fail_mode: 'Fails to boot after firmware update',
    fail_cause:
      'An unexpected power interruption occurs while the new firmware image is being written to flash memory.',
    risk_prevention:
      'None identified in documents. A robust firmware update process is critical for high-reliability systems.',
    risk_occurrence: 4,
    risk_detection:
      'The failure would be apparent on the next power-up when the device fails to respond.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Implement a dual-bank flash memory architecture. The new firmware is written to a secondary bank, and only after it is fully written and verified is the bootloader configured to boot from the new bank.',
    opt_detection:
      'Perform a test where power is cut at various points during the firmware update process to verify that the system can always recover by booting the last known-good image.',
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
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_182',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Locking Mechanism',
    structure_focus: 'Unlockable Secondary Mechanism',
    structure_nextLower: 'Sliding Components',
    func_nextHigher:
      'Allow two attached interfaces to unlock by a secondary mechanism.',
    func_focus:
      'Provide a contingency method to unlock the interface if the primary actuator fails.',
    func_nextLower:
      'Allow mechanical parts to move when actuated by an external tool.',
    fail_effect:
      'Mechanism seizes | The secondary unlock mechanism cannot be actuated | The interfaces are permanently mated | Loss of the module or servicing asset.',
    fail_severity: 9,
    fail_mode: 'Fails to unlock (secondary mechanism)',
    fail_cause:
      'Cold welding occurs between two clean, metallic sliding surfaces in vacuum after a long period of inactivity.',
    risk_prevention:
      'FuncR_011 requires the interface to be unlockable. DesR_012 requires lubrication for sliding surfaces.',
    risk_occurrence: 5,
    risk_detection:
      'Verification is by Testing. This would likely be a one-time ground test.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Design the secondary mechanism using dissimilar metals for all contact surfaces. Apply a space-rated dry film lubricant (e.g., MoS2) to all sliding surfaces.',
    opt_detection:
      'Perform a functional test of the secondary unlock mechanism after a long-duration thermal vacuum exposure to verify it has not seized.',
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
    opt_remarks: 'D2.5, FuncR_011, page 12, D2.5, DesR_012, page 20'
  },
  {
    id: 'FC_185',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Firmware',
    structure_nextLower: 'CAN Driver',
    func_nextHigher: 'Provide command and telemetry exchange.',
    func_focus: 'Handle TM\/TC exchange with the host system over the CAN bus.',
    func_nextLower:
      'Process incoming CAN messages from a hardware buffer and pass them to the application layer.',
    fail_effect:
      'A buffer overflow occurs in the receive handler | Critical data in memory is overwritten | The firmware crashes or enters an unpredictable state | Loss of communication and control.',
    fail_severity: 9,
    fail_mode: 'Firmware hangs',
    fail_cause:
      "A 'babbling node' on the CAN bus sends a high-rate burst of messages that overwhelms the receive interrupt handler, causing its data buffer to overflow.",
    risk_prevention: 'CAN bus is the main TM\/TC interface. (D2.5, pg 46)',
    risk_occurrence: 4,
    risk_detection:
      'A watchdog timer would eventually reset the hung controller.',
    risk_detScore: 5,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Implement a robust CAN driver architecture using DMA and circular buffers to handle high message rates without data loss or overflow. The system-level bus design should include bus-off recovery.',
    opt_detection:
      'Perform stress testing by connecting a CAN traffic generator that sends messages at the maximum possible bus rate and verifies that the controller remains stable.',
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
    opt_remarks: 'D2.5, Section 6.2, page 46, No evidence'
  },
  {
    id: 'FC_189',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'H-Bridge Motor Driver',
    structure_nextLower: 'Gate Driver IC',
    func_nextHigher: 'Drive the 3-phase brushless motor.',
    func_focus: 'Switch current to the windings based on PWM signals.',
    func_nextLower:
      'Control the switching of the power MOSFETs, including ensuring dead-time between high-side and low-side switching.',
    fail_effect:
      'Dead-time generation fails | High-side and low-side MOSFETs are briefly turned on at the same time (shoot-through) | A large current pulse flows through the half-bridge | Component stress, high EMI, potential for catastrophic H-bridge failure.',
    fail_severity: 9,
    fail_mode: 'Creates short circuit on power bus',
    fail_cause:
      "A fault in the gate driver's internal logic or a timing glitch from the microcontroller causes a loss of dead-time.",
    risk_prevention:
      'The controller design includes a H-bridge and gate driver. (D2.5, pg 46). Overcurrent protection (FuncR_015) provides some mitigation.',
    risk_occurrence: 4,
    risk_detection:
      'A fast-acting overcurrent protection circuit could detect the current spikes. This is a very difficult fault to detect non-destructively.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Select a gate driver with robust, guaranteed dead-time generation. Perform a Worst Case Timing Analysis on the PWM signals from the microcontroller.',
    opt_detection:
      'Use an oscilloscope to carefully measure the dead-time on the MOSFET gates under all operating conditions during design verification.',
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
    opt_remarks: 'D2.5, Section 6.2, page 46, D2.5, FuncR_015, page 13'
  },
  {
    id: 'FC_002',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Brushless DC Motor (MAXON EC 32 flat)',
    structure_nextLower: 'Hall Effect Sensors (Position)',
    func_nextHigher:
      'Rotate locking ring to engage\/disengage mechanical latches within specified time and torque limits.',
    func_focus:
      'Provide rotor position feedback to the controller for correct commutation sequence of the brushless motor.',
    func_nextLower:
      "Detect magnetic field orientation of rotor magnets and output a digital signal representing the rotor's angular sector.",
    fail_effect:
      'Incorrect or no signal from Hall sensor | Controller applies current to wrong windings (commutation error) | Motor stalls, jitters, or runs inefficiently with high current | Inability to rotate locking mechanism | Mission failure.',
    fail_severity: 8,
    fail_mode: 'Provides incorrect or intermittent position signal',
    fail_cause:
      'Signal degradation or failure due to total ionizing dose (TID) radiation effects on the semiconductor sensor in the space environment.',
    risk_prevention:
      "Design requirement EnvR_001 requires withstanding space environment conditions, but the document notes 'No testing in the current activity under space conditions'.",
    risk_occurrence: 6,
    risk_detection:
      'Functional testing of the motor actuation sequence. Telemetry from Hall sensors is listed in Table 4-2.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Select a radiation-hardened or radiation-tolerant Hall effect sensor variant. If not feasible, perform a radiation analysis and add localized shielding to the motor assembly.',
    opt_detection:
      "Perform radiation beam testing on the selected motor's Hall effect sensors to characterize performance degradation versus dose.",
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
    opt_remarks: 'D2.5, EnvR_001, page 28, D2.5, Table 4-2, page 35'
  },
  {
    id: 'FC_005',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'POGO Pin Connector',
    structure_nextLower: 'Spring Element',
    func_nextHigher:
      'Provide a separable interface for power and data transfer between two HOTDOCKs, compliant up to 100Mbps.',
    func_focus:
      'Establish and maintain a compliant electrical connection by pressing a pin against a pad, transferring up to 3A per pin.',
    func_nextLower:
      'Provide a specified contact force over the operational stroke of the pin to ensure low contact resistance.',
    fail_effect:
      'Spring yields or breaks | Pin does not make contact or has insufficient force | Open circuit or high resistance on a power or data line | Loss of power or data to a module, or data corruption | Mission failure.',
    fail_severity: 8,
    fail_mode: 'Fails to provide contact force (Open circuit)',
    fail_cause:
      'Mechanical yielding of the spring element due to over-compression caused by misalignment and tolerance stack-up during mating.',
    risk_prevention:
      "The design is 'particularly tolerant to misalignment' (D2.5, pg 40). Androgynous design with 90-degree symmetry helps mitigate some alignment issues. Form-fit geometry provides final guidance.",
    risk_occurrence: 6,
    risk_detection:
      'System-level mating and de-mating tests are specified (FuncR_009). The connector plate is part of the integrated system.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Perform a detailed worst-case tolerance analysis of the mating interface to ensure POGO pin stroke is never exceeded under maximum specified misalignment.',
    opt_detection:
      'Develop a specific test using instrumented POGO pins or pressure-sensitive film to measure contact force distribution across the connector plate during a misaligned mating test.',
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
    opt_remarks:
      'D2.5, Section 5.2, page 40, D2.5, FuncR_009 Verification, page 12'
  },
  {
    id: 'FC_008',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'H-Bridge Motor Driver',
    structure_nextLower: 'Power MOSFET',
    func_nextHigher:
      'Control all HOTDOCK functionalities, including motor control, sensor processing, and communication.',
    func_focus:
      'Drive the 3-phase brushless motor by switching current to the windings based on PWM signals from the microcontroller.',
    func_nextLower:
      'Act as a high-power switch to control current flow into a motor phase, with low on-state resistance and high off-state impedance.',
    fail_effect:
      'MOSFET fails short (drain-to-source) | A motor winding is permanently energized, creating a braking torque and drawing high current | Motor stalls and cannot be driven, high current may damage power supply or other driver components | Actuation mechanism is inoperable.',
    fail_severity: 8,
    fail_mode: 'Fails to switch motor phase current',
    fail_cause:
      'Single Event Burnout (SEB) or Single Event Gate Rupture (SEGR) in a power MOSFET due to a heavy ion strike while in a high-voltage blocking state.',
    risk_prevention:
      'The controller includes overcurrent protection (FuncR_015), which might mitigate the effect of a short. The components must withstand the space environment (EnvR_001).',
    risk_occurrence: 6,
    risk_detection:
      'Motor current is monitored (FuncR_029), which could detect the overcurrent condition. A fault state exists in the controller logic.',
    risk_detScore: 4,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Select radiation-hardened power MOSFETs with a known resistance to SEB\/SEGR up to a specified LET threshold. Implement a fast-acting, latching overcurrent protection circuit.',
    opt_detection:
      'Perform heavy ion testing on the selected MOSFETs to verify their single-event effect performance and ensure they meet mission reliability requirements.',
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
    opt_remarks: 'D2.5, FuncR_015, page 13, D2.5, FuncR_029, page 17'
  },
  {
    id: 'FC_009',
    history: '',
    structure_nextHigher: 'HOTDOCK Data Interface',
    structure_focus: 'LVDS Crosspoint Switch',
    structure_nextLower: 'Internal Routing Matrix',
    func_nextHigher:
      'Provide a re-routable data interface for SpaceWire communication, supporting the 90-degree androgynous design.',
    func_focus:
      'Dynamically route LVDS signal pairs based on commands from the controller to maintain correct data links regardless of mated orientation.',
    func_nextLower:
      'Connect a specific input differential pair to a specific output differential pair with controlled impedance to maintain signal integrity.',
    fail_effect:
      'Routing matrix fails to establish a connection | Data link is broken | No SpaceWire communication between mated interfaces | Inability to command or receive data from downstream modules | Mission failure.',
    fail_severity: 8,
    fail_mode: 'Fails to route data signals',
    fail_cause:
      'Configuration register corrupted by a Single Event Upset (SEU), causing the switch to route signals incorrectly or not at all.',
    risk_prevention:
      'The controller detects the orientation and commands the switch accordingly (D2.5, pg 42). This is a new design feature, so prevention is based on component selection.',
    risk_occurrence: 7,
    risk_detection:
      'End-to-end data link testing is the only way to detect this. No specific self-test for the switch is mentioned.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      "Select a crosspoint switch with built-in error detection\/correction on its configuration memory, or implement a periodic refresh of the switch's configuration by the controller.",
    opt_detection:
      'Develop a specific built-in self-test (BIST) where the controller can command a loopback path through the crosspoint switch and verify data integrity to confirm the switch is configured correctly.',
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
    opt_remarks:
      'D2.5, Section 5.2.2, page 41, No specific test identified in documents'
  },
  {
    id: 'FC_015',
    history: '',
    structure_nextHigher: 'HOTDOCK Dust Protection',
    structure_focus: 'Retractable Shutter Mechanism',
    structure_nextLower: 'Shutter Drive Linkage',
    func_nextHigher:
      'Provide dust protection to avoid internal contamination and ensure correct mechanical and data\/power connection.',
    func_focus:
      'Drive a double motion of shutters (translation and rotation) to open a path for the connector plate during deployment.',
    func_nextLower:
      'Transmit force from the main actuation mechanism to the shutters.',
    fail_effect:
      'Linkage jams or breaks | Shutters fail to retract | Connector plate path is blocked | Mating sequence fails, power and data connection cannot be made | Mission failure.',
    fail_severity: 8,
    fail_mode: 'Fails to retract',
    fail_cause:
      'Jamming of the shutter mechanism due to dust ingress from the planetary environment, preventing motion.',
    risk_prevention:
      'The purpose of the mechanism is dust protection (FuncR_012). The design is an initial concept targeting simplification.',
    risk_occurrence: 7,
    risk_detection:
      'Verification for dust protection is ROD\/Testing (FuncR_012).',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Design the shutter mechanism with labyrinth seals and high driving torque to overcome potential dust-induced friction.',
    opt_detection:
      'Perform functional testing of the dust shutter mechanism in a vacuum chamber with simulated planetary dust (e.g., JSC-1A lunar simulant) to assess reliability.',
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
    opt_remarks: 'D2.5, FuncR_012, page 13, D2.5, Section 5.4, page 43'
  },
  {
    id: 'FC_016',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'DC\/DC Converter',
    structure_nextLower: 'Output Capacitor',
    func_nextHigher:
      'Provide local low-level bus generation from the supplied 24V for the microcontroller and circuitry.',
    func_focus:
      'Convert the main 24V bus to stable low-level voltages (e.g., 3.3V\/5V) required by the controller electronics.',
    func_nextLower:
      'Filter the output voltage to reduce ripple and provide stable power to digital components.',
    fail_effect:
      'Output capacitor fails short | The regulated voltage rail (e.g., 3.3V) is shorted to ground | Microcontroller and other components on the rail lose power | Controller ceases to function | Loss of all HOTDOCK functionality.',
    fail_severity: 8,
    fail_mode: 'Fails to provide regulated voltage',
    fail_cause:
      'Short circuit failure of a ceramic capacitor due to cracking induced by mechanical stress during launch vibration.',
    risk_prevention:
      'The interface must be compliant with launch loads (FuncR_007). Use of space-grade electronic components is standard practice, though not explicitly stated.',
    risk_occurrence: 4,
    risk_detection:
      'Verification for launch loads is by testing (FuncR_007). The controller would fail during post-vibration functional checks.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Select ceramic capacitors with flexible terminations or other stress-relieving features. Ensure PCB layout avoids placing large capacitors in high-flexure areas of the board.',
    opt_detection:
      'Perform a Design Verification (DV) test including vibration testing followed by a full functional test of the controller board to screen for component failures.',
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
    opt_remarks:
      'D2.5, FuncR_007, page 11, No specific component selection criteria in documents'
  },
  {
    id: 'FC_019',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'CAN Transceiver',
    structure_nextLower: 'Driver\/Receiver Circuitry',
    func_nextHigher:
      'Allow command and telemetry exchange between HOTDOCK and the host system over a standard CAN bus.',
    func_focus:
      'Transmit and receive differential signals on the CAN bus, compliant with the physical layer standard.',
    func_nextLower:
      "Convert logic-level signals from the microcontroller's CAN peripheral to differential bus signals, and vice-versa.",
    fail_effect:
      'Transceiver is damaged | No signals are transmitted or received on the CAN bus | Loss of all communication with the host OBC | HOTDOCK cannot be commanded or monitored | Inability to perform mission.',
    fail_severity: 8,
    fail_mode: 'Fails to communicate',
    fail_cause:
      'Electrical overstress damage to the transceiver from an electrostatic discharge (ESD) event during ground handling and assembly.',
    risk_prevention:
      'Requirement OpR_012 states the mechanism shall be maintenance-free during storage and ground operation, implying robust handling procedures are needed.',
    risk_occurrence: 4,
    risk_detection:
      'End-to-end communication check during system integration testing.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Implement a strict ESD control program for all phases of assembly and handling, including the use of wrist straps, grounded work surfaces, and ESD-safe packaging.',
    opt_detection:
      'Perform a comprehensive functional test of all interfaces, including CAN communication, as part of the final acceptance testing before delivery.',
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
    opt_remarks: 'D2.5, OpR_012, page 27, No specific ESD control plan cited'
  },
  {
    id: 'FC_020',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'Connector Plate PCB',
    structure_nextLower: 'PCB Substrate (FR-4 or similar)',
    func_nextHigher:
      'Provide a common mounting and interconnection platform for all POGO pins, pads, and associated sense circuitry.',
    func_focus:
      'Maintain the precise physical arrangement of 128 POGO connections and provide the electrical traces for power and data routing.',
    func_nextLower:
      'Provide a rigid, dielectrically stable base for mounting components and routing copper traces with controlled impedance for high-speed signals.',
    fail_effect:
      'PCB delaminates or cracks | An internal trace is broken | Open circuit on a data or power line | Loss of function for that specific line | Potential loss of entire interface if a critical power line is severed.',
    fail_severity: 8,
    fail_mode: 'Fails to provide electrical continuity (open circuit)',
    fail_cause:
      'Delamination of PCB layers due to mismatched CTE (Coefficient of Thermal Expansion) and stress from repeated thermal cycling from -55°C to +85°C.',
    risk_prevention:
      'The interface must withstand the specified temperature range (EnvR_003). Materials must be space-compatible (low outgassing per DesR_019, flame retardant per DesR_018).',
    risk_occurrence: 5,
    risk_detection:
      "Verification for EnvR_003 is 'Analysis', with a comment that 'The current activity doesn't foresee verification by testing for this requirement'.",
    risk_detScore: 9,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Select a PCB substrate material with a high glass transition temperature (Tg) and low Z-axis CTE (e.g., polyimide) suitable for space applications and wide temperature ranges.',
    opt_detection:
      'Perform thermal cycling tests on a representative coupon or prototype of the Connector Plate PCB to screen for delamination, cracking, or plated-through-hole failures.',
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
    opt_remarks: 'D2.5, EnvR_003, page 28, D2.5, DesR_019, page 22'
  },
  {
    id: 'FC_023',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'POGO Pin Connector',
    structure_nextLower: 'Pin Barrel\/Plunger Assembly',
    func_nextHigher: 'Provide a separable interface for power and data.',
    func_focus: 'Establish and maintain a compliant electrical connection.',
    func_nextLower:
      'Allow the pin to slide compliantly while maintaining electrical continuity from the spring to the pin tip.',
    fail_effect:
      'Debris enters the barrel | Plunger movement is impeded or jammed | Pin does not make contact or retract properly | Open circuit or damage to pin\/pad on de-mating.',
    fail_severity: 8,
    fail_mode: 'Fails to make contact (jammed)',
    fail_cause:
      'Particulate contamination (e.g., metallic dust from assembly) enters the POGO pin barrel and causes the plunger to jam.',
    risk_prevention:
      'FuncR_012 requires dust protection for planetary applications. General cleanliness during assembly is standard practice.',
    risk_occurrence: 5,
    risk_detection:
      'A final visual inspection and functional check would be performed. No specific cleanliness plan is mentioned.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Specify and perform all assembly operations in a certified cleanroom environment with strict FOD (Foreign Object Debris) controls.',
    opt_detection:
      'Add a step to the assembly procedure to actuate every POGO pin with a force gauge to verify smooth travel and correct spring force before final closeout.',
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
    opt_remarks:
      'D2.5, FuncR_012, page 13, No specific procedure document cited'
  },
  {
    id: 'FC_024',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Firmware',
    structure_nextLower: 'State Machine Logic',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus:
      'Execute firmware to process commands, run the motor control state machine, and handle telemetry.',
    func_nextLower:
      'Transition between Idle, Moving, and Fault states based on commands and sensor inputs, as defined in Figure 4-2.',
    fail_effect:
      'Logic error in firmware | System transitions to an incorrect state (e.g., tries to move when already moving) | Unpredictable behavior, potential for mechanical damage | Loss of control, failed operation.',
    fail_severity: 8,
    fail_mode: 'Executes incorrect command sequence',
    fail_cause:
      'A latent software bug (e.g., race condition, unhandled state) is triggered by an unusual sequence of commands or sensor readings.',
    risk_prevention:
      "The state machine is defined in the design document. Code reviews and structured programming are standard practice. Source of verification is 'System architecture'.",
    risk_occurrence: 6,
    risk_detection:
      'FuncR_027 verification is by Testing. The control logic will be tested during system integration.',
    risk_detScore: 6,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Implement a rigorous peer code review process for all firmware. Develop a comprehensive unit testing framework to validate each state transition and logic path.',
    opt_detection:
      'Develop a comprehensive hardware-in-the-loop (HIL) test suite that simulates a wide range of nominal and off-nominal scenarios, including command race conditions and sensor faults.',
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
    opt_remarks: 'D2.5, Figure 4-2, page 34, D2.5, FuncR_027, page 16'
  },
  {
    id: 'FC_030',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Mechanical Transmission',
    structure_nextLower: 'Bearings',
    func_nextHigher: 'Transmit torque from motor to barrel-cam.',
    func_focus:
      'Support rotating shafts within the geartrain and actuation mechanism.',
    func_nextLower:
      'Allow low-friction rotation of shafts while supporting radial and axial loads.',
    fail_effect:
      'Bearing cage fractures | Rolling elements bunch up, causing the bearing to seize | Mechanism jams | Actuation fails.',
    fail_severity: 8,
    fail_mode: 'Mechanism jams',
    fail_cause:
      'Fracture of the bearing cage due to embrittlement from exposure to atomic oxygen in a LEO (Low Earth Orbit) environment (if applicable).',
    risk_prevention:
      'EnvR_001 requires the design to withstand the space environment. Materials must be space-grade. DesR_012 requires space-grade lubricants.',
    risk_occurrence: 4,
    risk_detection:
      "The document notes 'No testing in the current activity under space conditions', so this specific failure cause would not be found.",
    risk_detScore: 9,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'For LEO applications, specify bearings with metallic cages (e.g., steel or bronze) instead of polymeric cages (e.g., Torlon) which can be susceptible to atomic oxygen.',
    opt_detection:
      'Add an Atomic Oxygen exposure test to the environmental test campaign for any external or vented mechanisms intended for LEO operation.',
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
    opt_remarks:
      'D2.5, EnvR_001, page 28, No specific LEO environment test cited'
  },
  {
    id: 'FC_037',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Power Conversion',
    structure_nextLower: 'Input Filter',
    func_nextHigher: 'Provide local low-level bus generation.',
    func_focus: 'Convert the main 24V bus to stable low-level voltages.',
    func_nextLower:
      'Filter electromagnetic interference (EMI) from the main power bus to protect the converter.',
    fail_effect:
      'Input filter inductor fails open | Power is cut off to the DC\/DC converter | The entire controller loses power.',
    fail_severity: 8,
    fail_mode: 'Fails to provide power',
    fail_cause:
      "Vibration-induced fatigue failure of the inductor's solder joint due to the component's mass.",
    risk_prevention:
      'The interface must be compliant with launch loads (FuncR_007).',
    risk_occurrence: 4,
    risk_detection: 'Verification for launch loads is by Testing.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Large magnetic components like inductors must be mechanically staked to the PCB with a space-grade adhesive (e.g., epoxy) in addition to soldering to relieve stress on the leads.',
    opt_detection:
      'Perform vibration testing followed by a full functional test and visual inspection of all large components for solder joint integrity.',
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
    opt_remarks:
      'D2.5, FuncR_007, page 11, No specific workmanship standard cited'
  },
  {
    id: 'FC_043',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'POGO Pin Connector',
    structure_nextLower: 'POGO Pin Body',
    func_nextHigher: 'Provide a separable interface for power and data.',
    func_focus: 'Establish and maintain a compliant electrical connection.',
    func_nextLower:
      'House the spring and plunger, providing a conductive path and mounting to the PCB.',
    fail_effect:
      'Solder joint between POGO pin body and PCB fails | Electrical connection to the pin is lost | Open circuit on a power or data line | Loss of function for that line.',
    fail_severity: 8,
    fail_mode: 'Fails to provide electrical continuity (open circuit)',
    fail_cause:
      'Fatigue failure of the solder joint due to stress from repeated thermal cycling (-55°C to +85°C) and CTE mismatch between the pin body, solder, and PCB.',
    risk_prevention:
      'The interface must withstand the specified temperature range (EnvR_003).',
    risk_occurrence: 5,
    risk_detection:
      'The document notes that testing for this requirement is not foreseen in the current activity.',
    risk_detScore: 9,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Select POGO pins with flange designs that maximize solder fillet area. Use a high-reliability, space-grade solder alloy and implement underfill or corner staking for additional mechanical support.',
    opt_detection:
      'Perform a thermal cycling test on a populated connector PCB coupon, followed by dye-and-pry or cross-section analysis to inspect solder joint integrity.',
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
    opt_remarks: 'D2.5, EnvR_003, page 28, D2.5, EnvR_003 comment, page 28'
  },
  {
    id: 'FC_053',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'Connector Plate PCB',
    structure_nextLower: 'Plated Through-Hole (Via)',
    func_nextHigher: 'Provide interconnection for all POGO pins and circuitry.',
    func_focus: 'Route electrical signals between different layers of the PCB.',
    func_nextLower:
      'Provide a conductive path between layers of the circuit board.',
    fail_effect:
      'Barrel of the via cracks | Electrical connection between layers is broken | Open circuit on a power or data line | Loss of function for that line.',
    fail_severity: 8,
    fail_mode: 'Fails to provide electrical continuity (open circuit)',
    fail_cause:
      'Fatigue cracking of the copper plating in the via barrel due to Z-axis expansion stress during thermal cycling (-55°C to +85°C).',
    risk_prevention:
      'The interface must withstand the specified temperature range (EnvR_003). PCB fabrication must meet space-grade standards.',
    risk_occurrence: 5,
    risk_detection:
      'Testing for EnvR_003 is not foreseen in the current activity, making this failure difficult to detect pre-flight.',
    risk_detScore: 9,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Specify PCB fabrication according to a high-reliability space standard (e.g., ECSS-Q-ST-70-10C) which controls via aspect ratios and plating quality to ensure thermal cycle survivability.',
    opt_detection:
      'Perform thermal cycling on test coupons from each PCB manufacturing lot, followed by microsection analysis to verify the integrity of the plated through-holes.',
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
    opt_remarks: 'D2.5, EnvR_003, page 28, D2.5, EnvR_003 comment, page 28'
  },
  {
    id: 'FC_070',
    history: '',
    structure_nextHigher: 'HOTDOCK Data Interface',
    structure_focus: 'LVDS Crosspoint Switch',
    structure_nextLower: 'Power Supply',
    func_nextHigher: 'Provide a re-routable data interface.',
    func_focus: 'Dynamically route LVDS signal pairs.',
    func_nextLower: 'Provide stable power to the switch IC.',
    fail_effect:
      'Switch loses power | All routed data links are broken | Loss of all SpaceWire communication through the interface.',
    fail_severity: 8,
    fail_mode: 'Fails to route data signals',
    fail_cause:
      'The local voltage regulator powering the crosspoint switch fails.',
    risk_prevention:
      'The controller design includes power conversion for all its components.',
    risk_occurrence: 4,
    risk_detection:
      'Failure would be detected by a total loss of communication.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Design the power supply for the crosspoint switch with high-reliability components and sufficient derating. Consider providing a redundant, cross-strapped power feed if analysis shows it is a critical point of failure.',
    opt_detection:
      'Perform a stress screening (e.g., thermal cycling and burn-in) on the assembled controller boards to precipitate early failures in components like voltage regulators.',
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
    opt_remarks:
      'D2.5, Section 6.1, page 45, No specific redundancy is mentioned'
  },
  {
    id: 'FC_087',
    history: '',
    structure_nextHigher: 'HOTDOCK Dust Protection',
    structure_focus: 'Rotative Cover',
    structure_nextLower: 'Drive System Interface',
    func_nextHigher: 'Provide dust protection.',
    func_focus: 'Protect the connector plate from dust.',
    func_nextLower:
      'Be driven directly by the HOTDOCK drive system (Table 2, pg 44).',
    fail_effect:
      'Interface between main drive and cover shears | Main drive moves but the cover does not | Connector plate is not exposed | Mating fails.',
    fail_severity: 8,
    fail_mode: 'Fails to open',
    fail_cause:
      'The mechanical interface (e.g., a drive dog) between the main barrel-cam and the rotative cover fails due to overload if the cover is jammed by dust.',
    risk_prevention:
      "This is one of the considered mitigation strategies, noted as having the con of an 'additional mechanism and motion transmission'.",
    risk_occurrence: 6,
    risk_detection:
      'A failure to open would be detected by the absolute position sensor not reaching its expected final state.',
    risk_detScore: 4,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Design the drive interface for the dust cover with a torque-limiting clutch to prevent overload failure of the primary drive train if the cover becomes jammed.',
    opt_detection:
      'If this design is chosen, perform functional testing in a dust environment to characterize the loads on the drive interface and verify its robustness.',
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
    opt_remarks: 'D2.5, Table 2, page 44, This is a conceptual design'
  },
  {
    id: 'FC_125',
    history: '',
    structure_nextHigher: 'HOTDOCK Harnessing',
    structure_focus: 'Internal Wiring Harness',
    structure_nextLower: 'Bend Radius',
    func_nextHigher: 'Connect internal components.',
    func_focus: 'Route electrical signals and power reliably.',
    func_nextLower:
      'Maintain a bend radius that does not over-stress the wire conductors or insulation.',
    fail_effect:
      'A wire is bent too sharply | The conductor is fatigued and breaks inside the insulation | An intermittent or open circuit develops.',
    fail_severity: 8,
    fail_mode: 'Fails to provide electrical continuity (open circuit)',
    fail_cause:
      "The harness is routed around a sharp corner with a bend radius smaller than the wire's specified minimum, leading to fatigue failure under vibration.",
    risk_prevention:
      'Standard workmanship practices should prevent this. No specific harness standard is cited.',
    risk_occurrence: 4,
    risk_detection:
      'An intermittent failure would be very difficult to detect and diagnose. A hard failure would be found during continuity testing.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'The harness design drawings must specify minimum bend radii for all wires and cables. The assembly procedure must be followed to implement this routing.',
    opt_detection:
      'Perform a detailed inspection of the harness routing on the first article to ensure all minimum bend radius requirements have been met.',
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
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_135',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Firmware',
    structure_nextLower: 'Task Scheduler',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus: 'Execute real-time tasks according to their priority.',
    func_nextLower:
      'Manage the execution of multiple concurrent tasks, such as motor control, telemetry, and command handling.',
    fail_effect:
      'A race condition occurs | Two tasks access a shared resource (e.g., a global variable) without proper protection, leading to data corruption | State machine enters an invalid state, or a command is misinterpreted | Unpredictable behavior, potential for damage.',
    fail_severity: 8,
    fail_mode: 'Executes incorrect command sequence',
    fail_cause:
      'A race condition between the command-handling task and the motor control task causes a state variable to be updated incorrectly.',
    risk_prevention:
      'None identified in documents. Use of an RTOS scheduler is implied for complex systems.',
    risk_occurrence: 6,
    risk_detection:
      'None identified in documents. Race conditions are notoriously difficult to detect as they are timing-dependent.',
    risk_detScore: 9,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Implement a strict coding standard that requires all shared resources to be protected by mutual exclusion mechanisms (e.g., mutexes or semaphores). Perform a detailed code review focusing on concurrency.',
    opt_detection:
      'Perform long-duration, randomized stress testing to increase the probability of triggering timing-dependent race conditions. Use a real-time trace tool to analyze task interactions.',
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
    opt_remarks: 'no evidence, no evidence'
  },
  {
    id: 'FC_145',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'POGO Pin Connector',
    structure_nextLower: 'Solder Joint (Pin-to-PCB)',
    func_nextHigher: 'Provide a separable interface for power and data.',
    func_focus:
      'Maintain the precise physical arrangement of 128 POGO connections.',
    func_nextLower:
      'Provide a reliable electro-mechanical connection between the POGO pin body and the PCB pad.',
    fail_effect:
      'A solder joint cracks and fails | An intermittent or open circuit is created | Loss of a signal or power line.',
    fail_severity: 8,
    fail_mode: 'Fails to provide electrical continuity (open circuit)',
    fail_cause:
      'Low-cycle fatigue of a POGO pin solder joint due to stress induced by CTE mismatch between the PCB and housing during thermal cycling (-55°C to +85°C).',
    risk_prevention:
      'The interface must withstand the specified temperature range (EnvR_003).',
    risk_occurrence: 5,
    risk_detection:
      'The document notes that testing for EnvR_003 is not foreseen, making this hard to detect.',
    risk_detScore: 9,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Implement mechanical stress relief for the PCB mounting. Apply underfill or corner staking to the POGO pins to reinforce the solder joints and distribute mechanical stress.',
    opt_detection:
      'Perform a thermal cycling test on a fully assembled prototype, periodically checking continuity of all pins to detect intermittent failures. Follow with dye-and-pry to inspect joints for cracks.',
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
    opt_remarks: 'D2.5, EnvR_003, page 28, No workmanship standard cited'
  },
  {
    id: 'FC_151',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Local Power Regulator (LDO)',
    structure_nextLower: 'Regulator IC',
    func_nextHigher: 'Provide local low-level bus generation.',
    func_focus:
      'Provide stable low-level voltages (e.g., 3.3V) to controller electronics.',
    func_nextLower:
      'Regulate an input voltage down to a stable, lower output voltage.',
    fail_effect:
      'LDO fails short (input-to-output) | A high voltage (e.g., 5V) is applied to a low-voltage rail (3.3V) | All components on the 3.3V rail are destroyed by electrical overstress | Catastrophic failure of the controller.',
    fail_severity: 8,
    fail_mode: 'Fails to provide regulated voltage',
    fail_cause:
      'Electrical overstress or a radiation-induced event causes an internal short circuit in the LDO pass element.',
    risk_prevention:
      'Controller architecture includes linear voltage regulators (D2.5, page 46). Component selection assumed to be appropriate.',
    risk_occurrence: 4,
    risk_detection:
      'None identified in documents. This failure is instantaneous and destructive.',
    risk_detScore: 10,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Add an over-voltage protection device (e.g., a crowbar circuit or Zener diode) on the output of all critical LDOs to protect downstream components.',
    opt_detection:
      'Perform a Failure Modes, Effects, and Criticality Analysis (FMECA) at the circuit level to identify critical single-point failures like LDO shorts.',
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
    opt_remarks: 'D2.5, Section 6.2, page 46, no evidence'
  },
  {
    id: 'FC_152',
    history: '',
    structure_nextHigher: 'HOTDOCK Electrical Interface',
    structure_focus: 'Conducted Emissions Filter',
    structure_nextLower: 'Common-Mode Choke',
    func_nextHigher:
      'Provide a reliable electrical interface compliant with EMC standards.',
    func_focus:
      'Not cause electro-magnetic interference (EMI) in coupled modules (FuncR_016).',
    func_nextLower:
      'Filter conducted common-mode noise on power and data lines.',
    fail_effect:
      'Choke winding fails open | The signal or power path is broken | Loss of communication or power to the interface.',
    fail_severity: 8,
    fail_mode: 'Fails to provide electrical continuity (open circuit)',
    fail_cause:
      'Vibration-induced fatigue failure of a fine-wire winding or its termination to the component lead.',
    risk_prevention:
      'The interface must be compliant with launch loads (FuncR_007).',
    risk_occurrence: 4,
    risk_detection:
      'Post-vibration functional testing would detect the open circuit.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Select robust, space-qualified magnetic components. Ensure all large magnetic components are staked to the PCB with epoxy to prevent stress on solder joints.',
    opt_detection:
      'Perform vibration testing followed by a full continuity and functional check of all power and data lines.',
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
    opt_remarks: 'D2.5, FuncR_007, page 11, no evidence'
  },
  {
    id: 'FC_157',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'DC\/DC Converter',
    structure_nextLower: 'Ceramic Capacitor',
    func_nextHigher:
      'Provide local low-level bus generation from the supplied 24V.',
    func_focus:
      'Convert the main 24V bus to stable low-level voltages (e.g., 3.3V\/5V).',
    func_nextLower:
      'Filter input\/output voltage to reduce ripple and ensure stability.',
    fail_effect:
      'Capacitor cracks and fails short | The regulated voltage rail is shorted to ground | Loss of power to the microcontroller and other ICs | Controller ceases to function | Loss of all HOTDOCK functionality.',
    fail_severity: 8,
    fail_mode: 'Fails to provide regulated voltage',
    fail_cause:
      'Brittle fracture of a ceramic capacitor due to high-G mechanical shock (pyroshock) from launch vehicle stage separation.',
    risk_prevention:
      'The interface must be compliant with launch loads (FuncR_007). Standard space-grade component selection and PCB layout practices are assumed to mitigate shock.',
    risk_occurrence: 4,
    risk_detection:
      'Verification for launch loads is by Testing. The failure would be detected in post-shock functional tests.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Select ceramic capacitors with flexible terminations. Ensure PCB layout avoids placing large, stiff components in high-flexure areas. Analyze and potentially add damping to the PCB mounting.',
    opt_detection:
      'Perform pyroshock testing on the integrated HOTDOCK assembly, followed by a full functional test to screen for component failures.',
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
    opt_remarks: 'D2.5, FuncR_007, page 11, No specific shock requirement cited'
  },
  {
    id: 'FC_167',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Controller PCB',
    structure_nextLower: 'Decoupling Capacitor',
    func_nextHigher:
      'Provide a stable operating environment for all electronic components.',
    func_focus: 'Provide stable power to the microcontroller.',
    func_nextLower:
      'Provide a local source of charge to handle high-frequency current demands from the microcontroller.',
    fail_effect:
      'A decoupling capacitor fails open (e.g., solder joint fracture) | The local power supply impedance for the MCU increases | Power rail noise causes logic upsets or spurious resets of the microcontroller | Controller behaves erratically or hangs.',
    fail_severity: 8,
    fail_mode: 'Firmware behaves erratically or resets',
    fail_cause:
      'A solder joint on a small decoupling capacitor, placed close to an MCU power pin, fractures due to vibration-induced fatigue.',
    risk_prevention:
      'The interface must be compliant with launch loads (FuncR_007). Standard high-reliability PCB design practices are assumed.',
    risk_occurrence: 4,
    risk_detection:
      'This failure can be intermittent and very difficult to diagnose, as it may only occur under specific vibration frequencies or temperatures.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Use multiple parallel decoupling capacitors to provide redundancy. Follow space-grade PCB layout guidelines for placement and soldering of decoupling capacitors.',
    opt_detection:
      'Perform highly accelerated life testing (HALT) which combines vibration and thermal cycling to precipitate latent failures like solder joint fatigue.',
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
    opt_remarks:
      'D2.5, FuncR_007, page 11, No specific workmanship standard cited'
  },
  {
    id: 'FC_169',
    history: '',
    structure_nextHigher: 'MOSAR Demonstrator',
    structure_focus: 'Visual Processing System',
    structure_nextLower: 'Pose Estimation Algorithm',
    func_nextHigher: 'Support autonomous reconfiguration operations.',
    func_focus:
      'Provide 3D pose estimation of the walking manipulator or Spacecraft Modules.',
    func_nextLower:
      'Compute the position and orientation of a target (e.g., SM) from camera images with a mean error < 1cm and < 5 deg.',
    fail_effect:
      'Algorithm provides an incorrect pose estimate | The Autonomy Agent plans a trajectory based on the wrong location | The WM collides with the target SM or misses the HOTDOCK interface | Damage to hardware, failed operation.',
    fail_severity: 8,
    fail_mode: 'Causes collision with target',
    fail_cause:
      'Poor lighting conditions or reflections cause the vision algorithm to incorrectly identify features, resulting in a large error in the calculated pose.',
    risk_prevention:
      'FuncR_A115 and FuncR_A116 define the requirements for camera localization. This is an optional\/desirable feature, not in the primary control loop.',
    risk_occurrence: 6,
    risk_detection:
      'The plan is validated by simulation. The primary system relies on known geometry, not vision.',
    risk_detScore: 5,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'The robotic control system must incorporate cross-checks and sanity limits on vision system data before using it for motion planning. Proximity sensors on the HOTDOCK provide a final verification.',
    opt_detection:
      'Characterize the performance of the vision system under a wide range of lighting conditions to define its operational limits.',
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
    opt_remarks: 'MOSAR D1.4, page 36, no evidence'
  },
  {
    id: 'FC_181',
    history: '',
    structure_nextHigher: 'HOTDOCK Electrical Interface',
    structure_focus: 'External Connectors',
    structure_nextLower: 'Connector Shell',
    func_nextHigher:
      'Provide a reliable electrical connection to the spacecraft harness.',
    func_focus: 'Connect internal harnessing to the spacecraft-side harness.',
    func_nextLower:
      'Provide electrical shielding and a grounding path for the harness.',
    fail_effect:
      'A large electrostatic charge builds up on the spacecraft | An arc discharges from the structure to a connector pin | The high voltage transient damages the CAN transceiver or other interface electronics | Loss of communication.',
    fail_severity: 8,
    fail_mode: 'Fails to communicate',
    fail_cause:
      'Surface charging in the GEO environment leads to a large differential potential, causing an electrostatic discharge (ESD) event on an external connector.',
    risk_prevention:
      'The design must withstand the space environment (EnvR_001). This includes plasma\/charging effects.',
    risk_occurrence: 5,
    risk_detection:
      'None identified in documents. This is typically verified by analysis.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Ensure all external surfaces and connector shells have a conductive path to the spacecraft chassis ground to prevent charge buildup. Add TVS diodes to all external interface pins.',
    opt_detection:
      'Perform a spacecraft charging analysis to predict the worst-case potentials. Test the interface electronics for susceptibility to system-level ESD events.',
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
    opt_remarks:
      'D2.5, EnvR_001, page 28, No specific spacecraft charging analysis cited'
  },
  {
    id: 'FC_194',
    history: '',
    structure_nextHigher: 'HOTDOCK Dust Protection',
    structure_focus: 'Retractable Shutter Mechanism',
    structure_nextLower: 'Shutter Panel',
    func_nextHigher: 'Provide dust protection to avoid internal contamination.',
    func_focus:
      'Drive a double motion of shutters to open a path for the connector plate.',
    func_nextLower: 'Provide a physical barrier against dust.',
    fail_effect:
      'Shutter panel binds in its track | Mechanism jams | Shutters fail to retract, blocking the connector plate path | Mating sequence fails.',
    fail_severity: 8,
    fail_mode: 'Fails to retract',
    fail_cause:
      'Binding of the shutter panel in its guide tracks due to differential thermal expansion between the aluminum shutter and a steel housing.',
    risk_prevention:
      'An initial concept for dust protection is based on retractable shutters. (D2.5, Section 5.4)',
    risk_occurrence: 6,
    risk_detection:
      'Motor current telemetry would detect the high torque of a jam. The absolute position sensor would show a failure to reach the open position.',
    risk_detScore: 4,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Perform a detailed thermal analysis of the shutter mechanism. Select materials with compatible CTEs and ensure sufficient clearance is maintained at all temperatures.',
    opt_detection:
      'Perform functional testing of the dust shutter mechanism in a thermal chamber at the operational temperature extremes.',
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
    opt_remarks:
      'D2.5, Figure 5-11, page 43, No specific material choices cited'
  },
  {
    id: 'FC_052',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Gearing System',
    structure_nextLower: 'Lubricant (Space-Grade)',
    func_nextHigher: 'Transmit and amplify torque.',
    func_focus: 'Transmit torque with minimal backlash and friction.',
    func_nextLower:
      'Reduce friction and prevent wear\/galling between moving gear teeth.',
    fail_effect:
      'Lubricant is expelled from the gearbox due to over-application | Expelled lubricant contaminates nearby optical sensors or thermal surfaces | Mission science is degraded or thermal control is compromised.',
    fail_severity: 7,
    fail_mode: 'Contaminates external surfaces',
    fail_cause:
      'Excessive lubricant applied during assembly is flung out of the unsealed gearbox by centrifugal force during operation in vacuum.',
    risk_prevention:
      'DesR_012 requires space-grade lubricants. Low outgassing is a key property.',
    risk_occurrence: 4,
    risk_detection:
      'Visual inspection after testing might show evidence of creep. No specific contamination test is mentioned.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Develop a detailed lubrication procedure specifying the exact type, quantity, and application method of lubricant to prevent over-application. Design the gearbox with labyrinth seals to help contain lubricant.',
    opt_detection:
      'During thermal vacuum life testing, place witness plates (e.g., silicon wafers) near the gearbox to collect any outgassed or expelled contaminants for analysis.',
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
    opt_remarks: 'D2.5, DesR_012, page 20, No specific procedure document cited'
  },
  {
    id: 'FC_098',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'POGO Pin Connector',
    structure_nextLower: 'Grounding Pins',
    func_nextHigher: 'Provide a separable interface for power and data.',
    func_focus: 'Provide a common ground reference between mated interfaces.',
    func_nextLower:
      'Establish a low-impedance connection for the ground return path.',
    fail_effect:
      'A ground pin has high contact resistance | The ground reference shifts between the two interfaces | Common-mode noise is created, data communication becomes unreliable | Data corruption.',
    fail_severity: 7,
    fail_mode: 'Communication is intermittent',
    fail_cause:
      'Contamination or wear on one of the few designated ground pins leads to a high-resistance ground connection.',
    risk_prevention:
      'The design includes 128 connections that can be freely configured, including for power transmission (D2.5, pg 40). This allows for multiple ground pins.',
    risk_occurrence: 5,
    risk_detection:
      'This can be a difficult problem to diagnose, manifesting as random data errors.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Designate a significant number of POGO pins (e.g., >10%) as ground pins and distribute them evenly across the connector plate to ensure a robust, low-impedance ground connection.',
    opt_detection:
      'During integration testing, use a network analyzer to perform a ground impedance measurement between the two mated interfaces to verify a low impedance connection across a wide frequency range.',
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
    opt_remarks: 'D2.5, Section 5.2, page 40, No specific pinout defined'
  },
  {
    id: 'FC_132',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Microcontroller',
    structure_nextLower: 'Internal Oscillator',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus: 'Execute firmware at a defined speed for real-time tasks.',
    func_nextLower:
      'Provide a stable clock signal within tolerance over the mission life and temperature range.',
    fail_effect:
      'Clock frequency drifts out of tolerance | CAN bus baud rate is incorrect, communication fails. PWM timings are incorrect | Loss of communication, inefficient or unstable motor control.',
    fail_severity: 7,
    fail_mode: 'Fails to communicate on CAN bus',
    fail_cause:
      'Frequency drift of the internal RC oscillator due to temperature variation and long-term aging.',
    risk_prevention:
      'Controller electrical specifications (D2.5, page 46) imply standard components are used.',
    risk_occurrence: 6,
    risk_detection:
      'None identified in documents. This failure is difficult to detect as it may be intermittent with temperature.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Use a temperature-compensated crystal oscillator (TCXO) as the primary clock source for the microcontroller to ensure frequency stability.',
    opt_detection:
      'Perform a frequency vs. temperature characterization of the microcontroller clock during thermal vacuum testing.',
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
    opt_remarks: 'D2.5, page 46, no evidence'
  },
  {
    id: 'FC_139',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Gearing System',
    structure_nextLower: 'Gear Lubricant',
    func_nextHigher: 'Transmit and amplify torque.',
    func_focus: 'Transmit torque with minimal friction and wear.',
    func_nextLower:
      'Reduce friction and prevent wear, rated for space environment per DesR_012.',
    fail_effect:
      'Lubricant degrades | Viscosity increases due to polymerization from radiation exposure or high temperature | Gearbox friction increases significantly | Motor current increases, mechanism may stall.',
    fail_severity: 7,
    fail_mode: 'Requires excessive torque to actuate',
    fail_cause:
      'Polymerization of the gear lubricant due to long-term exposure to the space radiation environment, causing it to become gummy.',
    risk_prevention:
      'DesR_012 requires space-grade lubricants. EnvR_001 requires withstanding space environment.',
    risk_occurrence: 6,
    risk_detection:
      'None identified in documents. This is a long-term aging effect not typically caught in standard life tests.',
    risk_detScore: 9,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Select a lubricant with known radiation stability (e.g., a perfluoropolyether like Braycote). Perform a torque budget analysis that accounts for end-of-life lubricant properties.',
    opt_detection:
      'Perform an accelerated aging test on lubricant samples (radiation and thermal) and measure viscosity changes. Test gearbox performance with the aged lubricant.',
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
    opt_remarks: 'D2.5, DesR_012, page 20, D2.5, EnvR_001, page 28'
  },
  {
    id: 'FC_142',
    history: '',
    structure_nextHigher: 'HOTDOCK Thermal Interface',
    structure_focus: 'Hydraulic Fluid',
    structure_nextLower: 'Fluid Chemical Properties',
    func_nextHigher: 'Provide an active thermal interface for fluid transfer.',
    func_focus: 'Circulate fluid for heat exchange up to 1400 W.',
    func_nextLower:
      'Maintain stable thermal properties and chemical composition over the mission lifetime.',
    fail_effect:
      "Fluid breaks down chemically | The fluid's thermal properties (specific heat, viscosity) change, or it becomes corrosive | Thermal transfer performance is degraded, or internal components are corroded | Overheating of payloads, potential for leaks.",
    fail_severity: 7,
    fail_mode: 'Thermal performance degraded',
    fail_cause:
      'Chemical breakdown of the coolant fluid due to long-term exposure to high temperatures and radiation.',
    risk_prevention:
      'The thermal interface is based on a previously developed design (D2.5, pg 42). This implies a proven fluid was used.',
    risk_occurrence: 5,
    risk_detection:
      'None identified in documents. This is a long-term aging effect.',
    risk_detScore: 9,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Select a heat transfer fluid with a proven history of long-term stability in the space environment. Ensure all wetted materials in the fluid loop are compatible with the fluid.',
    opt_detection:
      'Perform an accelerated aging test on the fluid (thermal and radiation) and then run it through a prototype thermal loop to verify performance has not degraded.',
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
    opt_remarks: 'D2.5, Section 5.3, page 42, no evidence'
  },
  {
    id: 'FC_149',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Microcontroller',
    structure_nextLower: 'GPIO Pin',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus: 'Control various hardware functions.',
    func_nextLower: 'Drive a digital output pin to a high or low logic level.',
    fail_effect:
      'GPIO pin is stuck high | A peripheral is permanently enabled | Potential for high power consumption or unintended operation | System may enter an unsafe state.',
    fail_severity: 7,
    fail_mode: 'Fails to disable a peripheral',
    fail_cause:
      'A Single Event Latch-up (SEL) in a GPIO output driver causes it to become stuck in a high-current state.',
    risk_prevention:
      'None identified in documents. This is a known risk for standard CMOS components in radiation environments.',
    risk_occurrence: 6,
    risk_detection:
      'A functional test of the specific peripheral would fail to turn off. Current consumption would be high.',
    risk_detScore: 5,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      "Use a radiation-tolerant microcontroller or implement external latch-up detection and power-cycling circuitry for the controller's power domain.",
    opt_detection:
      'Perform heavy ion testing to characterize the SEL susceptibility of the chosen microcontroller.',
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
    opt_remarks: 'no evidence, no evidence'
  },
  {
    id: 'FC_159',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Brushless DC Motor (MAXON EC 32 flat)',
    structure_nextLower: 'Hall Effect Sensors',
    func_nextHigher: 'Rotate locking ring.',
    func_focus:
      'Provide rotor position feedback to the controller for commutation.',
    func_nextLower:
      'Detect magnetic field orientation and output a digital signal.',
    fail_effect:
      'Hall sensor output voltage shifts or becomes noisy | Commutation logic sees incorrect timing | Motor runs inefficiently, with torque ripple or reduced torque output | Actuation performance is degraded.',
    fail_severity: 7,
    fail_mode: 'Provides degraded position signal',
    fail_cause:
      'Displacement Damage Dose (DDD) from proton radiation in the space environment causes lattice defects in the Hall sensor semiconductor, altering its electrical characteristics.',
    risk_prevention:
      'Design must withstand space environment (EnvR_001), but this is a more subtle long-term aging effect than total dose failure.',
    risk_occurrence: 5,
    risk_detection:
      'None identified in documents. This slow degradation would be difficult to detect without detailed motor characterization.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Select Hall effect sensors with known tolerance to proton-induced displacement damage. Perform a radiation analysis and add localized shielding if necessary.',
    opt_detection:
      'Perform proton radiation testing on the sensors to characterize parameter degradation versus fluence and ensure end-of-life performance meets requirements.',
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
    opt_remarks: 'D2.5, EnvR_001, page 28, No specific radiation analysis cited'
  },
  {
    id: 'FC_160',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'POGO Pin Pad',
    structure_nextLower: 'Contact Surface',
    func_nextHigher:
      'Provide a separable interface for power and data transfer.',
    func_focus:
      'Provide a contact surface for the POGO pin to establish electrical connection.',
    func_nextLower: 'Provide a low-resistance, non-corroding contact surface.',
    fail_effect:
      'A thin, insulating film forms on the contact pad | Contact resistance increases significantly | Localized heating on power pins, or high bit error rate on data lines | Degraded performance or loss of function for that line.',
    fail_severity: 7,
    fail_mode: 'Contact resistance too high',
    fail_cause:
      'Volatile Condensable Material (VCM) from a nearby component (e.g., adhesive, cable jacket) outgasses in vacuum and re-condenses on the cold POGO pad surface.',
    risk_prevention:
      'Materials must have low outgassing (DesR_019). The design is intended to prevent accumulation of dirt (D2.5, pg 40).',
    risk_occurrence: 4,
    risk_detection:
      'None identified in documents. This failure may only appear after extended time in vacuum.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Maintain a strict materials and processes list, selecting only low-VCM materials per ECSS-Q-ST-70-01. Perform vacuum bake-out on subassemblies to remove volatiles.',
    opt_detection:
      'During system thermal vacuum testing, place a Quartz Crystal Microbalance (QCM) near the connector plate to measure VCM deposition rates.',
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
    opt_remarks: 'D2.5, DesR_019, page 22, D2.5, Section 5.2, page 40'
  },
  {
    id: 'FC_188',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Non-Volatile Memory (Flash)',
    structure_nextLower: 'Calibration Data Sector',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus: 'Store persistent configuration and calibration data.',
    func_nextLower:
      'Store calibration coefficients for the absolute position sensor.',
    fail_effect:
      'Calibration data is corrupted | The controller uses incorrect scaling or offset for the position sensor | The reported position is wrong | The controller may drive the mechanism past its limits or fail to confirm lock.',
    fail_severity: 7,
    fail_mode: 'Reports incorrect position telemetry',
    fail_cause:
      'A single-bit upset (SEU) corrupts a byte in the flash memory sector where calibration data is stored.',
    risk_prevention:
      'The controller has 2048 KBytes of flash for programming and logging. (D2.5, pg 46)',
    risk_occurrence: 4,
    risk_detection:
      'The error may not be detected until the mechanism behaves incorrectly at a specific position.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Store a checksum (e.g., CRC) along with the calibration data. The firmware must validate the checksum at boot-up before using the data.',
    opt_detection:
      'Add a specific built-in test that can be commanded to re-calculate and verify the checksum of all non-volatile data storage areas.',
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
    opt_remarks:
      'D2.5, Section 6.2, page 46, No specific data integrity check cited'
  },
  {
    id: 'FC_191',
    history: '',
    structure_nextHigher: 'MOSAR Demonstrator',
    structure_focus: 'System Grounding',
    structure_nextLower: 'Ground Return Path',
    func_nextHigher: 'Provide a safe and reliable electrical system.',
    func_focus:
      'Provide a common ground reference for all interconnected components (WM, SMs, SVC).',
    func_nextLower:
      'Ensure a low-impedance path for all signal and power return currents.',
    fail_effect:
      'A ground loop is created due to multiple ground paths | Noise currents from the WM motors circulate through the system ground | The ground reference becomes noisy, corrupting sensitive analog signals and digital communication | Unreliable sensor readings, communication errors.',
    fail_severity: 7,
    fail_mode: 'Signal integrity is degraded',
    fail_cause:
      'An incorrect grounding scheme where a data cable shield is connected to chassis at both ends, creating a large ground loop.',
    risk_prevention:
      'None identified in documents. A grounding philosophy is a critical part of the system-level electrical design.',
    risk_occurrence: 5,
    risk_detection:
      "These issues are often difficult to diagnose, appearing as intermittent 'gremlins'.",
    risk_detScore: 8,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Develop and enforce a strict system grounding and bonding plan (e.g., a single-point star ground system). All cable shields should be grounded at one end only.',
    opt_detection:
      'During system integration, perform ground impedance and bonding resistance measurements to verify the grounding scheme was implemented correctly.',
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
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_197',
    history: '',
    structure_nextHigher: 'MOSAR Demonstrator',
    structure_focus: 'On-Board Software (OBSW)',
    structure_nextLower: 'TASTE Middleware',
    func_nextHigher: 'Provide a model-based framework for the OBSW.',
    func_focus:
      'Provide the underlying software framework for modeling components and their interactions.',
    func_nextLower:
      'Manage inter-process communication between software components.',
    fail_effect:
      'A bug in the TASTE middleware | Communication between two software components fails | The system deadlocks or a component fails to receive a command | Loss of function.',
    fail_severity: 7,
    fail_mode: 'Software component fails to communicate',
    fail_cause:
      "A subtle bug in the TASTE framework's message passing implementation causes message corruption under high load.",
    risk_prevention: 'The OBSW is modeled in TASTE. (D2.4, Section 5.5)',
    risk_occurrence: 4,
    risk_detection:
      'This would be a difficult, low-level bug to find, likely requiring extensive stress testing.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Use a mature, well-tested version of the TASTE framework. The project must have a plan for debugging and patching the middleware if issues are found.',
    opt_detection:
      'Perform long-duration, system-level stress testing to look for any rare, middleware-related failures.',
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
    opt_remarks: 'MOSAR D2.4, page 52, No evidence'
  },
  {
    id: 'FC_198',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'POGO Pin Connector',
    structure_nextLower: 'Spring Element',
    func_nextHigher: 'Provide a separable interface for power and data.',
    func_focus: 'Establish and maintain a compliant electrical connection.',
    func_nextLower:
      'Provide a specified contact force over the operational stroke of the pin.',
    fail_effect:
      'Spring force decreases over time | Pin does not make contact with sufficient force | Contact resistance increases | Overheating on power pins or poor signal integrity on data lines.',
    fail_severity: 7,
    fail_mode: 'Contact force too low',
    fail_cause:
      'Stress relaxation of the spring material after being held in a compressed state at high temperature for a long duration.',
    risk_prevention:
      'The interface must be reusable and operate over a wide temperature range. (OpR_002, EnvR_003)',
    risk_occurrence: 4,
    risk_detection:
      'None identified in documents. This is a long-term aging effect not typically found in short-term tests.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_filter: '',
    opt_preventive:
      'Select a high-performance spring alloy (e.g., Beryllium Copper) known for its resistance to stress relaxation at high temperatures.',
    opt_detection:
      'Perform an accelerated aging test by holding a set of POGO pins compressed at the maximum operating temperature for an extended period, then measure the resulting spring force.',
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
    opt_remarks: 'D2.5, OpR_002, page 25, D2.5, EnvR_003, page 28'
  },
  {
    id: 'FC_018',
    history: '',
    structure_nextHigher: 'HOTDOCK Structure',
    structure_focus: 'Mounting Interface',
    structure_nextLower: 'M3 Mounting Bolts',
    func_nextHigher:
      'Provide a mechanical connection to the module, spacecraft bus, or robotic end-effector.',
    func_focus:
      'Transfer all operational and launch loads between the HOTDOCK and the parent structure.',
    func_nextLower:
      'Provide clamping force to secure the HOTDOCK interface, with sufficient strength to withstand shear and tensile loads.',
    fail_effect:
      'Mounting bolt fails due to fatigue | Clamping force is lost | The interface becomes loose and can no longer transfer loads correctly | Catastrophic structural failure, liberation of the HOTDOCK unit from the spacecraft.',
    fail_severity: 10,
    fail_mode: 'Fails to maintain structural connection',
    fail_cause:
      'Fatigue failure of a mounting bolt due to under-torquing during assembly, leading to excessive cyclic loading during launch vibration.',
    risk_prevention:
      'The interface is required to withstand launch loads (FuncR_007) and operational loads (FuncR_008). Design safety factors are required (DesR_014).',
    risk_occurrence: 3,
    risk_detection:
      'Verification is by Analysis and Test. A static pull test or vibration test would be part of the verification.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Create a detailed assembly procedure that specifies the use of a calibrated torque wrench for all structural fasteners and includes independent inspection verification of torque application.',
    opt_detection:
      'Perform a modal survey and sine vibration test on the integrated assembly to validate the structural analysis and ensure the mounting interface performs as expected.',
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
    opt_remarks:
      'D2.5, FuncR_007, page 11, No assembly procedure document cited'
  },
  {
    id: 'FC_055',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Locking Mechanism',
    structure_focus: 'Peripheral Locking Elements',
    structure_nextLower: 'Actuated Internal Ring',
    func_nextHigher: 'Implement a locking mechanism.',
    func_focus: 'Engage with the mated HOTDOCK to create a secure connection.',
    func_nextLower:
      'Move the steel balls radially into their locking positions.',
    fail_effect:
      'Ring fractures due to overload | Locking balls are no longer constrained | The locking mechanism fails and cannot support loads | Catastrophic failure of the interface, separation of modules.',
    fail_severity: 10,
    fail_mode: 'Fails to transfer mechanical load',
    fail_cause:
      'Ultimate stress failure of the actuated internal ring due to an extreme, un-commanded torque event from the robotic manipulator arm.',
    risk_prevention:
      'The interface is required to withstand 250Nm bending moment and 400N forces (FuncR_008).',
    risk_occurrence: 3,
    risk_detection:
      'Verification is by Analysis and Testing. A proof load test would be performed.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'The robotic manipulator control system must include torque\/force limiting functions to prevent it from applying loads that exceed the structural limits of the HOTDOCK interface.',
    opt_detection:
      'Perform a combined load test on the mated interface, applying axial, radial, and bending loads simultaneously up to proof levels to verify structural integrity.',
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
    opt_remarks:
      'D2.5, FuncR_008, page 12, No specific robotic fault analysis cited'
  },
  {
    id: 'FC_100',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Structure',
    structure_focus: 'Housing',
    structure_nextLower: 'Material Flammability',
    func_nextHigher: 'Provide the main structure and enclosure.',
    func_focus: 'Safely contain all internal components.',
    func_nextLower: 'Materials shall be flame retardant (DesR_018).',
    fail_effect:
      'A non-metallic internal component is not flame retardant | In the event of an electrical short circuit that causes ignition, the fire propagates | Catastrophic loss of the module, and a major safety hazard, especially in a manned environment.',
    fail_severity: 10,
    fail_mode: 'Propagates fire',
    fail_cause:
      'An internal non-metallic component (e.g., a plastic insulator or cable jacket) does not meet the required flammability rating.',
    risk_prevention:
      'DesR_018 requires materials to be flame retardant for all components (harness, electronics, lubricants). Verification is by Analysis.',
    risk_occurrence: 2,
    risk_detection:
      'Material properties are reviewed as part of the design process.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Maintain a detailed materials and processes list for the entire design, and require that all selected materials be verified against NASA or ESA flammability standards.',
    opt_detection:
      'Perform flammability testing on any non-standard materials that do not have existing flight qualification data.',
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
    opt_remarks: 'D2.5, DesR_018, page 22, No specific materials list cited'
  },
  {
    id: 'FC_028',
    history: '',
    structure_nextHigher: 'HOTDOCK Electrical Interface',
    structure_focus: 'Overcurrent Protection Circuitry',
    structure_nextLower: 'Current Sense Resistor',
    func_nextHigher: 'Provide electrical protection and power switching.',
    func_focus:
      'Incorporate overcurrent, overvoltage, and thermal protection (FuncR_015).',
    func_nextLower:
      'Provide a voltage proportional to the current flowing through it for measurement by the controller.',
    fail_effect:
      'Sense resistor fractures (fails open) | The controller reads zero current, disabling the overcurrent protection | A subsequent short circuit or motor stall will not be detected | Uncontrolled current flow could cause catastrophic damage to the motor, harness, or power source.',
    fail_severity: 9,
    fail_mode: 'Fails to detect overcurrent condition',
    fail_cause:
      'Fracture of the resistive element due to thermal shock from a rapid, high-current event exceeding its pulse rating.',
    risk_prevention:
      'FuncR_015 requires overcurrent protection. This implies selection of components rated for the application.',
    risk_occurrence: 3,
    risk_detection:
      'Verification is by Testing. A specific test would be needed to validate the protection feature.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Select a current sense resistor with a high pulse-withstanding capability and perform an analysis to ensure it can survive worst-case inrush and short-circuit current for the time it takes the protection to act.',
    opt_detection:
      'Perform destructive testing on a prototype controller board to validate the overcurrent protection works as designed and components fail safely.',
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
    opt_remarks: 'D2.5, FuncR_015, page 13, No specific test plan cited'
  },
  {
    id: 'FC_044',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Microcontroller',
    structure_nextLower: 'Internal Oscillator\/Clock',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus:
      'Execute firmware at a defined speed to perform real-time tasks.',
    func_nextLower:
      'Provide a stable clock signal for the processor core and peripherals.',
    fail_effect:
      'Clock signal becomes unstable or stops | Processor halts or operates at an incorrect speed | Controller hangs or behaves erratically | Loss of all HOTDOCK functionality.',
    fail_severity: 9,
    fail_mode: 'Firmware hangs',
    fail_cause:
      'Failure of the internal oscillator circuit due to aging or a radiation-induced latch-up event.',
    risk_prevention:
      'Component selection is critical. Use of space-qualified microcontrollers is implied by EnvR_001.',
    risk_occurrence: 3,
    risk_detection:
      'A watchdog timer would detect the hang and reset the device. The device would fail to respond to commands.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Implement an external, radiation-hardened oscillator as the primary clock source for the microcontroller, in addition to the internal one, with a clock-failure-detection circuit.',
    opt_detection:
      'Perform a failure modes and effects analysis (FMEA) at the component level for the microcontroller to identify all critical internal blocks and assess their reliability.',
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
    opt_remarks:
      'D2.5, EnvR_001, page 28, No specific component selection criteria in documents'
  },
  {
    id: 'FC_073',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Structure',
    structure_focus: 'Main Housing and Cover',
    structure_nextLower: 'Structural Material (Aluminum Alloy)',
    func_nextHigher: 'Provide the main structure and enclosure.',
    func_focus: 'Maintain structural integrity throughout the mission.',
    func_nextLower:
      'Provide high strength-to-weight ratio and resistance to corrosion cracking.',
    fail_effect:
      'A crack initiates and propagates through the structure | Structural failure | Loss of component alignment, potential liberation of parts.',
    fail_severity: 9,
    fail_mode: 'Structural integrity is lost',
    fail_cause:
      'Stress corrosion cracking (SCC) of a high-strength aluminum alloy due to exposure to a corrosive environment (e.g., ground storage in humid air) while under sustained stress from assembly.',
    risk_prevention:
      'DesR_017 requires selected materials to be crack resistant. Verification is by Analysis.',
    risk_occurrence: 3,
    risk_detection:
      'Analysis is performed. Non-destructive inspection (e.g., dye penetrant) after manufacturing would find initial flaws.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Select an aluminum alloy with high resistance to stress corrosion cracking (e.g., 6061-T6 or 7075-T73 instead of 7075-T6) for all primary structural components.',
    opt_detection:
      'Implement proper long-term storage procedures, including controlled humidity environments and periodic inspections, for all flight hardware.',
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
    opt_remarks: 'D2.5, DesR_017, page 22, No specific material selection cited'
  },
  {
    id: 'FC_001',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Brushless DC Motor (MAXON EC 32 flat)',
    structure_nextLower: 'Motor Windings',
    func_nextHigher:
      'Rotate locking ring to engage\/disengage mechanical latches within specified time and torque limits.',
    func_focus:
      'Generate rotational torque by converting electrical energy into a magnetic field, providing a minimum torque for worst-case lifetime conditions.',
    func_nextLower:
      'Conduct current through insulated copper coils to create a rotating magnetic field, with insulation rated for max operating voltage and temperature.',
    fail_effect:
      'Motor winding shorts | Motor cannot produce required torque or draws excessive current | Locking mechanism fails to engage or disengage | Inability to connect\/disconnect a spacecraft module | Mission failure.',
    fail_severity: 8,
    fail_mode: 'Fails to generate sufficient torque',
    fail_cause:
      'Inter-turn short circuit in stator winding due to insulation breakdown from thermal stress cycling (-55°C to +85°C).',
    risk_prevention:
      "Motor selected based on manufacturer's specifications for operating temperature range. Design Requirement DesR_013 specifies motorization must provide minimum torque for worst lifetime conditions.",
    risk_occurrence: 5,
    risk_detection:
      'Functional testing of the actuation sequence is specified as the verification method for multiple requirements (e.g., FuncR_005, FuncR_006). Motor current telemetry is available per FuncR_029.',
    risk_detScore: 4,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Implement a motor derating analysis based on ECSS standards for thermal and voltage margins to ensure insulation longevity.',
    opt_detection:
      'Perform a motor characterization test over the full temperature range (-55°C to +85°C) in a thermal vacuum chamber, monitoring for torque degradation and current anomalies.',
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
    opt_remarks:
      'D2.5, DesR_013, page 21, D2.5, FuncR_005\/006 Verification, page 11'
  },
  {
    id: 'FC_003',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Gearing System',
    structure_nextLower: 'Gear Teeth Surfaces',
    func_nextHigher:
      'Rotate locking ring to engage\/disengage mechanical latches within specified time and torque limits.',
    func_focus:
      'Transmit and amplify torque from the motor to the barrel-cam mechanism with minimal backlash.',
    func_nextLower:
      'Maintain surface integrity to engage mating gear teeth and transfer load without slipping or binding, designed with lubrication per DesR_012.',
    fail_effect:
      'Gear teeth wear or galling | Increased friction and backlash in the geartrain | Motor requires higher current, mechanism becomes imprecise or jams | Locking mechanism fails to fully engage or disengage | Inability to connect\/disconnect a spacecraft module.',
    fail_severity: 8,
    fail_mode: 'Mechanism jams',
    fail_cause:
      'Cold welding (adhesive wear) between gear teeth surfaces due to lubricant outgassing and failure in the vacuum environment.',
    risk_prevention:
      'Design requirement DesR_012 states that sliding surfaces should have lubrication and only space-grade lubricants must be used. Material selection intended to be compatible.',
    risk_occurrence: 5,
    risk_detection:
      "Requirement for reusability (OpR_002) implies life testing. Verification is listed as 'Testing'.",
    risk_detScore: 6,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Specify and verify the use of a vacuum-rated dry film lubricant (e.g., MoS2) on all gear contact surfaces, with application process control.',
    opt_detection:
      'Perform a life test of the actuation mechanism (1000 cycles per OpR_002) in a thermal vacuum chamber, followed by disassembly and inspection of gear teeth for wear.',
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
    opt_remarks: 'D2.5, DesR_012, page 20, D2.5, OpR_002, page 25'
  },
  {
    id: 'FC_013',
    history: '',
    structure_nextHigher: 'HOTDOCK Thermal Interface',
    structure_focus: 'Hydraulic Fluid Connector',
    structure_nextLower: 'Internal Seal',
    func_nextHigher:
      'Provide an active thermal interface for fluid transfer, enabling heat exchange up to 1400 W.',
    func_focus:
      'Form a leak-tight connection for fluid circulation between two mated HOTDOCKs.',
    func_nextLower:
      'Deform upon connection to create a seal that prevents fluid leakage in the vacuum and temperature environment of space.',
    fail_effect:
      'Seal fails to form a tight connection | Fluid leaks from the connector | Loss of coolant, contamination of nearby surfaces | Inability to perform thermal transfer, potential damage to sensitive optics or electronics from contamination.',
    fail_severity: 8,
    fail_mode: 'Fails to seal fluid (leaks)',
    fail_cause:
      'Loss of seal elasticity and compliance at extreme low temperature (-55°C), preventing proper sealing.',
    risk_prevention:
      'The design must withstand a temperature range between -55°C and +85°C (EnvR_003). The thermal interface is based on a previously developed design (D2.5, pg 42).',
    risk_occurrence: 5,
    risk_detection:
      'Leakage testing has been successfully performed on the baseline connector design (D2.5, pg 42).',
    risk_detScore: 4,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Select a seal material specifically rated for space applications with a glass transition temperature well below the minimum operating temperature of -55°C.',
    opt_detection:
      'Perform mate\/de-mate and leakage testing of the hydraulic connectors within a thermal chamber at the temperature extremes of -55°C and +85°C.',
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
    opt_remarks: 'D2.5, EnvR_003, page 28, D2.5, Section 5.3, page 42'
  },
  {
    id: 'FC_014',
    history: '',
    structure_nextHigher: 'HOTDOCK Thermal Interface',
    structure_focus: 'Flexible Metallic Bellows',
    structure_nextLower: 'Bellows Wall',
    func_nextHigher:
      'Provide an active thermal interface for fluid transfer, enabling heat exchange up to 1400 W.',
    func_focus:
      'Accommodate the required stroke for connection of the whole HOTDOCK while maintaining a sealed fluid path.',
    func_nextLower:
      'Flex and extend to allow connector motion while being fatigue-resistant and impermeable to the working fluid.',
    fail_effect:
      'Fatigue crack develops in the bellows wall | Fluid leaks from the thermal interface | Loss of coolant, contamination | Loss of thermal control function.',
    fail_severity: 8,
    fail_mode: 'Fails to contain fluid (leaks)',
    fail_cause:
      'High-cycle fatigue cracking due to vibration during launch, exceeding the design life of the bellows.',
    risk_prevention:
      'The interface must be compliant with launch loads (FuncR_007). The design is based on existing hardware from OG5\/SIROM.',
    risk_occurrence: 4,
    risk_detection: 'Verification for launch loads is by testing (FuncR_007).',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Perform a fatigue analysis on the bellows design based on the expected launch vibration spectrum and required stroke cycles to verify design margin.',
    opt_detection:
      'Conduct a vibration test on the thermal interface assembly followed by a helium leak check to verify the integrity of the bellows and seals.',
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
    opt_remarks: 'D2.5, FuncR_007, page 11, D2.5, Section 5.3, page 42'
  },
  {
    id: 'FC_017',
    history: '',
    structure_nextHigher: 'HOTDOCK Harnessing',
    structure_focus: 'Internal Wiring Harness',
    structure_nextLower: 'Wire Insulation',
    func_nextHigher:
      'Connect power and data buses between the controller, motor, sensors, and connector plate.',
    func_focus:
      'Route electrical signals and power between internal components reliably.',
    func_nextLower:
      'Provide dielectric separation between conductors and prevent short circuits to the chassis.',
    fail_effect:
      'Insulation is breached by chafing against a sharp edge | Conductor shorts to chassis | Power supply shorts, blowing a fuse or triggering overcurrent protection | Loss of power to the entire HOTDOCK unit.',
    fail_severity: 8,
    fail_mode: 'Short circuit to chassis',
    fail_cause:
      'Abrasion of wire insulation due to vibration-induced chafing against an un-deburred edge of the aluminum housing.',
    risk_prevention:
      'Human Factors requirement HumR_001 requires no sharp edges or corners, which implies good manufacturing practice. Materials must have low outgassing (DesR_019).',
    risk_occurrence: 4,
    risk_detection:
      'Verification for HumR_001 is by Inspection. A final assembly inspection would check for proper harness routing.',
    risk_detScore: 4,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Implement a formal harness design and routing plan. All harness pass-throughs in the structure must be fitted with protective grommets. All wires must be secured with space-grade cable ties.',
    opt_detection:
      'Perform a post-vibration continuity and insulation resistance test (Hipot test) between all conductors and the chassis to detect any insulation damage.',
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
    opt_remarks: 'D2.5, HumR_001, page 29, No specific harness standard cited'
  },
  {
    id: 'FC_021',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Brushless DC Motor (MAXON EC 32 flat)',
    structure_nextLower: 'Rotor Bearings',
    func_nextHigher:
      'Rotate locking ring to engage\/disengage mechanical latches within specified time and torque limits.',
    func_focus:
      'Generate rotational torque by converting electrical energy into a magnetic field.',
    func_nextLower:
      'Support the motor rotor, allowing low-friction rotation while maintaining alignment.',
    fail_effect:
      'Bearing lubricant degrades or is expelled in vacuum | Bearing friction increases significantly or seizes | Motor stalls or draws excessive current to overcome friction | Locking mechanism fails to operate.',
    fail_severity: 8,
    fail_mode: 'Fails to rotate freely (seizure)',
    fail_cause:
      'Degradation and outgassing of bearing grease in the space vacuum environment, leading to seizure.',
    risk_prevention:
      'Design requirement DesR_012 specifies the use of space-grade lubricants for sliding surfaces, which applies to bearings as well.',
    risk_occurrence: 5,
    risk_detection:
      'Life testing (implied by OpR_002) would uncover premature wear.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Procure motors with bearings specifically prepared for vacuum service, using dry lubricants (e.g., MoS2) or very low outgassing grease (e.g., Braycote).',
    opt_detection:
      'Perform a vacuum bake-out and residual gas analysis (RGA) on the motor to verify low outgassing characteristics prior to integration.',
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
    opt_remarks: 'D2.5, DesR_012, page 20, D2.5, OpR_002, page 25'
  },
  {
    id: 'FC_033',
    history: '',
    structure_nextHigher: 'HOTDOCK Power Interface',
    structure_focus: 'Power Distribution Unit (PDU)',
    structure_nextLower: 'Low-level Voltage Rails',
    func_nextHigher: 'Provide power to internal components.',
    func_focus:
      'Provide low-level voltage power rails to supply the controller, sensors, and motor drive (FuncR_013).',
    func_nextLower:
      'Maintain stable voltage (e.g. 5V) under varying load conditions.',
    fail_effect:
      'Voltage rail becomes unstable or drops out | Controller or sensors reset or behave erratically | Loss of control or telemetry.',
    fail_severity: 8,
    fail_mode: 'Voltage out of regulation',
    fail_cause:
      "Instability in the DC\/DC converter's control loop caused by aging of output capacitors (ESR increase) over the mission life.",
    risk_prevention: 'FuncR_013 mandates the provision of these rails.',
    risk_occurrence: 4,
    risk_detection:
      'Verification by Testing. Controller supply voltage is monitored per FuncR_029.',
    risk_detScore: 3,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Perform a Worst Case Circuit Analysis (WCCA) on the power supply design, including end-of-life component tolerances, to ensure stability margin.',
    opt_detection:
      'Perform an accelerated life test on the controller, periodically checking the stability and regulation of all power rails.',
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
    opt_remarks: 'D2.5, FuncR_013, page 13, D2.5, FuncR_029, page 17'
  },
  {
    id: 'FC_038',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'Connector Plate Actuation',
    structure_nextLower: 'Drive Mechanism Linkage',
    func_nextHigher: 'Provide a separable interface for power and data.',
    func_focus:
      'Translate the connector plate through the same drive mechanism as the locking system.',
    func_nextLower:
      'Ensure correct timing sequence of deployment relative to the locking ring.',
    fail_effect:
      'Linkage for connector plate jams | Connector plate fails to deploy or retract | No electrical connection is made, or pins are damaged if locking occurs before retraction.',
    fail_severity: 8,
    fail_mode: 'Fails to deploy connector plate',
    fail_cause:
      'Binding in the linkage due to thermal distortion across the assembly (differential expansion) at temperature extremes.',
    risk_prevention:
      'DesR_005 requires the design to account for worst-case combinations of transient temperature and differential expansion.',
    risk_occurrence: 5,
    risk_detection:
      'Analysis and Testing are listed as verification for DesR_005.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Perform a detailed thermal and structural analysis of the actuation mechanism to ensure clearances are maintained at temperature extremes.',
    opt_detection:
      'Execute the full mating and de-mating sequence in a thermal chamber at the hot and cold operational limits to verify function.',
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
    opt_remarks: 'D2.5, DesR_005, page 18-19, No specific test plan cited'
  },
  {
    id: 'FC_041',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Brushless DC Motor (MAXON EC 32 flat)',
    structure_nextLower: 'Motor Shaft',
    func_nextHigher:
      'Rotate locking ring to engage\/disengage mechanical latches.',
    func_focus:
      'Generate and transmit rotational torque to the gearing system.',
    func_nextLower:
      'Transmit torque without yielding or fracturing under worst-case loads.',
    fail_effect:
      'Motor shaft fractures | Mechanical link between motor and gearbox is broken | Motor spins freely but no torque is transmitted | Locking mechanism is inoperable.',
    fail_severity: 8,
    fail_mode: 'Fails to transmit torque',
    fail_cause:
      'Fatigue failure of the motor shaft due to high cycle stress from repeated actuation cycles combined with vibrational loads.',
    risk_prevention:
      'DesR_013 requires the motorization to provide minimum required torque, implying a robust design. Safety factors are required per DesR_014.',
    risk_occurrence: 3,
    risk_detection: 'Life testing is specified (OpR_002).',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Perform a fatigue life analysis on the motor shaft based on expected torque profiles and cycle counts to ensure a positive margin of safety.',
    opt_detection:
      'During life testing, periodically monitor motor current and acoustic emissions to detect any early signs of mechanical degradation.',
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
    opt_remarks: 'D2.5, DesR_013, page 21, D2.5, OpR_002, page 25'
  },
  {
    id: 'FC_046',
    history: '',
    structure_nextHigher: 'HOTDOCK Power Interface',
    structure_focus: 'Overvoltage Protection',
    structure_nextLower: 'Transient Voltage Suppressor (TVS)',
    func_nextHigher: 'Provide electrical protection.',
    func_focus:
      'Incorporate an overcurrent and overvoltage protection (FuncR_015).',
    func_nextLower:
      'Clamp the input voltage to a safe level during transient events.',
    fail_effect:
      'TVS diode fails short | The main power input is shorted to ground | A fuse blows or the main power system trips off-line | Loss of power to the HOTDOCK unit.',
    fail_severity: 8,
    fail_mode: 'Fails to provide power (input short)',
    fail_cause:
      'Failure of the TVS diode due to an energy transient that exceeds its maximum rated absorption capability.',
    risk_prevention:
      'FuncR_015 requires the protection. This implies the circuit is designed to handle expected transients.',
    risk_occurrence: 4,
    risk_detection: 'Verification is by Testing.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Perform a power system transient analysis to define the worst-case voltage and energy transients, and select a TVS diode with sufficient margin.',
    opt_detection:
      'Conduct transient susceptibility testing by injecting specified voltage spikes onto the power line and verifying that the unit survives and the protection clamps correctly.',
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
    opt_remarks:
      'D2.5, FuncR_015, page 13, No specific transient specification cited'
  },
  {
    id: 'FC_067',
    history: '',
    structure_nextHigher: 'HOTDOCK Thermal Interface',
    structure_focus: 'Hydraulic Fluid Connector',
    structure_nextLower: 'Connector Body',
    func_nextHigher: 'Provide an active thermal interface.',
    func_focus: 'Form a leak-tight connection for fluid circulation.',
    func_nextLower: 'Provide the structural housing for the seals and valves.',
    fail_effect:
      'Connector body cracks | Fluid leak | Loss of coolant, contamination.',
    fail_severity: 8,
    fail_mode: 'Fails to contain fluid (leaks)',
    fail_cause:
      'Stress corrosion cracking of the aluminum connector body material due to long-term exposure to the coolant fluid and mechanical stress.',
    risk_prevention:
      'DesR_017 requires selected materials to be crack resistant. The baseline design has been tested for leakage.',
    risk_occurrence: 3,
    risk_detection: 'Verification for DesR_017 is by Analysis.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Select a coolant fluid and an aluminum alloy that are known to be compatible and not susceptible to stress corrosion cracking, based on NASA\/ESA material databases.',
    opt_detection:
      'Perform an accelerated aging test by exposing a stressed connector body to the selected coolant at elevated temperature for an extended period, followed by inspection for micro-cracks.',
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
    opt_remarks: 'D2.5, DesR_017, page 22, D2.5, Section 5.3, page 42'
  },
  {
    id: 'FC_068',
    history: '',
    structure_nextHigher: 'HOTDOCK Power Interface',
    structure_focus: 'Bidirectional Power Switch',
    structure_nextLower: 'MOSFETs',
    func_nextHigher: 'Control current flow at the interface.',
    func_focus: 'Incorporate a bidirectional power switch.',
    func_nextLower: 'Act as solid-state relays to control current flow.',
    fail_effect:
      'MOSFET fails open | The switch cannot conduct current | Power cannot be transferred through the interface.',
    fail_severity: 8,
    fail_mode: 'Fails to conduct current (open circuit)',
    fail_cause:
      'Wire bond failure inside the MOSFET package due to thermo-mechanical stress from power cycling.',
    risk_prevention:
      'FuncR_017 requires the switch. Components are selected to meet requirements.',
    risk_occurrence: 4,
    risk_detection:
      'Verification is by Testing. A failure to power up a module would be detected.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Select power MOSFETs in hermetically sealed or space-qualified packages with a proven history of reliability in power cycling applications.',
    opt_detection:
      'Perform a power cycling life test on the switch component to validate its reliability for the expected number of cycles and temperature swing.',
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
    opt_remarks:
      'D2.5, FuncR_017, page 14, No specific component selection criteria in documents'
  },
  {
    id: 'FC_074',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'POGO Pin Connector',
    structure_nextLower: 'Pin-to-Pad Alignment',
    func_nextHigher: 'Provide a separable interface for power and data.',
    func_focus: 'Establish a compliant electrical connection.',
    func_nextLower:
      'Ensure each pin lands on the center of its corresponding pad.',
    fail_effect:
      'Pin lands on the edge of a pad, or on the solder mask between pads | High contact resistance, potential for shorting to adjacent pad | Intermittent connection, data errors, or short circuits.',
    fail_severity: 8,
    fail_mode: 'Fails to establish reliable connection',
    fail_cause:
      'Excessive misalignment during mating that exceeds the capture range of the form-fit geometry, caused by a robotic arm control error.',
    risk_prevention:
      'The form-fit geometry provides self-guidance (D2.5, pg 31). The POGO design is tolerant to misalignment (D2.5, pg 40).',
    risk_occurrence: 5,
    risk_detection:
      'Proximity sensors are used to detect good alignment before mating (OpR_008).',
    risk_detScore: 4,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Enlarge the diameter of the PCB pads to provide a larger landing zone for the POGO pins, increasing tolerance to misalignment.',
    opt_detection:
      'During robotic mating tests, use a camera to visually monitor the pin-to-pad alignment at the moment of contact to characterize the actual performance.',
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
    opt_remarks: 'D2.5, Section 3.1, page 30, D2.5, OpR_008, page 26'
  },
  {
    id: 'FC_085',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Gearing System',
    structure_nextLower: 'Planetary Gear Stage',
    func_nextHigher: 'Transmit and amplify torque.',
    func_focus: 'Provide a high gear reduction ratio in a compact volume.',
    func_nextLower:
      'Distribute the load among multiple planet gears to increase torque capacity.',
    fail_effect:
      'A planet gear tooth fractures | Debris from the fracture jams the rest of the gearbox | The mechanism seizes instantly.',
    fail_severity: 8,
    fail_mode: 'Mechanism jams',
    fail_cause:
      "Overload failure of a gear tooth due to a sudden shock load (e.g., from a robotic arm collision) that exceeds the material's ultimate strength.",
    risk_prevention:
      'DesR_005 requires a robust design. The interface must withstand operational loads (FuncR_008).',
    risk_occurrence: 3,
    risk_detection: 'Verification by Analysis and Testing.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Select a gearbox with a high shock load rating. Perform a system-level analysis to determine the maximum credible shock load and ensure the gearbox provides sufficient margin.',
    opt_detection:
      'Implement a shock test as part of the qualification program to verify the robustness of the actuation mechanism.',
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
    id: 'FC_101',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Brushless DC Motor (MAXON EC 32 flat)',
    structure_nextLower: 'Commutation Logic',
    func_nextHigher:
      'Rotate locking ring to engage\/disengage mechanical latches.',
    func_focus:
      'Generate rotational torque by converting electrical energy into a magnetic field.',
    func_nextLower:
      'Sequentially energize motor windings based on Hall sensor feedback to create continuous rotation.',
    fail_effect:
      'Incorrect commutation sequence implemented in firmware | Motor runs backward, jitters, or has very low torque | Mechanism cannot be actuated.',
    fail_severity: 8,
    fail_mode: 'Fails to rotate in commanded direction',
    fail_cause:
      'A software bug in the firmware maps the Hall sensor states to the incorrect motor phase outputs.',
    risk_prevention:
      "The controller is designed for field-oriented control which requires correct commutation. The design is based on the motor's datasheet.",
    risk_occurrence: 4,
    risk_detection:
      'The failure would be immediately obvious during the first functional test of the motor.',
    risk_detScore: 2,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Develop a specific unit test for the commutation logic that uses a simulated set of Hall sensor inputs and verifies the correct phase outputs are generated.',
    opt_detection:
      'Create a documented procedure for the initial motor integration test, which includes verifying the direction of rotation and the correct phasing of all sensors and motor leads.',
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
    opt_remarks:
      'D2.5, Section 6.1, page 45, No specific firmware test plan cited'
  },
  {
    id: 'FC_103',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Microcontroller',
    structure_nextLower: 'GPIO Pin',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus:
      'Control various hardware functions like motor driver enables, sensor selects, etc.',
    func_nextLower: 'Drive a digital output pin to a high or low logic level.',
    fail_effect:
      "GPIO pin fails (e.g., due to ESD) and is stuck low | The signal it controls (e.g., 'motor_enable') is permanently disabled | The motor cannot be activated | Actuation mechanism is inoperable.",
    fail_severity: 8,
    fail_mode: 'Fails to enable a peripheral',
    fail_cause:
      'Electrical overstress from an ESD event during handling damages the output driver of a GPIO pin.',
    risk_prevention:
      'The controller has 114 GPIOs (D2.5, pg 46). Standard ESD handling procedures are assumed.',
    risk_occurrence: 4,
    risk_detection: 'A functional test of the specific peripheral would fail.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Implement strict ESD control measures during all stages of assembly and handling. Add current-limiting resistors in series with critical GPIO signals to provide some protection.',
    opt_detection:
      'Develop a comprehensive BIST routine that toggles and reads back non-critical GPIO pins to check for functionality at startup.',
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
    opt_remarks: 'D2.5, Section 6.2, page 46, No ESD control plan cited'
  },
  {
    id: 'FC_105',
    history: '',
    structure_nextHigher: 'HOTDOCK Thermal Interface',
    structure_focus: 'Hydraulic Fluid Connector',
    structure_nextLower: 'Fluid Path',
    func_nextHigher: 'Provide an active thermal interface.',
    func_focus: 'Allow for circulation of coolant fluid.',
    func_nextLower: 'Provide an unobstructed path for fluid flow.',
    fail_effect:
      'A blockage occurs in the fluid path | Fluid flow is restricted or stopped | Heat cannot be transferred | The component being cooled (e.g., PWS) overheats.',
    fail_severity: 8,
    fail_mode: 'Fails to circulate fluid (blocked)',
    fail_cause:
      'A piece of contamination (e.g., a burr from machining, a piece of sealant) breaks loose and becomes lodged in a narrow channel within the fluid connector.',
    risk_prevention:
      'The thermal transfer testing was performed on a separate setup (D2.5, pg 42). This implies the design is functional. Clean assembly is required.',
    risk_occurrence: 4,
    risk_detection:
      'A flow test with pressure drop measurement would detect a blockage.',
    risk_detScore: 3,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Implement a rigorous cleaning and inspection procedure for all components of the fluid loop before final assembly. The loop should be assembled in a cleanroom environment.',
    opt_detection:
      'After assembly, perform a full flow test of the thermal loop while monitoring the pressure drop. A higher-than-expected pressure drop indicates a restriction.',
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
    opt_remarks:
      'D2.5, Section 5.3, page 42, No specific cleanliness procedure cited'
  },
  {
    id: 'FC_112',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Firmware',
    structure_nextLower: 'Fault Recovery Logic',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus: 'Recover from a fault state upon command.',
    func_nextLower:
      "Upon receiving a 'Fault Recovery' command, trigger automatic recovery mechanisms to return to a known state (D2.5, pg 34).",
    fail_effect:
      'The recovery logic contains a bug | Attempting to recover from a fault puts the system into a worse, unrecoverable state | The interface is permanently disabled until a full power cycle.',
    fail_severity: 8,
    fail_mode: 'Fails to recover from fault',
    fail_cause:
      'The fault recovery sequence does not properly re-initialize all hardware peripherals, leaving one in an invalid state that prevents normal operation.',
    risk_prevention:
      'The state machine includes a fault state and recovery path.',
    risk_occurrence: 5,
    risk_detection:
      'This would be tested as part of the fault injection test plan.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Design the fault recovery path to perform a full hardware re-initialization sequence, identical to the power-on boot sequence, to ensure a known good state.',
    opt_detection:
      "For every fault condition tested in the fault injection plan, verify that the 'Fault Recovery' command successfully returns the system to a fully operational Idle state.",
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
    opt_remarks: 'D2.5, Section 4.2, page 34, No specific test plan cited'
  },
  {
    id: 'FC_115',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Gearing System',
    structure_nextLower: 'Gear Material',
    func_nextHigher: 'Transmit and amplify torque.',
    func_focus: 'Transmit torque reliably throughout the mission life.',
    func_nextLower:
      'The gear material must have sufficient fatigue strength to withstand the cyclic loading.',
    fail_effect:
      'A gear tooth fails due to fatigue | The gearbox jams or fails to transmit torque | Actuation fails.',
    fail_severity: 8,
    fail_mode: 'Fails to transmit torque (gear fracture)',
    fail_cause:
      'Fatigue failure of a gear tooth after accumulating more stress cycles than the material was designed for.',
    risk_prevention:
      'The interface is required to be reusable for 100-1000 cycles (OpR_002), which sets the life requirement.',
    risk_occurrence: 4,
    risk_detection: 'A life test is the primary verification method.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Select a gear material (e.g., hardened steel) with a known S-N (stress vs. number of cycles) curve. Perform a fatigue analysis to verify a positive life margin of at least 4x the required cycles.',
    opt_detection:
      'Perform a life test for at least 2x the maximum required cycles (2000 cycles), followed by disassembly and non-destructive inspection (e.g., dye penetrant) of the gear teeth.',
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
    opt_remarks: 'D2.5, OpR_002, page 25, No specific material list cited'
  },
  {
    id: 'FC_119',
    history: '',
    structure_nextHigher: 'HOTDOCK Structure',
    structure_focus: 'Main Housing and Cover',
    structure_nextLower: 'Alignment Features',
    func_nextHigher: 'Provide the main structure and enclosure.',
    func_focus: 'Ensure precise alignment of all sub-assemblies.',
    func_nextLower:
      'Use dowel pins or machined features to locate components relative to each other.',
    fail_effect:
      'Alignment features are missing or out of tolerance | Internal assemblies (e.g., gearbox, barrel-cam) are misaligned | Mechanism binds or jams.',
    fail_severity: 8,
    fail_mode: 'Mechanism binds',
    fail_cause:
      'Tolerance stack-up across multiple components prevents alignment pins from engaging, leading to a forced assembly that is internally stressed and misaligned.',
    risk_prevention:
      'A robust design is required (DesR_005). Proper manufacturing and assembly are assumed.',
    risk_occurrence: 4,
    risk_detection:
      'The problem would be discovered during assembly when parts do not fit together correctly.',
    risk_detScore: 2,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Perform a full geometric dimensioning and tolerancing (GD&T) analysis of the entire mechanical assembly to ensure that all parts will fit together under worst-case tolerance conditions.',
    opt_detection:
      'Use functional gauges during inspection of machined parts to verify that critical interface features and alignment holes are in the correct position.',
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
    opt_remarks: 'D2.5, DesR_005, page 18, No specific assembly drawings cited'
  },
  {
    id: 'FC_129',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Locking Mechanism',
    structure_focus: 'Locking Ring',
    structure_nextLower: 'Position Sensor Target',
    func_nextHigher: 'Implement a locking mechanism.',
    func_focus: 'Provide a target for the absolute position sensor to read.',
    func_nextLower:
      'A feature (e.g., a magnet, a patterned disc) attached to the locking ring that is read by the sensor.',
    fail_effect:
      "The sensor target detaches from the locking ring | The sensor can no longer read the ring's position | The controller loses position feedback | The system is inoperable.",
    fail_severity: 8,
    fail_mode: 'Fails to provide position feedback',
    fail_cause:
      'Failure of the adhesive bond holding a magnet onto the locking ring due to thermal cycling stress.',
    risk_prevention:
      'The design includes an absolute sensor driven by the gearing system (D2.5, pg 37).',
    risk_occurrence: 4,
    risk_detection:
      'A failure would be immediately detected by the controller as a loss of valid sensor signal.',
    risk_detScore: 3,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'In addition to adhesive, design a mechanical feature (e.g., a pocket or a clip) to positively retain the sensor target on the locking ring.',
    opt_detection:
      'Perform a spin test or vibration test on the locking ring assembly to verify the retention of the sensor target.',
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
    opt_remarks:
      'D2.5, Section 5.1.2, page 37, No specific assembly procedure cited'
  },
  {
    id: 'FC_138',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Gearing System',
    structure_nextLower: 'Gear Tooth',
    func_nextHigher: 'Transmit and amplify torque.',
    func_focus: 'Transmit torque from the motor to the barrel-cam mechanism.',
    func_nextLower: 'Transfer load between mating gears without failure.',
    fail_effect:
      'A gear tooth fractures at the root | The gear can no longer transmit torque, and the debris can jam the gearbox | The mechanism seizes instantly.',
    fail_severity: 8,
    fail_mode: 'Mechanism jams',
    fail_cause:
      "High-cycle fatigue crack initiation at the gear tooth root due to cyclic bending stress exceeding the material's endurance limit.",
    risk_prevention:
      'The interface must be reusable for 100-1000 cycles (OpR_002). Safety factors are required (DesR_014).',
    risk_occurrence: 4,
    risk_detection:
      'A life test is the primary method to detect fatigue failures.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Perform a gear tooth bending fatigue analysis (e.g., using AGMA standards) to verify sufficient life margin. Use shot peening to induce compressive residual stress at the tooth root.',
    opt_detection:
      'Perform a life test to at least 2x the required cycles, followed by non-destructive inspection (e.g., magnetic particle) of gear teeth to look for fatigue cracks.',
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
    opt_remarks: 'D2.5, OpR_002, page 25, D2.5, DesR_014, page 21'
  },
  {
    id: 'FC_140',
    history: '',
    structure_nextHigher: 'HOTDOCK Harnessing',
    structure_focus: 'External Connectors',
    structure_nextLower: 'Contact Retention Clip',
    func_nextHigher:
      'Provide interface for control, data, and power harnessing.',
    func_focus:
      'Provide a reliable, separable connection to the spacecraft harness.',
    func_nextLower:
      'Securely hold each electrical contact within the connector housing.',
    fail_effect:
      "A contact retention clip fails | The contact is pushed back into the housing during mating ('pin push-back') | No electrical connection is made | Open circuit on a critical power or data line.",
    fail_severity: 8,
    fail_mode: 'Fails to make electrical contact (open circuit)',
    fail_cause:
      'The plastic retention clip for a connector contact fractures due to embrittlement from radiation exposure or improper assembly.',
    risk_prevention:
      'None identified in documents. Use of space-grade connectors is standard practice.',
    risk_occurrence: 4,
    risk_detection:
      'A post-mate continuity check would detect the open circuit. A visual inspection of the connector face might show the pushed-back pin.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Use high-reliability space-grade connectors with robust contact retention systems. Perform a contact retention test (push\/pull force) on a sample of contacts as part of incoming inspection.',
    opt_detection:
      'Add a specific visual inspection step to check for any pushed-back or recessed contacts after every mating operation during ground testing.',
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
    opt_remarks: 'no evidence, no evidence'
  },
  {
    id: 'FC_153',
    history: '',
    structure_nextHigher: 'Spacecraft Module (e.g., SM3-BAT)',
    structure_focus: 'Central Power Distribution Unit (cPDU)',
    structure_nextLower: 'Latching Relay',
    func_nextHigher:
      'Provide a standard interface for power and data transfer within the modular spacecraft.',
    func_focus:
      'Route main 28V power from one HOTDOCK interface to another based on commands from the R-ICU, enabling power reconfiguration.',
    func_nextLower:
      'Maintain a selected power connection (on\/off) with low resistance and without continuous power consumption.',
    fail_effect:
      "Relay fails to change state (stuck open) | Power cannot be routed to a downstream module | The downstream module cannot be powered on | Inability to complete spacecraft assembly or use module's function | Mission failure.",
    fail_severity: 8,
    fail_mode: 'Fails to route power',
    fail_cause:
      'Welding of relay contacts due to switching under a high inrush current or short-circuit condition.',
    risk_prevention:
      'The cPDU is a core component for power reconfiguration. Its design includes relays controlled by the R-ICU via CAN bus. (D2.4, Figure 4-1)',
    risk_occurrence: 4,
    risk_detection:
      'The failure would be detected when the downstream module fails to power on and its voltage telemetry reads zero. cPDU TM includes channel status (D2.4, Table 4-1).',
    risk_detScore: 4,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Implement a soft-start circuit in the cPDU to limit inrush current during switching. Select relays with high current ratings and proven space heritage.',
    opt_detection:
      'Perform a fault-insertion test by shorting a power output and commanding the relay to close, verifying that protection trips and the relay does not weld.',
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
    opt_remarks:
      'MOSAR D2.4, Figure 4-1, page 26, MOSAR D2.4, Table 4-1, page 27'
  },
  {
    id: 'FC_154',
    history: '',
    structure_nextHigher: 'Spacecraft Module (e.g., SM1-DMS)',
    structure_focus: 'Reduced Instrument Control Unit (R-ICU)',
    structure_nextLower: 'SpaceWire Router IP (in MPSoC)',
    func_nextHigher:
      'Provide command, telemetry, data, and power interfaces for the spacecraft module.',
    func_focus:
      'Manage SpW routing and data communication functions, directing packets according to the network topology.',
    func_nextLower:
      'Forward incoming SpaceWire packets from one port to another based on the internal routing table.',
    fail_effect:
      "Router hangs or routing table is corrupted | Packets are lost or mis-routed | The OBC-S loses communication with the SM's payloads and HOTDOCK controller | Inability to command or monitor the module | Mission failure.",
    fail_severity: 8,
    fail_mode: 'Fails to route data packets',
    fail_cause:
      'A Single Event Upset (SEU) in the FPGA\/MPSoC memory corrupts the routing table or control registers of the software-defined SpW router.',
    risk_prevention:
      'The R-ICU is the local intelligence in the SM and manages SpW routing. The OBC-S updates routing tables via RMAP. (D2.4, Section 3.2.2.2 & 4.1.2)',
    risk_occurrence: 5,
    risk_detection:
      'A communication failure would be detected by the OBC-S via RMAP reply timeouts. (D2.4, Section 4.1.2.2)',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      "Implement error detection and correction (EDAC) or memory scrubbing on the router's configuration memory. The OBC-S could periodically refresh the routing tables.",
    opt_detection:
      'Perform fault injection testing on the R-ICU, corrupting its memory to verify that the system can detect the communication loss and attempt recovery.',
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
    opt_remarks: 'MOSAR D2.4, pages 19-20, MOSAR D2.4, page 25'
  },
  {
    id: 'FC_156',
    history: '',
    structure_nextHigher: 'Walking Manipulator (WM)',
    structure_focus: 'WM Controller',
    structure_nextLower: 'Impedance Control Algorithm',
    func_nextHigher:
      'Manipulate Spacecraft Modules and relocate the WM between HOTDOCK interfaces.',
    func_focus:
      'Perform fine motion of the WM extremity with impedance control to align and mate an SI with another SI.',
    func_nextLower:
      'Modulate joint torques based on position and force feedback to achieve a compliant behavior at the end-effector.',
    fail_effect:
      'Control loop becomes unstable | The WM oscillates or vibrates with high amplitude during the approach phase | High impact loads are imparted to the HOTDOCK interfaces | Structural damage to HOTDOCK or WM.',
    fail_severity: 8,
    fail_mode: 'Exerts excessive force on interface',
    fail_cause:
      'Incorrect tuning of the impedance control gains leads to instability when in contact with the stiff structure of the target HOTDOCK.',
    risk_prevention:
      "The WM uses impedance control for the 'Approach' phase. (D2.4, Table 5-4)",
    risk_occurrence: 5,
    risk_detection:
      'The plan is validated in a multi-physics simulator. Joint torque sensors in the WM would detect the high loads.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Perform system identification on the WM and HOTDOCK structure to create an accurate model for tuning control gains. Implement force-limiting safety cutoffs in the WM controller.',
    opt_detection:
      'Use an instrumented test fixture with the same stiffness as a real HOTDOCK to test the approach sequence and validate the stability of the impedance controller.',
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
    opt_remarks: 'MOSAR D2.4, Table 5-4, page 55, no evidence'
  },
  {
    id: 'FC_162',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Barrel-Cam Mechanism',
    structure_nextLower: 'Housing and Cam Assembly',
    func_nextHigher:
      'Translate motor rotation into axial and rotational motion.',
    func_focus: 'Convert rotational input into the prescribed motion profile.',
    func_nextLower:
      'Maintain clearances between moving and stationary parts over the temperature range.',
    fail_effect:
      'Clearances are lost due to differential thermal expansion | The rotating barrel cam binds against the stationary housing | Actuation torque increases dramatically, motor stalls | Mechanism jams.',
    fail_severity: 8,
    fail_mode: 'Mechanism binds or jams',
    fail_cause:
      'A large thermal gradient across the assembly (e.g., one side seeing sun, the other deep space) causes differential thermal expansion that eliminates critical internal clearances.',
    risk_prevention:
      'DesR_005 requires the design to account for worst-case combinations including transient temperature and differential expansion.',
    risk_occurrence: 5,
    risk_detection:
      'Verification is by Analysis and Testing. Motor current telemetry would detect the high torque.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Perform a detailed thermal-structural analysis to predict internal clearances under worst-case thermal gradients. Select materials with compatible CTEs or design in features to accommodate expansion.',
    opt_detection:
      'Perform a functional test in a thermal vacuum chamber while applying a thermal gradient across the HOTDOCK body to verify smooth operation.',
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
    opt_remarks:
      'D2.5, DesR_005, page 18-19, No specific thermal gradient test cited'
  },
  {
    id: 'FC_164',
    history: '',
    structure_nextHigher: 'Spacecraft Module (e.g. SM1-DMS)',
    structure_focus: 'R-ICU Controller',
    structure_nextLower: 'RMAP Protocol Handler (Firmware)',
    func_nextHigher:
      "Provide local control of the Spacecraft Module's components.",
    func_focus:
      'Interface with the OBC-S via SpaceWire, receiving commands and providing telemetry.',
    func_nextLower:
      'Process incoming RMAP (Remote Memory Access Protocol) command packets from the OBC-S to read\/write local memory.',
    fail_effect:
      'R-ICU firmware misinterprets an RMAP command | A write command is executed at the wrong memory address | Critical configuration data or code is corrupted | R-ICU crashes or behaves erratically | Loss of control over the SM.',
    fail_severity: 8,
    fail_mode: 'Executes incorrect command',
    fail_cause:
      'A software bug in the RMAP command parser of the R-ICU firmware incorrectly calculates the target memory address for a write command.',
    risk_prevention:
      'The RMAP protocol is used for communication between the OBC and SMs (D2.4, Section 3.2.2.6).',
    risk_occurrence: 5,
    risk_detection:
      'The failure would likely manifest during integration testing, but could be subtle and hard to trigger.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      "Implement memory protection (using the MPSoC's MPU) to prevent critical memory regions from being overwritten. The bootloader should verify a checksum of the application before running.",
    opt_detection:
      'Develop a comprehensive test suite for the R-ICU that sends a wide variety of valid and invalid RMAP commands and verifies correct memory access and error handling.',
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
    opt_remarks: 'MOSAR D2.4, page 20, No evidence'
  },
  {
    id: 'FC_168',
    history: '',
    structure_nextHigher: 'HOTDOCK Data Interface',
    structure_focus: 'LVDS Crosspoint Switch',
    structure_nextLower: 'Configuration Logic',
    func_nextHigher: 'Provide a re-routable data interface.',
    func_focus:
      'Dynamically route LVDS signal pairs based on commands to support the androgynous design.',
    func_nextLower:
      'Accept a command from the controller and configure the internal routing matrix accordingly.',
    fail_effect:
      'Controller sends a valid command but the switch does not configure | Data signals are not routed correctly for the mated orientation | No SpaceWire communication link is established | Loss of data transfer.',
    fail_severity: 8,
    fail_mode: 'Fails to route data signals',
    fail_cause:
      "A timing violation on the switch's command interface (e.g., SPI bus) due to signal integrity issues causes the command to be ignored or misinterpreted.",
    risk_prevention:
      'The controller commands the switch to route signals based on the detected orientation (D2.5, pg 42).',
    risk_occurrence: 4,
    risk_detection:
      'The failure is detected when the end-to-end data link fails to initialize.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      "Perform a signal integrity analysis on the command bus to the crosspoint switch. Implement a read-back capability where the controller can verify the switch's configuration registers.",
    opt_detection:
      'During DV testing, perform functional tests of the data routing at temperature extremes to check for any timing-related issues.',
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
    opt_remarks:
      'D2.5, Section 5.2.2, page 42, No specific test identified in documents'
  },
  {
    id: 'FC_173',
    history: '',
    structure_nextHigher: 'Walking Manipulator (WM)',
    structure_focus: 'Joint Controller',
    structure_nextLower: 'Local Controller (EtherCAT node)',
    func_nextHigher: 'Provide seven active revolute joints for manipulation.',
    func_focus:
      'Provide local closed-loop position\/current control for a single joint actuator.',
    func_nextLower:
      'Receive commands from the WM OBC via EtherCAT and drive the joint motor accordingly.',
    fail_effect:
      'A joint controller hangs or resets | The joint goes limp or becomes unresponsive | The WM OBC loses control of that joint | The entire manipulator may become unstable or uncontrollable | Inability to perform mission tasks.',
    fail_severity: 8,
    fail_mode: 'Loses control of a joint',
    fail_cause:
      "A software bug or transient hardware fault causes the local joint controller's firmware to crash.",
    risk_prevention:
      'Each joint has a local controller, interfaced via an EtherCAT bus to the WM OBC. (D2.4, Section 6.5.1)',
    risk_occurrence: 5,
    risk_detection:
      'The WM OBC would detect the loss of communication with the EtherCAT node and declare a system fault.',
    risk_detScore: 4,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Implement a robust watchdog timer in each joint controller. The WM OBC software must have a fault-tolerant control mode that can safely stop the arm if a joint fails.',
    opt_detection:
      'Perform extensive fault injection testing by forcing joint controllers to reset or stop communicating, and verify that the system-level safety logic performs as designed.',
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
    opt_remarks: 'MOSAR D2.4, page 86, MOSAR D2.4, Figure 6-18, page 87'
  },
  {
    id: 'FC_176',
    history: '',
    structure_nextHigher: 'MOSAR System',
    structure_focus: 'TM\/TC Service',
    structure_nextLower: 'PUS Packet',
    func_nextHigher:
      'Enable command and control of the demonstrator from the MCC.',
    func_focus:
      'Use PUS services for TM\/TC exchange between the MCC and the OBCs.',
    func_nextLower:
      'Encapsulate a command or telemetry data in a standardized packet structure.',
    fail_effect:
      'Incorrect APID is used in a telecommand packet | The command is routed to the wrong OBC (e.g., a command for the WM goes to the CLT) | The command is rejected or, worse, executed by the wrong system | Unpredictable and potentially hazardous behavior.',
    fail_severity: 8,
    fail_mode: 'Executes incorrect command',
    fail_cause:
      'A human error or software bug in the MCC ground software assigns the wrong Application Process Identifier (APID) to a telecommand packet.',
    risk_prevention:
      'The system uses three PUS nodes with unique APIDs: SVC-OBC, CLT-OBC, and MCC. (D2.4, Section 6.3)',
    risk_occurrence: 4,
    risk_detection:
      'The receiving OBC should reject commands that are not applicable to it, but this relies on robust software checks.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Implement strict validation checks on both the ground and flight side. The OBCs should only accept commands that are on their predefined list of valid commands.',
    opt_detection:
      'During system validation, intentionally send commands with incorrect APIDs and verify that they are safely rejected and an error event is generated.',
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
    opt_remarks: 'MOSAR D2.4, page 74, No evidence'
  },
  {
    id: 'FC_177',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Firmware',
    structure_nextLower: 'Field Oriented Control (FOC) Algorithm',
    func_nextHigher: 'Control the brushless DC motor.',
    func_focus:
      'Provide field oriented control of the brushless motor. (D2.5, pg 45)',
    func_nextLower:
      'Perform mathematical calculations (e.g., Park\/Clarke transforms) to control the motor.',
    fail_effect:
      'A floating point exception occurs (e.g., divide by zero) | The FOC task crashes | The motor is no longer actively controlled and coasts to a stop | The controller enters a fault state.',
    fail_severity: 8,
    fail_mode: 'Motor control task crashes',
    fail_cause:
      'A transient sensor error (e.g., a noisy current reading of zero) leads to a divide-by-zero error in the FOC algorithm calculations.',
    risk_prevention:
      'None identified in documents. This is a common issue in complex control algorithms.',
    risk_occurrence: 5,
    risk_detection:
      "The crash would be caught by the RTOS and the system would enter the 'Fault' state. A watchdog would eventually reset the controller.",
    risk_detScore: 4,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Implement defensive programming practices, including input validation and protection against divide-by-zero for all calculations in the FOC algorithm.',
    opt_detection:
      'Perform static code analysis to find potential floating point exceptions. Use fault injection to feed invalid sensor data into the algorithm and verify it handles the errors gracefully.',
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
    opt_remarks: 'D2.5, Section 6.1, page 45, D2.5, Figure 4-2, page 34'
  },
  {
    id: 'FC_184',
    history: '',
    structure_nextHigher: 'Spacecraft Module (e.g., SM3-BAT)',
    structure_focus: 'Central Power Distribution Unit (cPDU)',
    structure_nextLower: 'Relay Driver Circuit',
    func_nextHigher: 'Provide power routing within the module.',
    func_focus: 'Route main 28V power between HOTDOCK interfaces.',
    func_nextLower:
      'Provide the current pulse needed to switch the state of a latching relay.',
    fail_effect:
      'The driver circuit fails open | No current pulse can be delivered to the relay coil | The relay cannot change state | Power cannot be re-routed.',
    fail_severity: 8,
    fail_mode: 'Fails to switch power route',
    fail_cause: 'Failure of the transistor used to drive the relay coil.',
    risk_prevention:
      'The cPDU contains relays controlled by a cPDU controller via CAN bus. (D2.4, Figure 4-1)',
    risk_occurrence: 4,
    risk_detection:
      'The failure would be detected when a power routing command is sent but telemetry shows the power channel status has not changed.',
    risk_detScore: 4,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Use high-reliability, radiation-tolerant driver transistors with sufficient derating. Implement redundant driver circuits for critical relays.',
    opt_detection:
      'Perform stress screening (burn-in) of the cPDU electronics to precipitate early failures.',
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
    opt_remarks: 'MOSAR D2.4, page 26, MOSAR D2.4, Table 4-1, page 27'
  },
  {
    id: 'FC_190',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Watchdog Timer',
    structure_nextLower: 'Timer Hardware',
    func_nextHigher: 'Ensure reliable operation of the controller.',
    func_focus: 'Recover the system if the firmware hangs.',
    func_nextLower:
      "Trigger a hardware reset of the microcontroller if it is not periodically 'patted' by the software.",
    fail_effect:
      'The watchdog timer itself fails (e.g., stops counting) | The watchdog never triggers a reset | A subsequent firmware hang will not be recovered from | The controller is permanently unresponsive until a power cycle.',
    fail_severity: 8,
    fail_mode: 'Fails to recover from firmware hang',
    fail_cause:
      'A hardware fault in the watchdog timer peripheral of the microcontroller prevents it from operating.',
    risk_prevention:
      'None identified in documents. A watchdog timer is a standard feature for high-reliability systems.',
    risk_occurrence: 3,
    risk_detection:
      'This failure is undetectable until the system hangs for other reasons and fails to recover.',
    risk_detScore: 10,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      "Use an external watchdog timer IC in addition to the microcontroller's internal watchdog. The external watchdog would monitor a toggling GPIO pin from the MCU.",
    opt_detection:
      'Develop a specific test mode where the firmware intentionally stops patting the watchdog, and verify that a reset occurs within the specified timeout.',
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
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_193',
    history: '',
    structure_nextHigher: 'Spacecraft Module R-ICU',
    structure_focus: 'SpaceWire Interface',
    structure_nextLower: 'LVDS Transceiver IC',
    func_nextHigher: 'Provide data communication for the module.',
    func_focus: 'Manage SpW routing and data communication.',
    func_nextLower:
      'Transmit and receive low-voltage differential signals for the SpaceWire link.',
    fail_effect:
      'The LVDS driver fails | No signals are transmitted on the SpW link | The R-ICU is isolated from the network | OBC-S loses communication with the module.',
    fail_severity: 8,
    fail_mode: 'Fails to communicate on SpaceWire',
    fail_cause:
      'Electrical overstress damage to the LVDS transceiver from an ESD event during ground handling.',
    risk_prevention:
      'The R-ICU is the core of the data system in each SM. (D2.4, pg 19)',
    risk_occurrence: 4,
    risk_detection:
      'The communication failure would be detected immediately by the OBC-S.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Implement a strict ESD control program for all assembly and handling. Select LVDS transceivers with high ESD tolerance.',
    opt_detection:
      'Perform a full functional test of all R-ICU interfaces as part of acceptance testing.',
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
    opt_remarks:
      'MOSAR D2.4, Section 3.2.2.2, page 19, No specific ESD control plan cited'
  },
  {
    id: 'FC_196',
    history: '',
    structure_nextHigher: 'Servicer Spacecraft (SVC)',
    structure_focus: 'On-Board Computer (OBC-S)',
    structure_nextLower: 'Client Management Software',
    func_nextHigher: 'Manage all operations of the servicer.',
    func_focus:
      'Manage the states of the CLT during reconfiguration, including transitioning it to safe mode.',
    func_nextLower:
      'Send a command to the OBC-C to hand over control of its peripherals.',
    fail_effect:
      'A bug prevents the handover of control | The OBC-S and OBC-C both attempt to control the same hardware | Bus contention or conflicting commands cause unpredictable behavior | Potential for hardware damage.',
    fail_severity: 8,
    fail_mode: 'Fails to establish exclusive control',
    fail_cause:
      'A software bug in the Client Management state machine on the OBC-S causes it to start robotic operations before receiving confirmation that the OBC-C has entered safe mode.',
    risk_prevention:
      'The Client Management component on the OBC-S manages the state of the CLT and arbitrates control hand-over. (D2.4, Section 3.2.2.1)',
    risk_occurrence: 5,
    risk_detection:
      'This would be a critical failure scenario to test during software integration.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Implement a robust handshaking protocol between the OBC-S and OBC-C to ensure control authority is unambiguously transferred.',
    opt_detection:
      'Perform integration testing that specifically validates the control handover sequence under nominal and fault conditions (e.g., if the OBC-C fails to respond).',
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
    opt_remarks: 'MOSAR D2.4, page 19, No evidence'
  },
  {
    id: 'FC_006',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'POGO Pin Connector',
    structure_nextLower: 'Pin Contact Surface (Gold Plating)',
    func_nextHigher:
      'Provide a separable interface for power and data transfer between two HOTDOCKs, compliant up to 100Mbps.',
    func_focus:
      'Establish and maintain a compliant electrical connection by pressing a pin against a pad, transferring up to 3A per pin.',
    func_nextLower:
      'Provide a low-resistance, corrosion-resistant contact surface to ensure signal integrity and low voltage drop.',
    fail_effect:
      'Contact plating wears away | Base metal is exposed, leading to oxidation and high resistance | Increased voltage drop, overheating on power pins, or signal reflection\/attenuation on data pins | Data corruption or power loss to module.',
    fail_severity: 7,
    fail_mode: 'Contact resistance too high',
    fail_cause:
      'Fretting corrosion at the contact interface due to micro-motion induced by launch vibration, leading to wear of the gold plating.',
    risk_prevention:
      'The operational requirement OpR_002 states the interface shall be reusable for 100-1000 cycles, implying a durable design. FuncR_007 requires compliance with launch loads.',
    risk_occurrence: 5,
    risk_detection:
      "Verification for launch load compliance is 'Testing' (FuncR_007). Functional tests post-vibration would detect gross failures.",
    risk_detScore: 6,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Specify a thicker, hardened gold plating on POGO pins and pads per relevant space-grade connector standards to increase wear resistance.',
    opt_detection:
      'Perform a vibration test that simulates the launch profile with the interfaces mated, followed by a micro-ohm resistance measurement across all contacts to detect degradation.',
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
    opt_remarks: 'D2.5, OpR_002, page 25, D2.5, FuncR_007, page 11'
  },
  {
    id: 'FC_012',
    history: '',
    structure_nextHigher: 'HOTDOCK Sensors',
    structure_focus: 'Absolute Position Sensor',
    structure_nextLower: 'Sensor Shaft',
    func_nextHigher:
      'Provide telemetry and sensor data for monitoring and control of the HOTDOCK state.',
    func_focus:
      'Detect the motion and absolute position of the locking ring for feedback to the controller.',
    func_nextLower:
      'Mechanically couple the gearing system to the sensor element to translate locking ring motion into sensor rotation.',
    fail_effect:
      'Sensor shaft slips or shears | Sensor no longer tracks the true position of the locking ring | Controller receives incorrect position, may drive motor past limits or fail to confirm latch | Inability to confirm locked state, or damage to mechanism by over-driving.',
    fail_severity: 7,
    fail_mode: 'Provides incorrect position reading',
    fail_cause:
      'Shear failure of the sensor shaft due to over-torque condition if the main locking mechanism jams and the motor continues to drive.',
    risk_prevention:
      'The motorization assembly torque is designed for worst-case conditions (DesR_013). The controller monitors motor current which can be used to infer torque.',
    risk_occurrence: 5,
    risk_detection:
      'The controller uses the sensor to detect motion and position of the locking ring (D2.5, pg 37). A mismatch between commanded motor current and expected motion could be detected.',
    risk_detScore: 4,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Design the sensor shaft with a shear-pin or other mechanical fuse feature that fails predictably without damaging the more expensive sensor or gearbox if the system jams.',
    opt_detection:
      'Perform a locked-rotor test where the mechanism is intentionally jammed, and verify that the motor current limit trips before any damage occurs to the sensor shaft or geartrain.',
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
    opt_remarks: 'D2.5, DesR_013, page 21, D2.5, Section 5.1.2, page 37'
  },
  {
    id: 'FC_022',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Gearing System',
    structure_nextLower: 'Gearbox Housing',
    func_nextHigher: 'Transmit and amplify torque from motor to barrel-cam.',
    func_focus:
      'Maintain precise alignment of all gears in the geartrain under load.',
    func_nextLower:
      'Provide rigid structural support and mounting points for gear shafts and bearings.',
    fail_effect:
      'Housing deforms due to thermal expansion mismatch | Gear alignment is lost, causing binding | Increased friction, motor stall | Locking mechanism fails.',
    fail_severity: 7,
    fail_mode: 'Mechanism binds',
    fail_cause:
      'Differential thermal expansion between an aluminum housing and steel gear shafts over the -55C to +85C temperature range causes bearing misalignment and binding.',
    risk_prevention:
      'DesR_005 requires a robust design, taking into account worst-case combinations including temperature gradients and differential expansion.',
    risk_occurrence: 4,
    risk_detection: 'Verification of DesR_005 is by Analysis \/ Testing.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Select materials with compatible Coefficients of Thermal Expansion (CTE) for the gearbox housing and internal components, or design for compliance (e.g., using specific bearing mounts).',
    opt_detection:
      'Perform functional testing of the actuation assembly at the operational temperature extremes to verify smooth operation without binding.',
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
    opt_remarks: 'D2.5, DesR_005, page 18-19, No specific test identified'
  },
  {
    id: 'FC_025',
    history: '',
    structure_nextHigher: 'HOTDOCK Power Interface',
    structure_focus: 'Bidirectional Power Switch',
    structure_nextLower: 'Control Logic',
    func_nextHigher: 'Control current flow at the interface.',
    func_focus:
      'Incorporate a bidirectional power switch to enable or disable power transfer.',
    func_nextLower:
      'Interpret a command from the R-ICU to turn the switch on or off.',
    fail_effect:
      'Switch fails to respond to command | Power cannot be enabled or disabled | Inability to power up a module, or inability to isolate a faulty module | Mission constraint violation or safety hazard.',
    fail_severity: 7,
    fail_mode: 'Fails to switch on\/off',
    fail_cause:
      'A logic fault in the cPDU controller prevents the command from being processed and sent to the switch hardware.',
    risk_prevention:
      'FuncR_017 requires this switch. It is a key feature of the power management system.',
    risk_occurrence: 5,
    risk_detection: 'Verification is by Testing (FuncR_017).',
    risk_detScore: 4,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Implement a clear status feedback mechanism in the control logic, so the OBC can verify that the switch has entered the commanded state.',
    opt_detection:
      'Create a specific test case in the validation plan to cycle the bidirectional switch and verify its state change through telemetry under various load conditions.',
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
    opt_remarks:
      'D2.5, FuncR_017, page 14, D2.5, FuncR_017 Verification, page 14'
  },
  {
    id: 'FC_027',
    history: '',
    structure_nextHigher: 'HOTDOCK Sensors',
    structure_focus: 'Proximity Sensor (Hall effect)',
    structure_nextLower: 'Sensor Mounting',
    func_nextHigher:
      'Provide telemetry and sensor data for monitoring and control.',
    func_focus:
      'Detect good alignment before starting the mating process (OpR_008).',
    func_nextLower:
      'Maintain a fixed, known position relative to the housing to ensure accurate proximity readings.',
    fail_effect:
      'Sensor becomes mechanically loose | Sensor provides inaccurate or no proximity reading | Controller allows mating to be attempted with excessive misalignment | Mechanical damage to the form-fit geometry or POGO pins.',
    fail_severity: 7,
    fail_mode: 'Provides incorrect proximity signal',
    fail_cause:
      'Creep or cracking of the adhesive bond holding the sensor in place, caused by differential thermal expansion over many cycles.',
    risk_prevention:
      'The design includes proximity sensors (Figure 3-1). Assembly processes are assumed to be robust.',
    risk_occurrence: 5,
    risk_detection: 'End-to-end alignment detection is tested per OpR_008.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'In addition to adhesive, design a mechanical staking or clamping feature to secure the proximity sensors against movement.',
    opt_detection:
      'Perform a thermal cycling test on the assembly and then perform a functional check of the proximity sensor calibration to detect any shift.',
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
    opt_remarks: 'D2.5, OpR_008, page 26, No specific assembly document cited'
  },
  {
    id: 'FC_029',
    history: '',
    structure_nextHigher: 'HOTDOCK Data Interface',
    structure_focus: 'Connector Plate PCB',
    structure_nextLower: 'SpaceWire (LVDS) Traces',
    func_nextHigher: 'Provide a re-routable data interface for SpaceWire.',
    func_focus:
      'Maintain the precise physical arrangement and electrical characteristics for SpaceWire signals.',
    func_nextLower:
      'Provide a controlled impedance transmission line (100 Ohms) for high-speed differential signals.',
    fail_effect:
      'Trace impedance is out of tolerance | Signal reflections and degradation occur | High bit error rate on the SpaceWire link | Data corruption, loss of communication.',
    fail_severity: 7,
    fail_mode: 'Signal integrity is degraded',
    fail_cause:
      'Variation in PCB manufacturing processes (e.g., trace width, dielectric thickness) causes the differential impedance to deviate from the required 100 Ohms.',
    risk_prevention:
      'The data characteristics table specifies 100 Ohm characteristic impedance (Table 5-1).',
    risk_occurrence: 4,
    risk_detection:
      'A prototype design allows SpaceWire transfer of 100Mbps (D2.5, pg 41). This implies testing was done.',
    risk_detScore: 4,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Specify impedance control requirements on the PCB fabrication drawing and require the manufacturer to provide Time Domain Reflectometry (TDR) test coupons with each lot.',
    opt_detection:
      'Perform a signal integrity analysis using simulation tools (e.g., HyperLynx) early in the design phase to optimize the trace layout. Validate with a network analyzer during DV testing.',
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
    opt_remarks: 'D2.5, Table 5-1, page 42, D2.5, Section 5.2.1, page 41'
  },
  {
    id: 'FC_032',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Firmware',
    structure_nextLower: 'Sensor Processing Algorithm',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus:
      'Process associated sensors to determine system state (FuncR_027).',
    func_nextLower:
      'Convert raw analog sensor signals to digital values and store them (FuncR_028).',
    fail_effect:
      'Incorrect scaling factor or offset applied in firmware | Controller calculates an incorrect motor position or temperature | Faulty logic decisions, e.g., stopping motion too early or too late | Damage to mechanism, failed operation.',
    fail_severity: 7,
    fail_mode: 'Reports incorrect telemetry',
    fail_cause:
      'A software coding error applies the wrong calibration coefficient when converting the ADC reading from the absolute position sensor to an angle.',
    risk_prevention:
      'Firmware development is based on the system architecture. Peer reviews are assumed.',
    risk_occurrence: 5,
    risk_detection:
      'Verification by Testing (FuncR_027, FuncR_028). End-to-end calibration check would be required.',
    risk_detScore: 4,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Store all calibration coefficients as configurable parameters rather than hard-coding them, and implement a checksum to ensure their integrity.',
    opt_detection:
      'Develop a formal calibration procedure and test script that commands the mechanism to known positions and verifies that the reported telemetry matches within tolerance.',
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
    opt_remarks:
      'D2.5, FuncR_027 & FuncR_028, page 16, No specific software development plan cited'
  },
  {
    id: 'FC_036',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Barrel-Cam Mechanism',
    structure_nextLower: 'Cam Groove Surface',
    func_nextHigher:
      'Translate motor rotation into axial and rotational motion.',
    func_focus: 'Convert rotational input into the prescribed motion profile.',
    func_nextLower:
      'Provide a hardened, low-friction surface to guide the cam follower.',
    fail_effect:
      'Cam groove surface is damaged by particulate contamination | High friction, jerky motion | Motor current increases, mechanism may jam.',
    fail_severity: 7,
    fail_mode: 'Actuation is jerky or jams',
    fail_cause:
      'Abrasive wear of the cam groove surface caused by trapped hard particulate (e.g., metallic debris from assembly).',
    risk_prevention:
      'DesR_012 requires lubrication. Clean assembly practices are assumed.',
    risk_occurrence: 4,
    risk_detection:
      'Functional testing would detect gross jamming. Motor current telemetry (FuncR_029) could show anomalies.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Specify a hard, lubricious coating for the cam groove (e.g., hard anodize) and implement stringent FOD controls during assembly of the mechanism.',
    opt_detection:
      "During assembly, perform a 'break-in' run of the mechanism, then flush with clean solvent and inspect for any generated particulates before final lubrication.",
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
    opt_remarks: 'D2.5, DesR_012, page 20, No specific procedure document cited'
  },
  {
    id: 'FC_045',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Locking Mechanism',
    structure_focus: 'Locking Ring',
    structure_nextLower: 'Interface to Barrel-Cam Follower',
    func_nextHigher:
      'Implement a locking mechanism that acts on the form-fit geometry.',
    func_focus: 'Rotate to drive the steel balls into their locked position.',
    func_nextLower:
      'Transfer force from the barrel-cam mechanism to the ring body to induce rotation.',
    fail_effect:
      'High localized stress at the follower interface causes yielding | The mechanical connection becomes loose or sloppy | Ring may not rotate correctly or may jam | Failure to lock\/unlock.',
    fail_severity: 7,
    fail_mode: 'Fails to rotate smoothly',
    fail_cause:
      'Localized plastic deformation (yielding) at the cam follower contact point due to an over-torque event during a jammed condition.',
    risk_prevention:
      'DesR_015 requires contact stress to be below 93% of yield. The controller monitors motor current to limit torque.',
    risk_occurrence: 4,
    risk_detection: 'Analysis is the primary verification method for DesR_015.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Incorporate a hardened steel insert into the aluminum locking ring at the point of contact with the cam follower to increase local strength and wear resistance.',
    opt_detection:
      'After a locked-rotor test, perform a detailed inspection of the cam and follower contact surfaces for any signs of permanent deformation.',
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
    opt_remarks: 'D2.5, DesR_015, page 21, No specific test identified'
  },
  {
    id: 'FC_048',
    history: '',
    structure_nextHigher: 'HOTDOCK Electrical Interface',
    structure_focus: 'EMI Compatibility',
    structure_nextLower: 'Grounding\/Shielding',
    func_nextHigher: 'Provide a reliable electrical interface.',
    func_focus:
      'Not cause electro-magnetic interference (EMI) in coupled modules (FuncR_016).',
    func_nextLower:
      'Provide a low-impedance path for noise currents to ground and shield sensitive signals.',
    fail_effect:
      'Poor grounding design creates a ground loop | Noise from the motor driver couples onto the data lines | Data corruption on the SpaceWire or CAN bus | Loss of communication, erroneous commands.',
    fail_severity: 7,
    fail_mode: 'Causes electromagnetic interference',
    fail_cause:
      'High-frequency noise from the PWM motor driver couples onto the SpaceWire data lines due to inadequate shielding or a shared ground return path.',
    risk_prevention:
      'FuncR_016 requires EMC. The design separates power and signal grounds conceptually.',
    risk_occurrence: 5,
    risk_detection: 'Verification is by Testing.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Implement a robust grounding scheme with separate ground returns for motor power and digital logic. Use shielded twisted-pair cabling for all high-speed data lines.',
    opt_detection:
      'Perform a formal EMC test, including radiated and conducted emissions testing while the motor is running, to verify compliance with space application standards.',
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
    opt_remarks: 'D2.5, FuncR_016, page 14, No specific EMC test plan cited'
  },
  {
    id: 'FC_051',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Brushless DC Motor (MAXON EC 32 flat)',
    structure_nextLower: 'Permanent Magnets (Rotor)',
    func_nextHigher: 'Rotate locking ring.',
    func_focus:
      'Generate rotational torque by converting electrical energy into a magnetic field.',
    func_nextLower:
      "Provide a constant magnetic field that interacts with the stator's electromagnetic field to produce torque.",
    fail_effect:
      'Rotor magnet is cracked | Magnetic field is weakened | Motor torque constant (Kt) is reduced | Motor cannot produce required torque, even with increased current.',
    fail_severity: 7,
    fail_mode: 'Fails to generate sufficient torque',
    fail_cause:
      'Brittle fracture of a rotor magnet due to mechanical shock during a mishandling (drop) event.',
    risk_prevention:
      'DesR_005 requires a robust design. Handling procedures should be in place.',
    risk_occurrence: 2,
    risk_detection:
      'A motor performance test (measuring Kt) would detect the degradation. A simple functional test might not if the margin is large.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Encapsulate the motor assembly in protective fixtures during all transport and integration steps to mitigate drop\/shock risks.',
    opt_detection:
      'Perform a back-EMF test on every motor as part of incoming inspection to verify the torque constant is within specification.',
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
    opt_remarks:
      'D2.5, DesR_005, page 18, No specific handling procedures document'
  },
  {
    id: 'FC_054',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Firmware',
    structure_nextLower: 'Error Handling Routine',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus:
      'Execute firmware including a fault state for anomaly detection.',
    func_nextLower:
      'Upon detecting an error, transition to the Fault state, stop motor operation, and report the error code.',
    fail_effect:
      'Error handling routine itself has a bug (e.g., null pointer deference) | Attempting to handle a minor error causes a critical system crash | The controller hangs and must be reset | Loss of control and telemetry during a fault condition.',
    fail_severity: 7,
    fail_mode: 'Firmware hangs when handling a fault',
    fail_cause:
      'A software bug in a fault logging function is triggered only when a specific, rare error occurs, causing a buffer overflow and crashing the system.',
    risk_prevention:
      'The fault state is part of the defined state machine (Figure 4-2). Robust coding practices are assumed.',
    risk_occurrence: 4,
    risk_detection:
      'Testing is the primary verification method. This requires specific fault injection to test.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'All error handling paths in the firmware must be explicitly designed and peer-reviewed. Avoid complex operations like dynamic memory allocation within fault handlers.',
    opt_detection:
      'Implement a comprehensive fault injection test plan, using a debugger or other means to trigger every possible error condition and verify that the system responds correctly without crashing.',
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
    opt_remarks:
      'D2.5, Figure 4-2, page 34, No specific software test plan cited'
  },
  {
    id: 'FC_057',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Mechanical Transmission',
    structure_nextLower: 'Hard Stop',
    func_nextHigher: 'Transmit torque from motor to barrel-cam.',
    func_focus: 'Limit the range of motion of the actuation mechanism.',
    func_nextLower:
      'Provide a physical barrier to prevent over-rotation of the locking ring.',
    fail_effect:
      'Hard stop fails or is incorrectly positioned | Locking ring can be driven past its intended range | Damage to the barrel-cam, sensor shaft, or other internal components.',
    fail_severity: 7,
    fail_mode: 'Fails to limit motion',
    fail_cause:
      'A design error in the placement of the hard stop allows the absolute position sensor to rotate past its own internal stops, causing damage to the sensor.',
    risk_prevention:
      'The design includes a state machine with position feedback (Figure 4-2) which should stop the motor before hitting the hard stop.',
    risk_occurrence: 4,
    risk_detection: 'Functional testing would verify the range of motion.',
    risk_detScore: 4,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Perform a detailed design review of the mechanical assembly in CAD to ensure the hard stops are correctly placed to protect all components, especially sensors, from over-travel.',
    opt_detection:
      'During first article testing, manually rotate the mechanism through its full range of motion to physically verify the hard stops function correctly before applying motor power.',
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
    opt_remarks:
      'D2.5, Figure 4-2, page 34, No specific mechanical drawing cited'
  },
  {
    id: 'FC_058',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Microcontroller',
    structure_nextLower: 'Analog-to-Digital Converter (ADC)',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus:
      'Convert required analog sensor signals to digital values (FuncR_028).',
    func_nextLower:
      'Measure analog voltages from sensors (thermistors, current sensors) and convert them to a digital number.',
    fail_effect:
      'ADC reference voltage drifts | All analog measurements become inaccurate by a proportional amount | Incorrect temperature, voltage, and current readings | Faulty protection trips or failure to detect real faults.',
    fail_severity: 7,
    fail_mode: 'Reports incorrect telemetry',
    fail_cause:
      "Drift in the ADC's voltage reference due to temperature changes or radiation aging.",
    risk_prevention:
      'Use of space-qualified components with stable characteristics is assumed. The controller must support the operating temperature range.',
    risk_occurrence: 4,
    risk_detection:
      'FuncR_028 is verified by Testing. Calibration would be required.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      "Use an external, high-precision, radiation-tolerant voltage reference for the ADC instead of relying on the microcontroller's internal reference.",
    opt_detection:
      'During thermal testing, monitor a stable, known voltage source with one of the ADC channels to characterize the thermal drift of the entire measurement system.',
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
    opt_remarks:
      'D2.5, FuncR_028, page 16, No specific component selection criteria cited'
  },
  {
    id: 'FC_060',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Structure',
    structure_focus: 'Form-Fit Guidance Geometry',
    structure_nextLower: 'Interface with Locking Balls',
    func_nextHigher: 'Provide mechanical alignment and load transfer.',
    func_focus: 'Provide a surface for the steel locking balls to act upon.',
    func_nextLower:
      'Withstand high contact stress from the steel balls to create a preloaded connection.',
    fail_effect:
      'Surface under the locking ball yields (brinelling) | A permanent indentation is formed | The preload of the connection is reduced or lost; the connection may become loose under vibration | Reduced load transfer capability.',
    fail_severity: 7,
    fail_mode: 'Fails to maintain preload',
    fail_cause:
      "Exceeding the material's compressive yield strength under the point load of a steel ball, causing plastic deformation.",
    risk_prevention:
      'DesR_015 requires peak hertzian contact stress to be below 93% of yield.',
    risk_occurrence: 4,
    risk_detection:
      'Verification is by Analysis. This requires accurate modeling of the contact mechanics.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Incorporate hardened steel inserts into the aluminum form-fit geometry at the ball contact points to distribute the load and prevent yielding of the softer aluminum.',
    opt_detection:
      'After a proof load test, disassemble the interface and inspect the ball contact surfaces for any signs of brinelling or permanent deformation.',
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
    opt_remarks: 'D2.5, DesR_015, page 21, No specific test identified'
  },
  {
    id: 'FC_072',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Sensor Interface',
    structure_nextLower: 'Analog Buffer',
    func_nextHigher: 'Read and process signals from sensors.',
    func_focus: 'Remove the sensor impedance effect on readings (D2.5, pg 46).',
    func_nextLower:
      'Provide a high-impedance input to the sensor and a low-impedance output to the ADC.',
    fail_effect:
      'Buffer amplifier fails | Sensor signal does not reach the ADC, or is loaded down and inaccurate | Loss of a telemetry channel or feedback signal.',
    fail_severity: 7,
    fail_mode: 'Fails to process sensor signals',
    fail_cause:
      'Latch-up (SEL) of the operational amplifier IC used as the buffer due to a heavy ion strike.',
    risk_prevention:
      'The design includes buffers. The design must withstand the space environment (EnvR_001).',
    risk_occurrence: 5,
    risk_detection:
      'The telemetry reading would flat-line or go to a rail, which would be detected.',
    risk_detScore: 4,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Select radiation-tolerant op-amps. Implement latch-up protection (current limiting and power cycling) for the analog sensor front-end circuitry.',
    opt_detection:
      'Perform heavy ion testing on the selected op-amp to characterize its SEL cross-section and verify the effectiveness of the latch-up protection circuit.',
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
    opt_remarks:
      'D2.5, Section 6.2, page 46, No specific latch-up protection mentioned'
  },
  {
    id: 'FC_076',
    history: '',
    structure_nextHigher: 'HOTDOCK Electrical Interface',
    structure_focus: 'Thermal Protection',
    structure_nextLower: 'Temperature Sensor (MCU)',
    func_nextHigher: 'Provide electrical protection.',
    func_focus: 'Incorporate thermal protection (FuncR_015).',
    func_nextLower: 'Measure the temperature of the controller PCB.',
    fail_effect:
      'Temperature sensor is inaccurate or fails | The controller cannot detect an over-temperature condition | A fault causing overheating will not be caught, leading to component damage or board delamination.',
    fail_severity: 7,
    fail_mode: 'Fails to detect over-temperature condition',
    fail_cause:
      'The temperature sensor is placed on a part of the PCB that does not get hot, and therefore does not accurately reflect the temperature of the hottest components (e.g., motor driver).',
    risk_prevention:
      'FuncR_015 requires thermal protection. A thermistor for the MCU is listed in telemetry (Table 4-2).',
    risk_occurrence: 4,
    risk_detection: 'Verification is by Analysis and Testing.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Perform a thermal analysis of the controller PCB to identify the hot spots under worst-case load, and place the temperature sensor at that location.',
    opt_detection:
      'During thermal testing, use a thermal camera to verify the results of the thermal analysis and confirm that the onboard temperature sensor is accurately tracking the hot spot temperature.',
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
    opt_remarks: 'D2.5, FuncR_015, page 13, D2.5, Table 4-2, page 35'
  },
  {
    id: 'FC_078',
    history: '',
    structure_nextHigher: 'HOTDOCK Power Interface',
    structure_focus: 'POGO Pad',
    structure_nextLower: 'Pad Surface (Gold Plating)',
    func_nextHigher: 'Provide a separable interface for power.',
    func_focus: 'Provide a contact surface for the POGO pin.',
    func_nextLower:
      'Provide a low-resistance, corrosion-resistant contact surface.',
    fail_effect:
      'Contamination on the pad surface | High contact resistance is formed | Localized overheating (I^2*R) at the contact point | Pad may de-laminate from PCB, surrounding material may be damaged.',
    fail_severity: 7,
    fail_mode: 'Contact resistance too high',
    fail_cause:
      'Contamination of the contact pad by a fingerprint during assembly, which then carbonizes from heat, creating a high-resistance layer.',
    risk_prevention:
      'The design is intended to prevent accumulation of dirt or dust (D2.5, pg 40). Clean assembly is standard practice.',
    risk_occurrence: 4,
    risk_detection:
      'Functional testing would detect a high-resistance connection if the effect is large enough.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Mandate the use of gloves and finger cots during all manual assembly stages of the connector plate to prevent contamination of contact surfaces.',
    opt_detection:
      'Add a high-magnification visual inspection and cleaning step for the connector plate contact surfaces as the final step before integration into the housing.',
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
    opt_remarks:
      'D2.5, Section 5.2, page 40, No specific procedure document cited'
  },
  {
    id: 'FC_081',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Brushless DC Motor (MAXON EC 32 flat)',
    structure_nextLower: 'Motor Housing',
    func_nextHigher: 'Rotate locking ring.',
    func_focus: 'Generate rotational torque.',
    func_nextLower:
      'Provide structural support and heat dissipation path for the stator.',
    fail_effect:
      'Poor thermal contact between motor and HOTDOCK housing | Heat from the motor is not conducted away efficiently | Motor windings overheat during operation | Insulation breakdown, motor failure.',
    fail_severity: 7,
    fail_mode: 'Overheats',
    fail_cause:
      'An air gap between the motor body and the main HOTDOCK housing, due to mounting tolerances, creates a high thermal resistance path.',
    risk_prevention:
      'DesR_005 requires the design to account for mechanism heat dissipation.',
    risk_occurrence: 4,
    risk_detection:
      'Analysis and testing are the verification methods. Motor temperature telemetry is available (THM_1).',
    risk_detScore: 4,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Specify the use of a thermal interface material (TIM), such as a gap pad or thermal grease, between the motor body and the housing to ensure a low-resistance heat path.',
    opt_detection:
      'During thermal vacuum testing, operate the motor under a high-duty cycle load and monitor the motor temperature telemetry to verify it remains within its specified limits.',
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
    opt_remarks: 'D2.5, DesR_005, page 19, D2.5, Table 4-2, page 35'
  },
  {
    id: 'FC_082',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Structure',
    structure_focus: 'Fixation Layout',
    structure_nextLower: 'M3 Bolt Holes',
    func_nextHigher: 'Provide mechanical connection to the parent structure.',
    func_focus: 'Transfer loads between HOTDOCK and the parent structure.',
    func_nextLower: 'Provide threaded holes for mounting bolts.',
    fail_effect:
      'Threads in an aluminum hole are stripped | Bolt cannot be torqued correctly, clamping force is not achieved | Reduced structural capability, potential for failure under load.',
    fail_severity: 7,
    fail_mode: 'Fails to provide secure mounting',
    fail_cause:
      'Threads in the aluminum housing are stripped due to cross-threading or over-torquing during assembly.',
    risk_prevention:
      'The fixation layout uses M3 bolts (D2.5, pg 38). Robust design is required.',
    risk_occurrence: 4,
    risk_detection:
      'The issue would be found during assembly when the bolt fails to reach its target torque.',
    risk_detScore: 3,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Install threaded inserts (e.g., Helicoils) made of a harder material like steel into all structural threaded holes in the aluminum housing to increase strength and prevent stripping.',
    opt_detection:
      'Mandate the use of a calibrated torque wrench for all structural fasteners and require that all bolts be started by hand to prevent cross-threading.',
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
    opt_remarks:
      'D2.5, Section 5.1.3, page 38, No specific assembly procedure cited'
  },
  {
    id: 'FC_084',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'POGO Pin Connector',
    structure_nextLower: 'Orientation Sense Pins',
    func_nextHigher: 'Provide data for rerouting capability.',
    func_focus:
      'Detect the orientation of the HOTDOCK with respect to its mate (D2.5, pg 42).',
    func_nextLower:
      'Provide a voltage level that indicates the relative 90-degree orientation.',
    fail_effect:
      'Orientation pin fails to make contact | The controller cannot determine the mated orientation | The crosspoint switch is not commanded, or commanded incorrectly | No SpaceWire data link is established.',
    fail_severity: 7,
    fail_mode: 'Fails to detect mated orientation',
    fail_cause:
      'An open circuit on one of the orientation sense pins due to a failed POGO pin or broken trace.',
    risk_prevention:
      'The orientation is detected by reading a voltage on dedicated pins.',
    risk_occurrence: 5,
    risk_detection:
      'The failure would be apparent when the SpaceWire link fails to initialize post-mating.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Implement a redundant scheme for orientation sensing, using multiple pins or a different sensing method as a backup.',
    opt_detection:
      'During ground testing, mate the interfaces in all four possible orientations and verify that the controller correctly reports the orientation and establishes a data link each time.',
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
    opt_remarks: 'D2.5, Section 5.2.2, page 42, No specific test plan cited'
  },
  {
    id: 'FC_086',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'H-Bridge Motor Driver',
    structure_nextLower: 'Charge Pump',
    func_nextHigher: 'Drive the 3-phase brushless motor.',
    func_focus: 'Switch current to the windings based on PWM signals.',
    func_nextLower:
      'Generate a voltage higher than the main supply to properly turn on the high-side N-channel MOSFETs.',
    fail_effect:
      'Charge pump fails | The gate voltage for the high-side MOSFETs is insufficient | High-side MOSFETs operate in the linear region with high resistance | High power dissipation in the MOSFETs, leading to failure; motor runs poorly or not at all.',
    fail_severity: 7,
    fail_mode: 'Fails to drive motor efficiently',
    fail_cause:
      'Failure of a capacitor or diode in the charge pump circuit due to electrical stress or aging.',
    risk_prevention:
      'The design includes a proper front end chain (H-bridge, gate drive) (D2.5, pg 46).',
    risk_occurrence: 4,
    risk_detection:
      'A failure would manifest as high motor current and low torque, which would be detectable during functional testing.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Use high-reliability ceramic capacitors and diodes in the charge pump circuit. Perform a WCCA to ensure all components are operated with sufficient derating.',
    opt_detection:
      'During design verification, probe the gate voltage of the high-side MOSFETs to confirm that the charge pump is providing sufficient overdrive under all load conditions.',
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
    opt_remarks:
      'D2.5, Section 6.2, page 46, No specific component selection criteria cited'
  },
  {
    id: 'FC_091',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'POGO Pin Connector',
    structure_nextLower: 'Connector Body Material',
    func_nextHigher: 'Provide a separable interface for power and data.',
    func_focus:
      'Maintain the precise physical arrangement of POGO connections.',
    func_nextLower:
      'Provide a structurally and dimensionally stable insulating body to hold the pins.',
    fail_effect:
      'Material absorbs moisture on the ground, then outgasses in vacuum | Outgassed water vapor can cause arcing or contaminate surfaces | Arcing can cause short circuits; contamination can degrade sensor or thermal performance.',
    fail_severity: 7,
    fail_mode: 'Causes contamination',
    fail_cause:
      'The plastic used for the connector body has high outgassing properties, violating space material requirements.',
    risk_prevention:
      'DesR_019 requires materials to have low outgassing and toxicity. Verification is by Analysis.',
    risk_occurrence: 3,
    risk_detection:
      'Analysis is performed based on material data sheets. A vacuum bake-out test would be a more thorough detection method.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Select only materials that are listed in approved space-grade material databases (e.g., NASA MAPTIS) and meet outgassing requirements (TML < 1.0%, CVCM < 0.1%).',
    opt_detection:
      'Perform a vacuum bake-out and residual gas analysis (RGA) on the assembled connector plate to verify that the overall outgassing performance meets requirements.',
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
    opt_remarks: 'D2.5, DesR_019, page 22, No specific material list cited'
  },
  {
    id: 'FC_092',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Motor Brake',
    structure_nextLower: 'Brake Mechanism',
    func_nextHigher: 'Hold the mechanism in a fixed position.',
    func_focus:
      'Hold the position of the locking ring when the motor is unpowered.',
    func_nextLower:
      'Provide a static holding torque to prevent back-driving of the geartrain.',
    fail_effect:
      'Brake fails to engage | The locking ring is not held in position and can be back-driven by external forces | The mechanical connection may loosen under vibration or load | Loss of preload, potential for connection failure.',
    fail_severity: 7,
    fail_mode: 'Fails to hold position',
    fail_cause:
      'A mechanical failure (e.g., broken spring) in a power-off brake mechanism prevents it from engaging.',
    risk_prevention:
      'None identified in documents. A brake is not explicitly mentioned but is common practice in such mechanisms.',
    risk_occurrence: 5,
    risk_detection:
      'A functional test where an external torque is applied to the locked mechanism would detect this failure.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Select a high-reliability, space-proven power-off brake for the motor. The barrel-cam design should also be non-backdrivable to provide redundancy.',
    opt_detection:
      'Add a back-driving torque test to the acceptance test procedure to verify the holding torque of the brake and non-backdrivability of the geartrain.',
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
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_095',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Structure',
    structure_focus: 'Form-Fit Guidance Geometry',
    structure_nextLower: 'Range of Attraction (ROA)',
    func_nextHigher: 'Provide mechanical alignment and connection.',
    func_focus: 'Enable self-guidance and positioning during final approach.',
    func_nextLower:
      'The geometry must capture and align the interface from an initial misalignment of up to 15mm and 10 degrees (Figure 5-6).',
    fail_effect:
      'Initial misalignment exceeds the ROA | The form-fit features collide instead of engaging | High impact loads on the interface, potential for structural damage | Mating fails.',
    fail_severity: 7,
    fail_mode: 'Fails to capture and align',
    fail_cause:
      'The robotic arm positioning error is larger than specified, presenting the interface with a misalignment that exceeds its capture range.',
    risk_prevention: 'The ROA is defined by the form-fit geometry design.',
    risk_occurrence: 5,
    risk_detection:
      'Preliminary motion studies were performed by DLR to define the ROA. This is verified by analysis and testing.',
    risk_detScore: 4,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'The host system (robotic arm) must have a control system that guarantees its end-effector positioning accuracy is within the specified ROA of the HOTDOCK.',
    opt_detection:
      'Perform robotic mating tests at the boundaries of the specified ROA to validate the capture performance of the form-fit geometry.',
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
    opt_remarks: 'D2.5, Figure 5-6, page 39, No specific test plan cited'
  },
  {
    id: 'FC_104',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Locking Mechanism',
    structure_focus: 'Locking Elements',
    structure_nextLower: 'Material Hardness',
    func_nextHigher: 'Implement a locking mechanism.',
    func_focus: 'Engage with the mated HOTDOCK to create a secure connection.',
    func_nextLower:
      'The steel balls and their contact surfaces must be sufficiently hard to resist plastic deformation under load.',
    fail_effect:
      'Contact surfaces are too soft | Surfaces yield under load (brinelling) | Preload is lost, connection becomes loose.',
    fail_severity: 7,
    fail_mode: 'Fails to maintain preload',
    fail_cause:
      'An error in the heat treatment process for the steel balls or locking ring inserts results in a lower-than-specified material hardness.',
    risk_prevention:
      'DesR_015 requires contact stress below yield. This implies material properties are controlled.',
    risk_occurrence: 3,
    risk_detection:
      'A proof load test might reveal the issue, but it could be missed if the load is not high enough to cause gross failure.',
    risk_detScore: 7,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Require material certifications and hardness test results from the supplier for all critical, heat-treated mechanical components.',
    opt_detection:
      'Perform hardness testing on a sample of components from each manufacturing lot as part of incoming quality inspection.',
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
    opt_remarks: 'D2.5, DesR_015, page 21, No manufacturing document cited'
  },
  {
    id: 'FC_111',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'Data Transfer Interface',
    structure_nextLower: 'Duplex Communication',
    func_nextHigher: 'Allow exchange of data between modules.',
    func_focus:
      'The data interface shall provide duplex communication abilities (FuncR_021).',
    func_nextLower:
      'Provide separate physical paths for transmitting and receiving data simultaneously.',
    fail_effect:
      "A fault couples the transmit and receive paths | The receiver is saturated by its own transmitter's signal | Communication is lost.",
    fail_severity: 7,
    fail_mode: 'Fails to communicate',
    fail_cause:
      'A short circuit between adjacent POGO pins for transmit and receive pairs due to conductive debris.',
    risk_prevention:
      'FuncR_021 requires duplex communication. Verification is by Review of Design.',
    risk_occurrence: 3,
    risk_detection:
      'A functional test of the data link would fail. This would be hard to diagnose.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'In the connector plate layout, maximize the physical separation between transmit and receive differential pairs. Place ground pins between them to provide shielding.',
    opt_detection:
      'Perform a crosstalk analysis in simulation and verify with a network analyzer during DV testing to measure the isolation between transmit and receive channels.',
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
    opt_remarks: 'D2.5, FuncR_021, page 15, No specific test plan cited'
  },
  {
    id: 'FC_113',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Structure',
    structure_focus: 'Form-Fit Guidance Geometry',
    structure_nextLower: 'Diagonal Engagement Feature',
    func_nextHigher: 'Provide mechanical alignment and connection.',
    func_focus:
      'The standard interface shall allow diagonal engagement up to 65 degrees (DesR_007).',
    func_nextLower:
      'The guiding surfaces are shaped to allow mating from a wide approach angle.',
    fail_effect:
      'The feature does not work as designed | The interfaces jam or are damaged when a diagonal engagement is attempted | Mating fails, potential damage to the interfaces.',
    fail_severity: 7,
    fail_mode: 'Fails to mate from a diagonal approach',
    fail_cause:
      'The final geometry, when manufactured, has sharp edges or incorrect draft angles that prevent the surfaces from sliding correctly during a diagonal approach.',
    risk_prevention:
      'DesR_007 requires diagonal engagement. The form-fit is designed to support this (D2.5, pg 37).',
    risk_occurrence: 4,
    risk_detection: 'Verification is by Testing.',
    risk_detScore: 4,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Use CAD motion simulation extensively during the design phase to analyze the engagement kinematics from all approach angles and refine the surface geometries.',
    opt_detection:
      'Perform a series of robotic mating tests that specifically command approaches from various angles up to the 65-degree limit to validate the diagonal engagement capability.',
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
    opt_remarks: 'D2.5, DesR_007, page 19, No specific test plan cited'
  },
  {
    id: 'FC_117',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'Data Transfer Interface',
    structure_nextLower: 'Ethernet\/EtherCAT support',
    func_nextHigher: 'Allow exchange of data between modules.',
    func_focus:
      'The data interface shall support Ethernet or EtherCAT bus (FuncR_022).',
    func_nextLower:
      'The physical layer (POGO pins, PCB traces) must support the signal characteristics of Ethernet.',
    fail_effect:
      'Signal integrity is poor for Ethernet signals | High bit error rate, frequent packet loss | Unreliable communication.',
    fail_severity: 7,
    fail_mode: 'Data interface has high error rate',
    fail_cause:
      'The impedance of the signal path through the POGO pins and PCB is not well-controlled, causing reflections and degrading the Ethernet signal.',
    risk_prevention:
      'FuncR_022 requires this support. The design allows various data protocols to be implemented (D2.5, pg 41).',
    risk_occurrence: 5,
    risk_detection: 'Verification is by Testing.',
    risk_detScore: 4,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Perform a detailed signal integrity analysis of the entire data path for the Ethernet protocol. This may require a custom PCB layout with optimized trace routing and impedance control.',
    opt_detection:
      'During design verification, use a network analyzer to measure the insertion loss, return loss, and impedance profile of the data channel. Perform an Ethernet eye diagram test.',
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
    opt_remarks:
      'D2.5, FuncR_022, page 15, No specific Ethernet performance data cited'
  },
  {
    id: 'FC_122',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Power Conversion',
    structure_nextLower: 'Input Voltage Range',
    func_nextHigher: 'Provide local low-level bus generation.',
    func_focus: 'Operate from a regulated 24V bus (Table 6-1).',
    func_nextLower:
      'The DC\/DC converters must operate over the full input voltage range of 23.5V to 24.5V.',
    fail_effect:
      'Bus voltage sags below 23.5V | The DC\/DC converter shuts down due to undervoltage lockout | The controller loses power.',
    fail_severity: 7,
    fail_mode: 'Fails to operate at low input voltage',
    fail_cause:
      'The input bus voltage drops below the specified minimum due to a brownout on the spacecraft power system.',
    risk_prevention: 'The operating voltage range is specified in Table 6-1.',
    risk_occurrence: 4,
    risk_detection: 'Testing would verify operation over the specified range.',
    risk_detScore: 4,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Select DC\/DC converters with a wider input voltage range to provide more margin against bus voltage fluctuations.',
    opt_detection:
      'Perform a power supply corner test, verifying full functionality of the HOTDOCK at the minimum and maximum specified input voltages and temperatures.',
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
    opt_remarks:
      'D2.5, Table 6-1, page 46, No specific spacecraft bus specification cited'
  },
  {
    id: 'FC_124',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Structure',
    structure_focus: 'Max Gap Before Locking',
    structure_nextLower: 'Interface Gap',
    func_nextHigher: 'Provide mechanical alignment and connection.',
    func_focus:
      'The coupling procedure can be initiated with an acceptable remaining distance.',
    func_nextLower:
      'The maximum acceptable gap before locking is 2mm (Figure 5-7).',
    fail_effect:
      'Locking is attempted with a gap > 2mm | The locking balls cannot engage the form-fit geometry correctly | The mechanism jams or is damaged.',
    fail_severity: 7,
    fail_mode: 'Fails to lock',
    fail_cause:
      'The robotic arm stops the approach prematurely, leaving a gap larger than 2mm, but the lock command is still issued.',
    risk_prevention:
      'The maximum gap is defined by the design. Proximity sensors are used to detect alignment (OpR_008).',
    risk_occurrence: 5,
    risk_detection:
      'The proximity sensors should prevent this, but their range and accuracy are key.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'The control logic must include a pre-condition check that verifies the proximity sensors report a gap of less than 2mm before allowing the locking sequence to begin.',
    opt_detection:
      'Characterize the proximity sensor output versus distance to ensure it can reliably and accurately measure the gap and enable a robust go\/no-go decision.',
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
    opt_remarks: 'D2.5, Figure 5-7, page 40, D2.5, OpR_008, page 26'
  },
  {
    id: 'FC_137',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'POGO Pin Connector',
    structure_nextLower: 'Pin Contact Surface (Gold Plating)',
    func_nextHigher: 'Provide a separable interface for power and data.',
    func_focus:
      'Establish and maintain a low-resistance connection over the mission lifetime.',
    func_nextLower:
      'Provide a durable, low-resistance contact surface for 100-1000 mating cycles (OpR_002).',
    fail_effect:
      'Gold plating wears through | The underlying nickel and base metal are exposed | Contact resistance increases significantly due to oxidation | High voltage drop on power pins, or poor signal integrity on data lines.',
    fail_severity: 7,
    fail_mode: 'Contact resistance too high',
    fail_cause:
      'Abrasive wear of the thin gold plating on the pin tip and pad after exceeding the specified number of mating cycles.',
    risk_prevention:
      'OpR_002 requires reusability for 100-1000 cycles, implying a durable plating selection.',
    risk_occurrence: 5,
    risk_detection:
      "Life testing is the primary verification. Verification for OpR_002 is 'Testing'.",
    risk_detScore: 6,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Specify a hard gold plating of sufficient thickness per space industry standards for high-mating-cycle connectors.',
    opt_detection:
      'Perform a mating cycle life test for the maximum specified number of cycles, periodically measuring contact resistance to characterize degradation.',
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
    opt_remarks: 'D2.5, OpR_002, page 25, no evidence'
  },
  {
    id: 'FC_143',
    history: '',
    structure_nextHigher: 'HOTDOCK Electrical Interface',
    structure_focus: 'EMI Shielding',
    structure_nextLower: 'Housing Conductivity',
    func_nextHigher: 'Provide a reliable electrical interface.',
    func_focus:
      'Not cause electro-magnetic interference (EMI) in coupled modules per FuncR_016.',
    func_nextLower:
      'The housing must act as a Faraday cage to contain radiated emissions and protect from radiated susceptibility.',
    fail_effect:
      'The surface coating on the housing is non-conductive (e.g., standard anodize) | The housing does not provide effective EMI shielding | Internal noise from the motor driver radiates out, interfering with other spacecraft systems.',
    fail_severity: 7,
    fail_mode: 'Causes electromagnetic interference',
    fail_cause:
      'The aluminum housing has a non-conductive anodize coating, which electrically isolates the different parts of the housing and prevents it from acting as an effective Faraday cage.',
    risk_prevention: 'FuncR_016 requires EMC.',
    risk_occurrence: 5,
    risk_detection:
      'Verification is by Testing. A radiated emissions test would detect this.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Specify a conductive surface coating for the housing (e.g., chemical conversion coating like Alodine\/Iridite) and ensure electrical bonding between all housing components with EMI gaskets.',
    opt_detection:
      'Perform a radiated emissions test (e.g., per MIL-STD-461) to verify the shielding effectiveness of the housing.',
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
    opt_remarks: 'D2.5, FuncR_016, page 14, No specific coating type cited'
  },
  {
    id: 'FC_144',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'H-Bridge Motor Driver',
    structure_nextLower: 'Thermal Interface Material (TIM)',
    func_nextHigher: 'Control the brushless DC motor.',
    func_focus: 'Drive the 3-phase motor by switching current to the windings.',
    func_nextLower:
      'Provide a low thermal resistance path from the power MOSFETs to the housing\/heatsink.',
    fail_effect:
      'TIM is omitted or incorrectly applied | Thermal resistance is high | MOSFETs overheat during operation | The driver enters thermal shutdown or fails permanently.',
    fail_severity: 7,
    fail_mode: 'Fails to drive motor (thermal shutdown)',
    fail_cause:
      'The thermal interface material (e.g., thermal grease or gap pad) between the motor driver IC and the main housing is omitted during assembly.',
    risk_prevention:
      'IntR_006 requires a thermal connection to the module structure. This implies a heat path for all components.',
    risk_occurrence: 4,
    risk_detection:
      'A thermal analysis would identify this need. A final inspection should verify its presence. A thermal test under load would detect the failure.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Make the application of TIM a formal, inspected step in the assembly procedure. Use a thermal pad instead of grease to ensure consistent application.',
    opt_detection:
      'During functional testing, run the motor under load for an extended period and use a thermal camera or thermocouples to verify the motor driver temperature remains within safe limits.',
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
    opt_remarks: 'D2.5, IntR_006, page 24, No specific assembly procedure cited'
  },
  {
    id: 'FC_148',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Gearing System',
    structure_nextLower: 'Gear Teeth Surfaces',
    func_nextHigher: 'Transmit and amplify torque.',
    func_focus: 'Transmit torque reliably over mission life.',
    func_nextLower:
      'Maintain surface integrity to transfer load without failure.',
    fail_effect:
      'Gear tooth surface experiences pitting | Increased noise and vibration, accelerated wear | The gearbox fails prematurely.',
    fail_severity: 7,
    fail_mode: 'Actuation is noisy or fails prematurely',
    fail_cause:
      "Surface fatigue (micropitting) of gear teeth due to high contact stress cycles exceeding the material's surface endurance limit.",
    risk_prevention:
      'DesR_015 requires peak hertzian contact stress to be below 93% of yield, which limits static overload but not necessarily fatigue.',
    risk_occurrence: 5,
    risk_detection: 'A life test is the primary verification method.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Perform a gear surface fatigue analysis (e.g., per AGMA standards). Select materials and heat treatments with high surface durability and use a lubricant with appropriate anti-wear additives.',
    opt_detection:
      'During life testing, perform periodic oil sample analysis (if oil lubricated) or visual inspection of gear teeth for signs of pitting.',
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
    opt_remarks: 'D2.5, DesR_015, page 21, no evidence'
  },
  {
    id: 'FC_163',
    history: '',
    structure_nextHigher: 'Servicer Spacecraft (SVC)',
    structure_focus: 'On-Board Computer (OBC-S)',
    structure_nextLower: 'PUS Service Software',
    func_nextHigher: 'Manage all operations of the servicer spacecraft.',
    func_focus:
      'Provide Telemetry and Telecommand (TTC) service for communication with the MCC.',
    func_nextLower:
      'Process incoming PUS telecommand packets and generate PUS telemetry packets.',
    fail_effect:
      'A bug in the PUS service corrupts a telemetry packet | The MCC receives a malformed packet and cannot parse it | Ground loses visibility into HOTDOCK status | Inability to safely monitor and control the reconfiguration.',
    fail_severity: 7,
    fail_mode: 'Fails to send valid telemetry',
    fail_cause:
      'A buffer-handling error in the PUS telemetry generation service causes it to send a packet with an incorrect length field.',
    risk_prevention:
      'The TTC service is based on the ESROCOS PUS Services library (D2.4, Section 6.3). This provides a robust starting point.',
    risk_occurrence: 4,
    risk_detection:
      'This would be detected during ground software\/flight software integration testing.',
    risk_detScore: 4,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Develop a formal Interface Control Document (ICD) for all PUS packets. Use a protocol validation tool to verify all transmitted packets against the ICD.',
    opt_detection:
      'Perform extensive integration testing between the OBC-S and the MCC software, exercising all TM\/TC types.',
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
    opt_remarks: 'MOSAR D2.4, page 74, No evidence'
  },
  {
    id: 'FC_166',
    history: '',
    structure_nextHigher: 'Spacecraft Module (SM2-PWS)',
    structure_focus: 'Thermal Payload',
    structure_nextLower: 'Fluid Pump',
    func_nextHigher:
      'Provide power and thermal services for the modular spacecraft.',
    func_focus:
      'Provide a dedicated SI with a thermal interface to perform forced heat exchange with another module (e.g., SM4-THS).',
    func_nextLower:
      'Circulate coolant fluid through the thermal loop to transfer heat.',
    fail_effect:
      'Pump seizes or fails to operate | Coolant fluid does not circulate | Heat cannot be transferred from the PWS to the THS | The HOTDOCK thermal interface function is lost; PWS module may overheat.',
    fail_severity: 7,
    fail_mode: 'Fails to provide thermal transfer',
    fail_cause:
      'Mechanical failure of the pump motor or impeller due to wear-out over the mission life.',
    risk_prevention:
      'The SM2-PWS contains the pump for the thermal payload. The thermal interface is based on the OG5 design. (D2.4, Section 6.4.3)',
    risk_occurrence: 4,
    risk_detection:
      'Failure would be detected by monitoring flowmeter telemetry and temperature readings from the thermal payload. (D2.4, Table 6-3)',
    risk_detScore: 3,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Select a high-reliability, space-qualified fluid pump with a design life that exceeds the mission requirements. Implement redundant pumps in the thermal loop design.',
    opt_detection:
      'Perform an accelerated life test on the fluid pump to validate its lifetime and identify wear-out mechanisms.',
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
    opt_remarks: 'MOSAR D2.4, page 79, MOSAR D2.4, Table 6-3, page 80'
  },
  {
    id: 'FC_180',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Structure',
    structure_focus: 'Housing',
    structure_nextLower: 'External Surface',
    func_nextHigher: 'Provide the main structure and enclosure.',
    func_focus: 'Protect internal components from the space environment.',
    func_nextLower:
      'Withstand exposure to the space environment, including micrometeoroids.',
    fail_effect:
      'A micrometeoroid or orbital debris (MMOD) particle impacts the housing | A crater is formed, or in a high-energy impact, the housing is perforated | If perforated, internal components are exposed to vacuum and radiation | Potential for damage to internal electronics or mechanisms.',
    fail_severity: 7,
    fail_mode: 'Loss of protective enclosure',
    fail_cause:
      'Hypervelocity impact from a micrometeoroid or piece of orbital debris that exceeds the ballistic limit of the aluminum housing.',
    risk_prevention:
      'The design must withstand the space environment (EnvR_001), which implicitly includes MMOD.',
    risk_occurrence: 3,
    risk_detection:
      'None identified in documents. This is a probabilistic event that is designed against by analysis.',
    risk_detScore: 10,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Perform an MMOD risk analysis based on the mission orbit and duration. If required, add external shielding (e.g., a Whipple shield) to protect critical areas.',
    opt_detection:
      'Post-mission (if returned) or via remote camera inspection, visually inspect external surfaces for signs of MMOD impacts.',
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
    opt_remarks: 'D2.5, EnvR_001, page 28, No specific MMOD analysis cited'
  },
  {
    id: 'FC_200',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Brushless DC Motor (MAXON EC 32 flat)',
    structure_nextLower: 'Permanent Magnets (Rotor)',
    func_nextHigher: 'Rotate locking ring to engage\/disengage.',
    func_focus: 'Generate rotational torque and hold position when unpowered.',
    func_nextLower:
      'Provide a magnetic field for torque generation and detent torque.',
    fail_effect:
      'Motor has high residual magnetism | A high residual torque exists even when unpowered | The mechanism is difficult to backdrive, even when commanded to be free | Inability to separate interfaces if the secondary unlock mechanism relies on back-driving.',
    fail_severity: 7,
    fail_mode: 'Fails to allow de-mating',
    fail_cause:
      "A high current event (like a stall or short circuit) partially remagnetizes the stator, creating a strong residual torque or 'cogging' that acts like a brake.",
    risk_prevention:
      'None identified in documents. This is a subtle motor physics failure.',
    risk_occurrence: 3,
    risk_detection:
      'The failure would be detected as abnormally high torque required to back-drive the mechanism.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Implement a degaussing step in the motor control firmware that can be commanded after a high current fault, applying a decaying AC signal to the windings.',
    opt_detection:
      'After a locked-rotor test, measure the unpowered back-drive torque of the mechanism to check for any increase in residual torque.',
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
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_080',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Memory',
    structure_nextLower: 'Flash Memory for Logging',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus: "Log the system's state (D2.5, pg 46).",
    func_nextLower: 'Store data persistently in non-volatile memory.',
    fail_effect:
      'Logging function causes excessive writes to flash | Flash memory endurance is exceeded | Inability to write new log data, or worse, corruption of firmware area if memory is shared | Loss of diagnostic data, or controller failure.',
    fail_severity: 6,
    fail_mode: 'Fails to store logs',
    fail_cause:
      'A software bug in a logging routine writes data to flash memory too frequently (e.g., in a tight loop instead of on state change), causing premature wear-out.',
    risk_prevention:
      'The controller has 2048 KBytes of flash for programming and logging.',
    risk_occurrence: 5,
    risk_detection:
      'This would likely be discovered during long-duration testing.',
    risk_detScore: 7,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Implement a firmware architecture where logging to flash is strictly controlled, buffered in RAM, and only written when necessary (e.g., on significant events or before shutdown). Implement wear-leveling.',
    opt_detection:
      'During software validation, perform a code path analysis to identify all functions that write to flash memory and verify their execution frequency against the endurance limits of the memory.',
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
    opt_remarks:
      'D2.5, Section 6.2, page 46, No specific software development plan cited'
  },
  {
    id: 'FC_130',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'Connector Plate PCB',
    structure_nextLower: 'Ground Plane',
    func_nextHigher: 'Provide a common interconnection platform.',
    func_focus: 'Provide a stable ground reference and shielding.',
    func_nextLower:
      'A large copper layer in the PCB that serves as the ground return path.',
    fail_effect:
      'A split or break in the ground plane | Ground return paths become long and inductive | Increased noise and ground bounce, potential for EMI problems | Unreliable data communication.',
    fail_severity: 6,
    fail_mode: 'Signal integrity is degraded',
    fail_cause:
      'A PCB layout design choice creates a split in the ground plane that a critical high-speed signal must cross.',
    risk_prevention:
      'Good PCB layout practice is assumed. The design must meet EMC requirements (FuncR_016).',
    risk_occurrence: 4,
    risk_detection:
      'This is a subtle design flaw that may not be caught by basic functional testing.',
    risk_detScore: 7,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Establish a formal PCB layout design rule that mandates the use of a continuous, solid ground plane under all high-speed signal traces.',
    opt_detection:
      'Use a PCB layout analysis tool to automatically check for any instances where high-speed traces cross splits in the ground or power planes.',
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
    opt_remarks: 'D2.5, FuncR_016, page 14, No specific layout rules cited'
  },
  {
    id: 'FC_131',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Microcontroller',
    structure_nextLower: 'Analog-to-Digital Converter (ADC)',
    func_nextHigher:
      'Control all HOTDOCK functionalities and provide telemetry.',
    func_focus:
      'Convert analog sensor signals to digital values with specified accuracy per FuncR_028.',
    func_nextLower:
      'Maintain a linear voltage-to-digital transfer function over the operating range.',
    fail_effect:
      'ADC has poor linearity | Sensor readings are non-linearly distorted | Incorrect telemetry reported, motor control loop may become unstable at certain operating points | Unreliable operation, potential for incorrect fault detection.',
    fail_severity: 6,
    fail_mode: 'Reports inaccurate telemetry (non-linear error)',
    fail_cause:
      "Degradation of the ADC's differential non-linearity (DNL) or integral non-linearity (INL) due to total ionizing dose (TID) radiation effects.",
    risk_prevention:
      'Controller uses 24 ADC inputs (D2.5, page 46). EnvR_001 requires withstanding space environment.',
    risk_occurrence: 5,
    risk_detection:
      'None identified in documents. A simple functional test would not detect subtle non-linearity.',
    risk_detScore: 8,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Select a microcontroller with a radiation-characterized ADC or provide shielding. Implement software calibration routines to correct for known non-linearities.',
    opt_detection:
      "Perform a full characterization of the ADC's INL\/DNL over the full temperature range before and after radiation exposure testing.",
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
    opt_remarks: 'D2.5, page 46, EnvR_001, page 28'
  },
  {
    id: 'FC_183',
    history: '',
    structure_nextHigher: 'MOSAR Demonstrator',
    structure_focus: 'Design and Simulation Tool',
    structure_nextLower: 'Thermal Model',
    func_nextHigher: 'Enable ground-based validation of reconfiguration plans.',
    func_focus:
      'Simulate the system to verify the reconfiguration plan before upload.',
    func_nextLower:
      'Model the thermal properties of the SMs and the heat transfer between them.',
    fail_effect:
      'The thermal model in the simulator is inaccurate | The simulation incorrectly predicts that the PWS will not overheat | The plan is approved and executed | The real PWS overheats, causing a fault or damage.',
    fail_severity: 6,
    fail_mode: 'Causes in-space failure due to incorrect plan',
    fail_cause:
      'The thermal resistance across the HOTDOCK thermal interface is modeled with an incorrect (too low) value in the simulator.',
    risk_prevention:
      'The simulator is used to validate the plan before execution. It includes thermal models. (D2.4, Section 6.1.3.3)',
    risk_occurrence: 5,
    risk_detection:
      'The model inaccuracy would only be discovered by comparison with data from the real hardware.',
    risk_detScore: 7,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      "Create a 'digital twin' approach where the simulation models are continuously updated and validated with telemetry data from the actual hardware.",
    opt_detection:
      'Perform a dedicated test on the hardware to characterize the thermal resistance of the HOTDOCK interface, and use this data to validate the simulation model.',
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
    opt_remarks: 'MOSAR D2.4, page 65, No specific model validation plan cited'
  },
  {
    id: 'FC_097',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'CAN Transceiver',
    structure_nextLower: 'Common Mode Choke',
    func_nextHigher: 'Allow command and telemetry exchange.',
    func_focus: 'Transmit and receive differential signals on the CAN bus.',
    func_nextLower:
      'Filter common-mode noise from the CAN bus to improve signal integrity and emissions.',
    fail_effect:
      'Choke saturates due to a large common-mode current | The choke is no longer effective as a filter | Increased susceptibility to common-mode noise, potential for communication errors.',
    fail_severity: 4,
    fail_mode: 'Communication is intermittent',
    fail_cause:
      "A large common-mode noise event from another subsystem on the spacecraft couples onto the bus and exceeds the choke's rating.",
    risk_prevention:
      'FuncR_016 requires EMC. Standard design practice includes filtering.',
    risk_occurrence: 4,
    risk_detection:
      'This would be difficult to diagnose, manifesting as random communication errors.',
    risk_detScore: 8,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'Analyze the system-level grounding and noise environment to select a common-mode choke with sufficient impedance and current rating to handle worst-case noise.',
    opt_detection:
      'Perform common-mode injection testing on the CAN bus interface to verify its immunity to noise up to the required system-level specification.',
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
    opt_remarks:
      'D2.5, FuncR_016, page 14, No specific design schematic provided'
  },
  {
    id: 'FC_102',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'POGO Pin Connector',
    structure_nextLower: 'Number of Connections',
    func_nextHigher: 'Provide a separable interface for power and data.',
    func_focus: 'Provide 128 connections for data and power transmission.',
    func_nextLower:
      'Maintain sufficient pins to support all required signals and power, including redundancy.',
    fail_effect:
      'A single pin fails open-circuit | Redundancy for that signal is lost | The system continues to operate on the primary line | No immediate effect, but the system is no longer single-fault tolerant.',
    fail_severity: 4,
    fail_mode: 'Loss of redundancy',
    fail_cause:
      'A single POGO pin fails to make contact due to a manufacturing defect or contamination.',
    risk_prevention:
      'The current version includes 128 connections, allowing for signal redundancy (D2.5, pg 40). DesR_003 requires one-failure-tolerance redundancy.',
    risk_occurrence: 5,
    risk_detection:
      'Detecting the failure of a single redundant line is not possible without a specific test.',
    risk_detScore: 9,
    risk_ap: 'M',
    risk_filter: '',
    opt_preventive:
      'For critical redundant signals, implement a circuit that allows each line to be tested independently (e.g., by disabling the primary driver and checking for a signal on the secondary line).',
    opt_detection:
      "Develop a 'redundancy check' mode as part of the built-in self-test (BIST) that can be run on the ground to verify the health of all redundant paths.",
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
    opt_remarks: 'D2.5, Section 5.2, page 40, D2.5, DesR_003, page 18'
  },
  {
    id: 'FC_064',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Microcontroller',
    structure_nextLower: 'Non-Volatile Memory (Flash)',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus: 'Execute firmware and store persistent data.',
    func_nextLower:
      'Store the executable firmware code and configuration parameters.',
    fail_effect:
      'Flash memory cell fails (stuck bit) | A critical instruction in the firmware is corrupted | Firmware execution fails, checksum error on boot | Controller fails to boot or crashes.',
    fail_severity: 9,
    fail_mode: 'Firmware is corrupted',
    fail_cause:
      'Exceeding the limited write\/erase endurance of the flash memory cell during extensive ground testing and repeated firmware uploads.',
    risk_prevention:
      'The controller has 2048 KBytes of flash (D2.5, pg 46). Component is chosen for the application.',
    risk_occurrence: 3,
    risk_detection:
      'A checksum or CRC is typically used at boot-up to verify firmware integrity.',
    risk_detScore: 3,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Implement wear-leveling algorithms if configuration data is frequently written. Track the number of firmware uploads on each unit during development to ensure endurance limits are not approached.',
    opt_detection:
      'The bootloader must perform a full CRC-32 check of the application firmware before attempting to boot it. If the check fails, it should enter a safe recovery mode.',
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
    opt_remarks: 'D2.5, Section 6.2, page 45, No specific test procedure cited'
  },
  {
    id: 'FC_094',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'Connector Plate PCB',
    structure_nextLower: 'Conformal Coating',
    func_nextHigher: 'Provide a common mounting and interconnection platform.',
    func_focus: 'Protect the PCB assembly from the environment.',
    func_nextLower:
      'Provide a protective dielectric layer over the circuit board to prevent short circuits from conductive debris.',
    fail_effect:
      'Conformal coating is not applied | A loose piece of conductive debris (e.g., wire strand, fastener) lands on the PCB | A short circuit occurs between two traces | Failure of the controller.',
    fail_severity: 9,
    fail_mode: 'Fails to protect from short circuits',
    fail_cause:
      'Procedural error during assembly where the conformal coating step is missed.',
    risk_prevention:
      'None identified in documents. Conformal coating is standard practice for space-grade electronics but not explicitly required.',
    risk_occurrence: 3,
    risk_detection:
      'A dedicated quality inspection step is required to detect this.',
    risk_detScore: 3,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Mandate the application of a space-qualified conformal coating (e.g., acrylic or urethane) to all PCB assemblies, and specify masking requirements for connectors and test points.',
    opt_detection:
      'Incorporate a UV-light inspection step into the quality assurance plan to verify the presence and uniform application of the conformal coating (which typically contains a UV tracer).',
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
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_099',
    history: '',
    structure_nextHigher: 'HOTDOCK Thermal Interface',
    structure_focus: 'Hydraulic Fluid Connector',
    structure_nextLower: 'Fluid Type',
    func_nextHigher: 'Provide an active thermal interface.',
    func_focus: 'Circulate fluid for heat exchange.',
    func_nextLower:
      'The fluid must have appropriate thermal properties and remain liquid over the entire operating temperature range.',
    fail_effect:
      'The coolant fluid freezes | The fluid expands, potentially rupturing the bellows or connector body. Flow is blocked. | Catastrophic failure of the thermal loop, coolant leak.',
    fail_severity: 9,
    fail_mode: 'Fails to circulate fluid',
    fail_cause:
      'The selected coolant fluid has a freezing point higher than the minimum survival temperature of the spacecraft, and the loop is inactive during a cold soak.',
    risk_prevention:
      'The interface must operate from -55C to +85C (EnvR_003). The design has been successfully tested for fluid type (D2.5, pg 42).',
    risk_occurrence: 3,
    risk_detection: 'Analysis and testing verify the design.',
    risk_detScore: 4,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Select a coolant fluid (e.g., a specific formula of Galden or Fluorinert) with a freezing point well below the -55C minimum operating temperature.',
    opt_detection:
      'Perform thermal vacuum testing where the entire thermal loop is allowed to cold-soak to the minimum survival temperature, and then verify that the pump can be started and flow can be initiated.',
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
    opt_remarks: 'D2.5, EnvR_003, page 28, D2.5, Section 5.3, page 42'
  },
  {
    id: 'FC_107',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Firmware',
    structure_nextLower: 'Emergency Stop Logic',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus:
      "Provide a 'Stop' command to halt the operation of the device (D2.5, pg 34).",
    func_nextLower:
      'Immediately cease all motor PWM signals upon receiving the STOP_1 telecommand.',
    fail_effect:
      'Emergency stop command is ignored | The mechanism continues to move when commanded to stop | Potential for collision or damage if the stop was issued to prevent a hazard.',
    fail_severity: 9,
    fail_mode: 'Fails to stop on command',
    fail_cause:
      'A software bug in the command handling logic prioritizes an ongoing motion command over the emergency stop command.',
    risk_prevention:
      'The STOP_1 command (TC_2) is a defined part of the telecommand interface.',
    risk_occurrence: 3,
    risk_detection:
      'This would be a specific test case in the functional validation.',
    risk_detScore: 3,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Design the firmware so that the emergency stop command is handled at the highest priority interrupt level, bypassing any normal state machine logic.',
    opt_detection:
      'Perform a specific test where the emergency stop command is issued in the middle of every possible type of motion to verify it works reliably.',
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
    opt_remarks:
      'D2.5, Table 4-1, page 34, No specific software architecture cited'
  },
  {
    id: 'FC_116',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Memory',
    structure_nextLower: 'Wait States',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus: 'Execute firmware at a defined speed.',
    func_nextLower:
      'The memory (flash) access time must be compatible with the processor clock speed.',
    fail_effect:
      'Incorrect number of wait states configured | The processor tries to read from flash memory before the data is ready | Corrupt instructions are fetched, leading to a hard fault or crash.',
    fail_severity: 9,
    fail_mode: 'Firmware crashes',
    fail_cause:
      "The flash memory wait states are incorrectly configured in the microcontroller's startup code for the given clock frequency.",
    risk_prevention:
      'This is a fundamental aspect of embedded system design. It is assumed to be done correctly.',
    risk_occurrence: 2,
    risk_detection:
      'The failure would occur immediately at startup during initial board bring-up.',
    risk_detScore: 2,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      "The firmware startup code must be carefully reviewed to ensure it correctly configures the flash memory controller based on the system clock speed and the memory's datasheet specifications.",
    opt_detection:
      'Perform a corner analysis test, running the system at the maximum and minimum specified clock frequencies and temperatures to verify stable operation.',
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
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_179',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Firmware',
    structure_nextLower: 'Bootloader',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus: 'Initialize the system on power-up.',
    func_nextLower:
      'Perform a checksum\/CRC of the main application firmware before booting it.',
    fail_effect:
      "A bug in the bootloader's CRC calculation | The bootloader incorrectly calculates the CRC of a valid image and fails the check | The bootloader refuses to boot a valid application | The device fails to start.",
    fail_severity: 9,
    fail_mode: 'Fails to boot',
    fail_cause:
      "A software bug in the bootloader's CRC32 algorithm implementation (e.g., incorrect polynomial or endianness handling).",
    risk_prevention:
      'None identified in documents. A validating bootloader is a standard feature.',
    risk_occurrence: 3,
    risk_detection:
      'This would be found during initial software development and testing.',
    risk_detScore: 3,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Use a standard, well-verified library implementation of the CRC algorithm. The ground tools that generate the firmware image must use the exact same algorithm.',
    opt_detection:
      "Perform end-to-end testing where a valid image is generated by the ground tools, loaded onto the hardware, and the bootloader's calculated CRC is read out via a debug port to verify it matches the expected value.",
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
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_031',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Structure',
    structure_focus: 'Movable Locking Ring',
    structure_nextLower: 'Ring Structure',
    func_nextHigher:
      'Provide mechanical alignment, connection, and load transfer.',
    func_focus: 'Rotate to drive the steel balls into their locked position.',
    func_nextLower:
      'Maintain its circular profile and structural integrity while rotating and under external loads.',
    fail_effect:
      'Locking ring yields or cracks | Ring jams against the housing or can no longer actuate the locking balls correctly | Mechanism fails to lock or unlock.',
    fail_severity: 8,
    fail_mode: 'Fails to rotate',
    fail_cause:
      'Yielding of the aluminum ring structure due to a high-energy impact from a mishandling event during ground operations.',
    risk_prevention:
      'HumR_001 implies safe handling. DesR_005 mandates a robust design.',
    risk_occurrence: 3,
    risk_detection:
      'Final inspection and functional testing would detect a pre-existing jam.',
    risk_detScore: 4,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Design and fabricate dedicated ground support equipment (GSE), including handling fixtures and protective covers, to be used whenever the HOTDOCK is moved or transported.',
    opt_detection:
      'Perform a detailed dimensional inspection of all critical mechanical components upon receipt from the machine shop and before starting assembly.',
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
    opt_remarks: 'D2.5, HumR_001, page 29, D2.5, DesR_005, page 18'
  },
  {
    id: 'FC_063',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'Connector Plate PCB',
    structure_nextLower: 'Manufacturing Stencil',
    func_nextHigher: 'Provide a common mounting and interconnection platform.',
    func_focus:
      'Maintain the correct position and height of the POGO pins (D2.5, pg 42).',
    func_nextLower:
      'Control the volume and placement of solder paste for attaching the POGO pins.',
    fail_effect:
      "Stencil aperture is incorrect | Insufficient solder paste is deposited | A weak or 'cold' solder joint is formed | The POGO pin detaches from the PCB under mechanical stress | Open circuit.",
    fail_severity: 8,
    fail_mode: 'Fails to provide structural support for POGO pin',
    fail_cause:
      'Incorrect stencil design or manufacturing process leads to insufficient solder paste deposition for the POGO pin pads.',
    risk_prevention:
      'The manufacturing process requires custom-made stencils. This implies process control.',
    risk_occurrence: 3,
    risk_detection:
      'Automated Optical Inspection (AOI) after solder reflow can detect insufficient solder fillets.',
    risk_detScore: 3,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Develop and qualify the PCB assembly process, including stencil design and solder paste inspection (SPI), according to a recognized space-grade standard like NASA-STD-8739.',
    opt_detection:
      'Perform shear testing on witness POGO pins on a sample board from the production lot to verify the mechanical strength of the solder joints.',
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
    opt_remarks:
      'D2.5, Section 5.2.3, page 42, No specific manufacturing standard cited'
  },
  {
    id: 'FC_065',
    history: '',
    structure_nextHigher: 'HOTDOCK Harnessing',
    structure_focus: 'External Connectors',
    structure_nextLower: 'Connector Pins',
    func_nextHigher:
      'Provide interface for control, data, and power harnessing.',
    func_focus: 'Connect internal harnessing to the spacecraft-side harness.',
    func_nextLower: 'Provide a separable, low-resistance electrical contact.',
    fail_effect:
      'A pin is bent during mating\/de-mating | Pin fails to engage with socket | Open circuit for that line | Loss of power or communication to the entire HOTDOCK.',
    fail_severity: 8,
    fail_mode: 'Fails to make electrical contact (open circuit)',
    fail_cause:
      'A pin is bent due to misalignment during connector mating during ground integration.',
    risk_prevention:
      'The back-side features openings for harnessing with connectors facing out (D2.5, pg 37). Use of robust, space-grade connectors is assumed.',
    risk_occurrence: 3,
    risk_detection:
      "A post-mate continuity check (or 'ring-out') is standard procedure.",
    risk_detScore: 2,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Use connectors with more robust, scoop-proof designs. Implement mandatory use of guide pins and a defined, controlled mating procedure.',
    opt_detection:
      'Mandate a full pin-to-pin continuity check immediately after mating any connector during integration activities.',
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
    opt_remarks:
      'D2.5, Section 5.1.2, page 37, No specific procedure document cited'
  },
  {
    id: 'FC_079',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Barrel-Cam Mechanism',
    structure_nextLower: 'Timing Sequence',
    func_nextHigher: 'Translate motor rotation into motion.',
    func_focus:
      'Ensure the timing sequence of the connector plate deployment relative to the locking system (D2.5, pg 41).',
    func_nextLower:
      'The cam profile is shaped to first rotate the locking ring, then extend the connector plate.',
    fail_effect:
      'Incorrect cam profile | Connector plate extends before locking is complete, or locking occurs before plate is retracted | POGO pins are damaged by being driven into an unaligned\/moving target | Damage to connector plate.',
    fail_severity: 8,
    fail_mode: 'Incorrect actuation sequence',
    fail_cause:
      'A manufacturing error in the machining of the barrel cam results in an incorrect motion profile and timing sequence.',
    risk_prevention:
      'The barrel cam is configured to ensure the timing sequence.',
    risk_occurrence: 3,
    risk_detection:
      'Functional testing of the first article would detect this.',
    risk_detScore: 3,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Develop a detailed inspection plan for the barrel cam, including CMM (Coordinate Measuring Machine) checks of the cam profile against the CAD model.',
    opt_detection:
      'Create a test fixture that allows the actuation mechanism to be cycled slowly by hand, with indicators to measure the relative position of the locking ring and connector plate to verify the timing sequence.',
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
    opt_remarks: 'D2.5, Section 5.2, page 41, No manufacturing document cited'
  },
  {
    id: 'FC_126',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Gearing System',
    structure_nextLower: 'Gear Ratio',
    func_nextHigher: 'Transmit and amplify torque.',
    func_focus: 'Amplify torque from the motor to the barrel-cam.',
    func_nextLower:
      'Provide a specific, fixed ratio between input and output speed.',
    fail_effect:
      'Gear ratio is too low | The motor cannot produce enough torque at the output to overcome friction and lock the mechanism | Actuation fails.',
    fail_severity: 8,
    fail_mode: 'Fails to generate sufficient torque',
    fail_cause:
      'A design error in the selection of the gear ratio results in insufficient output torque for worst-case friction and load.',
    risk_prevention:
      'DesR_013 requires the motorization to provide the minimum required torque. This is a primary driver for the gear ratio selection.',
    risk_occurrence: 3,
    risk_detection:
      'Verification is by Analysis and Testing. The failure would be found during loaded functional testing.',
    risk_detScore: 3,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Perform a detailed torque budget analysis for the entire actuation train, including all sources of friction and external loads, and apply a safety margin (e.g., 2x) to determine the required gear ratio.',
    opt_detection:
      'During design verification, use a torque transducer to measure the output torque of the mechanism and verify that it meets or exceeds the requirements with margin.',
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
    opt_remarks: 'D2.5, DesR_013, page 21, No specific torque margin cited'
  },
  {
    id: 'FC_186',
    history: '',
    structure_nextHigher: 'MOSAR System',
    structure_focus: "HOTDOCK 'Fixed' Declination",
    structure_nextLower: 'Internal Pass-through Harness',
    func_nextHigher:
      'Provide a permanent connection between two static components.',
    func_focus:
      'Provide a pass-through connection between two static components (e.g., SM1-DMS and CLT).',
    func_nextLower:
      'Route power and data lines directly from one side of the interface to the other.',
    fail_effect:
      'A wire breaks in the internal harness | An open circuit is created | The permanent link for power or data is lost | Loss of function for the connected module.',
    fail_severity: 8,
    fail_mode: 'Fails to provide electrical continuity (open circuit)',
    fail_cause:
      'Fatigue failure of a solder joint on the internal pass-through PCB due to vibration.',
    risk_prevention:
      "The 'Fixed' declination provides a pass-through connection. (D2.4, Table 6-7)",
    risk_occurrence: 3,
    risk_detection:
      'The failure would be detected during system integration testing as a complete loss of function for the connected module.',
    risk_detScore: 4,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Use high-reliability connectors and workmanship standards for the internal harness. Stake all internal PCBs and connectors to provide support against vibration.',
    opt_detection:
      "Perform a vibration test on the 'Fixed' HOTDOCK, followed by a full pin-to-pin continuity check.",
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
    opt_remarks: 'MOSAR D2.4, Table 6-7, page 90, No evidence'
  },
  {
    id: 'FC_040',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Structure',
    structure_focus: 'Passive\/Mechanical Declinations',
    structure_nextLower: 'Mechanical Structure without Actuator',
    func_nextHigher:
      'Allow for lower cost, simpler versions for specific applications.',
    func_focus:
      'Provide a passive interface that can receive an active one, supporting mechanical, data, and power transfer without actuation.',
    func_nextLower:
      'Maintain the same external form-fit geometry and connector plate position as an active unit.',
    fail_effect:
      'A passive unit is mistakenly installed where an active unit is required | The system cannot be actuated | Mission assembly plan cannot be executed.',
    fail_severity: 7,
    fail_mode: 'Fails to actuate (by design)',
    fail_cause:
      "Procedural error during ground integration where a passive HOTDOCK is installed on a robotic arm's end-effector instead of an active one.",
    risk_prevention:
      'The different declinations are clearly defined (Table 3-1). Configuration management and assembly procedures should prevent this.',
    risk_occurrence: 2,
    risk_detection:
      'A functional check of the robotic arm before the mission would immediately detect the inability to actuate the end-effector.',
    risk_detScore: 2,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Implement a poka-yoke (error-proofing) design feature, such as a different connector or a mechanical keying feature, to physically prevent a passive unit from being installed on a component requiring an active one.',
    opt_detection:
      'Add a mandatory electronic ID check to the system start-up sequence, where the host computer verifies the type of HOTDOCK attached before permitting operations.',
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
    opt_remarks:
      'D2.5, Table 3-1, page 31, No specific procedure document cited'
  },
  {
    id: 'FC_118',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Locking Mechanism',
    structure_focus: 'Actuated Internal Ring',
    structure_nextLower: 'Lubrication',
    func_nextHigher: 'Implement a locking mechanism.',
    func_focus: 'Rotate to drive the steel balls.',
    func_nextLower:
      'Slide with low friction against stationary parts of the housing.',
    fail_effect:
      'Lubricant is not applied or is incorrect | High friction during rotation | Motor requires excessive current, may stall.',
    fail_severity: 7,
    fail_mode: 'Requires excessive torque to actuate',
    fail_cause:
      'The dry film lubricant on the sliding surfaces of the actuated ring was omitted during assembly.',
    risk_prevention:
      'DesR_012 requires lubrication for contact surfaces in relative motion.',
    risk_occurrence: 3,
    risk_detection:
      'Functional testing while monitoring motor current would detect the high friction.',
    risk_detScore: 3,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Create a detailed assembly and lubrication plan that clearly shows which surfaces require lubricant and what type to use. Make lubrication a formal, inspected step in the process.',
    opt_detection:
      'Measure the no-load running current of the actuation mechanism as a standard acceptance test. A high current indicates a friction problem.',
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
    opt_remarks: 'D2.5, DesR_012, page 20, No specific assembly procedure cited'
  },
  {
    id: 'FC_187',
    history: '',
    structure_nextHigher: 'MOSAR Demonstrator',
    structure_focus: 'System Integration',
    structure_nextLower: 'HOTDOCK Declination Selection',
    func_nextHigher: 'Assemble the modular spacecraft demonstrator.',
    func_focus:
      'Use different HOTDOCK declinations (Active, Passive, Mechanical) to connect components.',
    func_nextLower:
      'Install the correct type of HOTDOCK at each interface location per the assembly plan.',
    fail_effect:
      "The wrong declination is installed (e.g., 'Mechanical' instead of 'Passive') | Data and power pins are missing | The system cannot route power or data to the module | Assembly sequence fails.",
    fail_severity: 7,
    fail_mode: 'Fails to provide power\/data connection',
    fail_cause:
      "Human error during assembly, where a 'Mechanical' only HOTDOCK is installed in a location that requires a 'Passive' data\/power interface.",
    risk_prevention:
      'The different declinations are defined in Table 3-1. Configuration management should prevent this.',
    risk_occurrence: 3,
    risk_detection:
      'The failure would be detected during the first power-on or communication test with the affected module.',
    risk_detScore: 3,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Implement clear, unambiguous labeling on all HOTDOCK declinations. Use a keying system (poka-yoke) with different connectors for each declination to make incorrect installation physically impossible.',
    opt_detection:
      "Use a 'smart' assembly procedure with barcode scanners to verify each component's part number is correct before it is installed.",
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
    opt_remarks:
      'D2.5, Table 3-1, page 31, No assembly procedure document cited'
  },
  {
    id: 'FC_195',
    history: '',
    structure_nextHigher: 'HOTDOCK Sensors',
    structure_focus: 'Proximity Sensor (Hall effect)',
    structure_nextLower: 'Sensor IC',
    func_nextHigher: 'Provide telemetry and sensor data for control.',
    func_focus:
      'Detect good alignment before starting the mating process (OpR_008).',
    func_nextLower:
      'Generate a signal based on the proximity of a magnet on the mating interface.',
    fail_effect:
      'The sensor IC fails (e.g. no output) | The controller receives no proximity signal | The controller logic prevents mating from being initiated | The mission is inhibited.',
    fail_severity: 7,
    fail_mode: 'Fails to provide proximity signal',
    fail_cause:
      'A failure of the internal oscillator or other circuitry within the Hall effect sensor IC.',
    risk_prevention:
      'The design includes proximity sensors (Figure 3-1, Table 4-2). Four redundant sensors are listed.',
    risk_occurrence: 3,
    risk_detection:
      'The controller would detect the lack of a valid signal from one sensor and could rely on the other three.',
    risk_detScore: 3,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Use four redundant sensors and implement a voting logic in the firmware to tolerate the failure of at least one sensor.',
    opt_detection:
      'Develop a test procedure that can verify the functionality of each proximity sensor independently.',
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
    opt_remarks: 'D2.5, Figure 3-1, page 30, D2.5, Table 4-2, page 35'
  },
  {
    id: 'FC_034',
    history: '',
    structure_nextHigher: 'HOTDOCK Interface',
    structure_focus: 'Androgynous Design Feature',
    structure_nextLower: 'Symmetric Characteristic of Connector Plate',
    func_nextHigher: 'Allow any HOTDOCK to mate with any other HOTDOCK.',
    func_focus:
      'Have an androgynous design on both mechanical and electrical connections (DesR_001).',
    func_nextLower:
      'Arrange pogo pins and pads in mirror to ensure connectivity regardless of orientation.',
    fail_effect:
      "An error in the PCB layout breaks the mirror symmetry | One quadrant's connections are incorrect when mated | Data or power links fail to establish in certain orientations | Loss of 90-degree symmetry redundancy, potential mission impact if a specific orientation is required.",
    fail_severity: 6,
    fail_mode: 'Fails to connect in all valid orientations',
    fail_cause:
      'A layout error in the connector plate PCB swaps two pins, violating the androgynous design symmetry.',
    risk_prevention:
      'DesR_001 requires an androgynous design. Verification is by Review of Design.',
    risk_occurrence: 3,
    risk_detection:
      'A full physical fit-check and electrical continuity test with two prototype units would reveal the error.',
    risk_detScore: 4,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Implement a formal design rule check (DRC) script that specifically verifies the pinout symmetry of the connector plate layout against the design specification.',
    opt_detection:
      "Create a dedicated 'pinout checker' test fixture that can be attached to the connector plate to rapidly verify the correct wiring of all 128 connections.",
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
    opt_remarks: 'D2.5, DesR_001, page 17, No specific test plan cited'
  },
  {
    id: 'FC_047',
    history: '',
    structure_nextHigher: 'HOTDOCK Thermal Interface',
    structure_focus: 'NTC Temperature Sensor',
    structure_nextLower: 'Sensor Element',
    func_nextHigher: 'Provide thermal sensing capabilities.',
    func_focus: 'Measure the temperature before connection (D2.5, pg 43).',
    func_nextLower:
      'Exhibit a change in electrical resistance that is a known function of temperature.',
    fail_effect:
      "Sensor de-bonds from the surface it is measuring | Sensor measures its own temperature, not the interface's | Incorrect temperature telemetry | A decision to mate may be made when there is a dangerously large thermal gradient, causing thermal shock.",
    fail_severity: 6,
    fail_mode: 'Provides inaccurate temperature reading',
    fail_cause:
      'Failure of the thermally conductive epoxy bond holding the sensor to the connector body, due to stress from CTE mismatch during thermal cycling.',
    risk_prevention:
      'Two redundant NTC sensors are integrated. The design must withstand the -55C to +85C temperature range (EnvR_003).',
    risk_occurrence: 5,
    risk_detection:
      'Verification is by testing. Cross-comparison of the two redundant sensors could detect a de-bond.',
    risk_detScore: 3,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Select a space-qualified, low-outgassing, thermally conductive epoxy and develop a controlled process for sensor bonding, including surface prep and curing schedule.',
    opt_detection:
      'During thermal vacuum testing, compare the readings of the integrated NTC sensors to a calibrated reference thermocouple attached to the same point to verify accuracy and bonding integrity.',
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
    opt_remarks: 'D2.5, Section 5.3, page 43, D2.5, EnvR_003, page 28'
  },
  {
    id: 'FC_049',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Structure',
    structure_focus: 'Housing',
    structure_nextLower: 'Dissimilar Metal Interface',
    func_nextHigher: 'Provide the main structure and enclosure.',
    func_focus: 'Maintain structural integrity throughout the mission.',
    func_nextLower:
      'Ensure galvanic compatibility between dissimilar metals in contact (DesR_016).',
    fail_effect:
      'Dissimilar metals are in direct contact | Galvanic corrosion occurs at the interface over time, especially if any residual moisture is present | The structural integrity of the interface is weakened | Potential for structural failure.',
    fail_severity: 6,
    fail_mode: 'Structural integrity degraded',
    fail_cause:
      'Galvanic corrosion between a steel fastener and the aluminum housing due to an omitted or damaged surface coating (e.g., anodize or chromate conversion).',
    risk_prevention:
      'DesR_016 requires dissimilar metals to have galvanic compatibility. Verification is by Analysis.',
    risk_occurrence: 3,
    risk_detection:
      'The design is reviewed for this compatibility. Inspection would verify coatings.',
    risk_detScore: 4,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'All interfaces between dissimilar metals must be designed with appropriate protective schemes, such as plating, conversion coatings, or wet-installed with a corrosion-inhibiting compound, per ECSS-Q-ST-70.',
    opt_detection:
      'Add a specific check to the assembly inspection procedure to verify that all required coatings and protective measures are in place at dissimilar metal interfaces.',
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
    opt_remarks: 'D2.5, DesR_016, page 21, No specific test identified'
  },
  {
    id: 'FC_056',
    history: '',
    structure_nextHigher: 'HOTDOCK Data Interface',
    structure_focus: 'CAN Bus Interface',
    structure_nextLower: 'Bus Termination',
    func_nextHigher: 'Provide a re-routable data interface.',
    func_focus: 'Allow command and telemetry exchange over a standard CAN bus.',
    func_nextLower:
      'Provide correct impedance at the ends of the bus to prevent signal reflections.',
    fail_effect:
      'Termination resistor is missing or has incorrect value | Signal integrity on the bus is compromised by reflections | Intermittent communication errors, reduced noise margin | Loss of reliable command and control.',
    fail_severity: 6,
    fail_mode: 'Communication is intermittent',
    fail_cause:
      'An assembly error leads to the omission of the 120-ohm termination resistor on the harness or PCB.',
    risk_prevention:
      'The controller uses a CAN bus (D2.5, pg 45, 48). Proper implementation is assumed.',
    risk_occurrence: 3,
    risk_detection:
      'A communications functional test would be performed. Signal integrity issues can be hard to diagnose.',
    risk_detScore: 5,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'The system-level CAN bus network diagram must clearly define which units are at the ends of the bus and are responsible for providing termination. Make termination resistors easily inspectable.',
    opt_detection:
      'During integration, measure the DC resistance across the CAN high and low lines to verify it is approximately 60 ohms (two 120-ohm terminators in parallel).',
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
    opt_remarks:
      'D2.5, Section 6.2, page 45, No specific network design document cited'
  },
  {
    id: 'FC_062',
    history: '',
    structure_nextHigher: 'HOTDOCK Sensors',
    structure_focus: 'Thermistor (Motor)',
    structure_nextLower: 'Thermistor Element',
    func_nextHigher: 'Provide telemetry for monitoring.',
    func_focus:
      'Provide temperature telemetry from local power buses (FuncR_018).',
    func_nextLower:
      'Exhibit a change in resistance corresponding to the motor temperature.',
    fail_effect:
      'Thermistor fails open-circuit | Controller reads an out-of-range (e.g., very cold) temperature | Thermal protection logic is disabled | A subsequent motor overheat condition will not be detected, leading to winding insulation failure.',
    fail_severity: 6,
    fail_mode: 'Fails to detect over-temperature',
    fail_cause: 'Fatigue failure of the thermistor lead wire due to vibration.',
    risk_prevention:
      'FuncR_018 requires temperature telemetry. THM_1 (Motor) is listed in the telemetry list (Table 4-2).',
    risk_occurrence: 4,
    risk_detection:
      'The open circuit would result in an obviously incorrect reading (e.g. -273C), which would be flagged by ground software.',
    risk_detScore: 3,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Ensure all sensor leads are properly strain-relieved using S-bends and are staked to the structure with space-grade epoxy.',
    opt_detection:
      'During vibration testing, monitor all telemetry channels for intermittent signals or dropouts that could indicate a developing wire fatigue issue.',
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
    opt_remarks: 'D2.5, Table 4-2, page 35, D2.5, FuncR_018, page 14'
  },
  {
    id: 'FC_066',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Absolute Position Sensor',
    structure_nextLower: 'Sensor Electronics',
    func_nextHigher: 'Provide feedback for control.',
    func_focus: 'Detect the absolute position of the locking ring.',
    func_nextLower: 'Convert physical rotation into an electrical signal.',
    fail_effect:
      'Sensor output becomes noisy | Controller receives erratic position data | The control loop may become unstable, causing motor jitter | Poor control precision, potential for fault trips.',
    fail_severity: 6,
    fail_mode: 'Provides noisy\/unstable position signal',
    fail_cause:
      "Electromagnetic interference (EMI) from the nearby motor's switching currents couples into the sensitive analog sensor wiring.",
    risk_prevention:
      'FuncR_016 requires EMC. The design shows motor and sensor signals routed to the same controller.',
    risk_occurrence: 5,
    risk_detection:
      'Functional testing under load would reveal jitter or instability.',
    risk_detScore: 4,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Use shielded cables for the analog sensor signals and ensure the shield is properly grounded at one end. Route sensor cables separately from high-current motor cables.',
    opt_detection:
      'During EMC testing, monitor the noise floor on the position sensor output while the motor is operating under various loads.',
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
    opt_remarks: 'D2.5, FuncR_016, page 14, D2.5, Figure 3-1, page 30'
  },
  {
    id: 'FC_071',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Gearing System',
    structure_nextLower: 'Backlash',
    func_nextHigher: 'Transmit torque.',
    func_focus: 'Transmit torque with minimal backlash.',
    func_nextLower:
      'Ensure tight meshing of gear teeth to minimize free play in the geartrain.',
    fail_effect:
      'Excessive backlash in the geartrain | The locking ring has rotational free play | Impact loading on gear teeth during direction changes, reduced positional accuracy | Accelerated wear, potential for tooth fracture.',
    fail_severity: 6,
    fail_mode: 'Positional accuracy is degraded',
    fail_cause:
      'Wear of the gear teeth over many actuation cycles increases the clearance between them, leading to excessive backlash.',
    risk_prevention:
      'The interface must be reusable for 100-1000 cycles (OpR_002).',
    risk_occurrence: 5,
    risk_detection: 'Life testing would be the primary verification method.',
    risk_detScore: 6,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      "Specify and use anti-backlash gears (e.g., spring-loaded split gears) in critical stages of the geartrain to maintain precision over the product's lifetime.",
    opt_detection:
      'Measure the output backlash of the gearbox at the beginning and end of the life test to quantify the degradation and verify it remains within acceptable limits.',
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
    opt_remarks: 'D2.5, OpR_002, page 25, No specific backlash limit defined'
  },
  {
    id: 'FC_075',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Motor Controller',
    structure_nextLower: 'Field Oriented Control (FOC) Algorithm',
    func_nextHigher: 'Control the brushless DC motor.',
    func_focus:
      'Provide field oriented control of the brushless motor (D2.5, pg 45).',
    func_nextLower:
      'Precisely control the stator magnetic field vector to achieve smooth and efficient torque production.',
    fail_effect:
      'Tuning parameters for the FOC algorithm are incorrect | The control loop becomes unstable, causing oscillations or high current draw | Audible noise, vibration, inefficient operation, potential for stalling.',
    fail_severity: 6,
    fail_mode: 'Motor control is unstable',
    fail_cause:
      'The PI loop gains for the FOC algorithm are not correctly tuned for the inertia and friction of the actual mechanical load.',
    risk_prevention:
      'The design specifies FOC. The firmware must implement this.',
    risk_occurrence: 5,
    risk_detection:
      'Functional testing under load would reveal instability. Motor current telemetry could show oscillations.',
    risk_detScore: 4,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Develop a system identification model of the motor and mechanism to allow for analytical tuning of the FOC control loop parameters before implementation.',
    opt_detection:
      'Create a specific test procedure for tuning the FOC gains on the actual hardware, with instrumentation to measure stability and performance margins.',
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
    opt_remarks:
      'D2.5, Section 6.1, page 45, No specific tuning procedure cited'
  },
  {
    id: 'FC_083',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Firmware',
    structure_nextLower: 'Telemetry Packet Generation',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus: 'Send and receive TM\/TC from the host OBC (FuncR_030).',
    func_nextLower:
      'Assemble sensor data and status information into a defined packet structure for transmission.',
    fail_effect:
      'A bug causes the telemetry packet to be malformed (e.g., incorrect length or CRC) | The host OBC rejects the packet | Ground control loses all telemetry from the HOTDOCK | Inability to monitor the health and status of the interface.',
    fail_severity: 6,
    fail_mode: 'Fails to send valid telemetry',
    fail_cause:
      "A software bug related to data alignment (e.g., padding bytes) causes the telemetry packet's checksum to be calculated incorrectly.",
    risk_prevention:
      'The telemetry list is defined (Table 4-2). The TM\/TC interface must be tested.',
    risk_occurrence: 4,
    risk_detection: 'Verification is by Testing (FuncR_030).',
    risk_detScore: 4,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Develop a formal Interface Control Document (ICD) that precisely defines the byte-by-byte structure of all TM\/TC packets, and use this ICD to generate code automatically for packet serialization\/deserialization.',
    opt_detection:
      'Use a bus analyzer (e.g., CAN analyzer) during testing to capture and validate the structure and content of every telemetry packet against the ICD.',
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
    opt_remarks:
      'D2.5, FuncR_030, page 17, No interface control document (ICD) cited'
  },
  {
    id: 'FC_089',
    history: '',
    structure_nextHigher: 'HOTDOCK Mechanical Locking Mechanism',
    structure_focus: '90-degree Rotational Symmetry',
    structure_nextLower: 'Mechanical Symmetry',
    func_nextHigher:
      'Provide redundancy and increase possible positions for mating.',
    func_focus: 'Present a 90-degree rotational symmetry (DesR_006).',
    func_nextLower:
      'The form-fit geometry and locking features are identical in each of the four quadrants.',
    fail_effect:
      'A manufacturing defect breaks the symmetry in one quadrant | Mating in that specific orientation is not possible or causes jamming | Loss of a redundant orientation; may prevent mission completion if a specific orientation is required.',
    fail_severity: 6,
    fail_mode: 'Fails to mate in one orientation',
    fail_cause:
      'A CNC machining error results in one of the four quadrants having an out-of-tolerance feature.',
    risk_prevention:
      'DesR_006 requires 90-degree symmetry. Verification is by Review of Design.',
    risk_occurrence: 2,
    risk_detection:
      'First article inspection with a CMM would detect the geometric error. A functional test with another unit would detect the mating failure.',
    risk_detScore: 2,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Develop a comprehensive quality control plan including 100% CMM inspection of all critical features on the first article, and statistical process control for production units.',
    opt_detection:
      'During acceptance testing, perform a test mate with a golden standard master part in all four possible orientations to verify interchangeability and symmetry.',
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
    opt_remarks: 'D2.5, DesR_006, page 19, No manufacturing document cited'
  },
  {
    id: 'FC_110',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Barrel-Cam Mechanism',
    structure_nextLower: 'Detent',
    func_nextHigher: 'Translate motor rotation into motion.',
    func_focus: 'Provide a stable locked and unlocked position.',
    func_nextLower:
      'A feature in the cam profile that provides a stable resting point at the end of travel.',
    fail_effect:
      'No detent feature exists | The mechanism can be back-driven away from the end-of-travel position by vibration | The connection could loosen over time.',
    fail_severity: 6,
    fail_mode: 'Fails to hold position securely',
    fail_cause:
      'The cam profile is designed without a detent, relying solely on the motor brake to hold the final locked position.',
    risk_prevention:
      'The locking mechanism is designed to provide a secure connection.',
    risk_occurrence: 4,
    risk_detection: 'A vibration test would reveal if the connection loosens.',
    risk_detScore: 5,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Design the barrel cam profile with a positive detent feature (e.g., a small depression or flattened area) at the fully locked position to provide a mechanically stable state.',
    opt_detection:
      'During functional testing, verify that a positive torque is required to move the mechanism out of its locked state, even with the motor unpowered.',
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
    opt_remarks:
      'D2.5, Section 3.1, page 31, No specific detent feature mentioned'
  },
  {
    id: 'FC_114',
    history: '',
    structure_nextHigher: 'HOTDOCK Thermal Interface',
    structure_focus: 'Thermal Conduction Path',
    structure_nextLower: 'Interface Thermal Resistance',
    func_nextHigher:
      'Enable thermal connection to the module structure (IntR_006).',
    func_focus:
      'Provide a path for conductive heat transfer from internal components to the housing.',
    func_nextLower:
      'Ensure low thermal resistance between heat-generating components (like the motor driver) and the main structure.',
    fail_effect:
      'A high thermal resistance path exists | Heat is trapped in the controller PCB | The controller overheats, leading to premature failure.',
    fail_severity: 6,
    fail_mode: 'Overheats',
    fail_cause:
      'The thermal interface material between the controller PCB and the housing is omitted during assembly.',
    risk_prevention:
      'IntR_006 requires thermal connection to the module structure.',
    risk_occurrence: 4,
    risk_detection:
      'A thermal analysis would define the need for a TIM. A thermal vacuum test would detect the overheating.',
    risk_detScore: 4,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Clearly specify the type and location of all required thermal interface materials on the assembly drawing and in the assembly procedure.',
    opt_detection:
      'During thermal vacuum testing, place thermocouples on critical components (e.g., motor driver, microcontroller) to verify that their temperatures match the predictions from the thermal analysis.',
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
    opt_remarks: 'D2.5, IntR_006, page 24, No specific assembly procedure cited'
  },
  {
    id: 'FC_123',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'POGO Pin Connector',
    structure_nextLower: 'Redundant Signal Routing',
    func_nextHigher: 'Provide a separable interface for power and data.',
    func_focus: 'Feature one-failure-tolerance redundancy (DesR_003).',
    func_nextLower:
      'Route primary and redundant signal pairs through physically separate paths.',
    fail_effect:
      'Primary and redundant signals are routed on adjacent pins | A single piece of conductive debris can short both lines | The redundancy is defeated | A single failure now leads to loss of function.',
    fail_severity: 6,
    fail_mode: 'Loss of redundancy',
    fail_cause:
      'The connector plate PCB layout places primary and redundant data pairs next to each other, creating a common-cause failure vulnerability.',
    risk_prevention: 'DesR_003 requires one-failure-tolerance redundancy.',
    risk_occurrence: 5,
    risk_detection: 'Verification is by Review of Design.',
    risk_detScore: 4,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Establish formal layout rules that require maximum physical separation of redundant signal paths on all PCBs and in all harnesses.',
    opt_detection:
      'Make redundant path separation a mandatory item on the design review checklist for all PCBs and harnesses.',
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
    opt_remarks: 'D2.5, DesR_003, page 18, No specific layout guidelines cited'
  },
  {
    id: 'FC_127',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Power Conversion',
    structure_nextLower: 'Linear Regulator',
    func_nextHigher: 'Provide local low-level bus generation.',
    func_focus:
      'Provide stable low-level voltages for sensitive analog circuits.',
    func_nextLower: 'Provide a low-noise regulated voltage.',
    fail_effect:
      'Linear regulator overheats | The regulator enters thermal shutdown | The analog circuit it powers loses power | Loss of sensor readings.',
    fail_severity: 6,
    fail_mode: 'Fails to provide regulated voltage',
    fail_cause:
      'Excessive power dissipation in the linear regulator due to a high input-to-output voltage differential and insufficient heat sinking.',
    risk_prevention:
      'The power budget is considered (Table 7-2). Thermal design is part of the overall robust design (DesR_005).',
    risk_occurrence: 4,
    risk_detection:
      'A thermal analysis should find this. A thermal vacuum test would confirm it.',
    risk_detScore: 4,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Perform a detailed power dissipation and thermal analysis for all linear regulators. Ensure adequate PCB copper area is provided for heat sinking.',
    opt_detection:
      'Use a thermal camera to inspect the controller PCB under full load to verify that no components are exceeding their temperature limits.',
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
    opt_remarks: 'D2.5, Table 7-2, page 47, D2.5, DesR_005, page 19'
  },
  {
    id: 'FC_141',
    history: '',
    structure_nextHigher: 'HOTDOCK Harnessing',
    structure_focus: 'Wiring Harness',
    structure_nextLower: 'Wire Insulation (e.g., Teflon)',
    func_nextHigher: 'Connect internal components.',
    func_focus: 'Route electrical signals and power reliably.',
    func_nextLower:
      'Provide dielectric separation with low outgassing properties per DesR_019.',
    fail_effect:
      'Insulation outgasses volatile materials | The outgassed materials condense on cold surfaces like optics or thermal radiators | Contamination degrades optical or thermal performance.',
    fail_severity: 6,
    fail_mode: 'Contaminates external surfaces',
    fail_cause:
      'Selection of a wire insulation material that does not meet the low outgassing requirements for space applications (TML > 1%).',
    risk_prevention:
      'DesR_019 requires materials to have low outgassing and toxicity. Verification is by Analysis.',
    risk_occurrence: 3,
    risk_detection:
      'The material properties would be reviewed. A thermal vacuum bake-out with a cold finger would detect high outgassing.',
    risk_detScore: 4,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Select only wire and cable with insulation materials approved for space use and with certified low-outgassing properties (e.g., Teflon variants like FEP, PFA, or TFE).',
    opt_detection:
      'Perform a Residual Gas Analysis (RGA) during a system-level thermal vacuum test to identify and quantify any outgassed species.',
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
    opt_remarks: 'D2.5, DesR_019, page 22, no evidence'
  },
  {
    id: 'FC_147',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Rotor Bearings',
    structure_nextLower: 'Bearing Race',
    func_nextHigher: 'Support the motor rotor and geartrain shafts.',
    func_focus: 'Allow low-friction rotation of shafts.',
    func_nextLower:
      'Provide a hardened, smooth surface for rolling elements to travel on.',
    fail_effect:
      'Bearing race is damaged by false brinelling | High stiction and vibration when rotating | Higher torque is required to start motion, positional accuracy is degraded.',
    fail_severity: 6,
    fail_mode: 'Actuation is jerky or noisy',
    fail_cause:
      'False brinelling (fretting wear) of the bearing races caused by small-amplitude oscillations during launch vibration while the mechanism is stationary.',
    risk_prevention:
      'The interface must be compliant with launch loads (FuncR_007).',
    risk_occurrence: 5,
    risk_detection:
      'Verification is by Testing. Post-vibration functional checks may notice increased friction or noise.',
    risk_detScore: 6,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Implement a launch lock mechanism that rigidly secures the actuation drive train to prevent any micro-motion in the bearings during launch.',
    opt_detection:
      "After vibration testing, perform a detailed characterization of the actuator's running torque and compare it to pre-vibration data to detect any increase in friction or stiction.",
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
    opt_remarks:
      'D2.5, FuncR_007, page 11, No specific launch lock mechanism cited'
  },
  {
    id: 'FC_172',
    history: '',
    structure_nextHigher: 'Spacecraft Module (SM4-THS)',
    structure_focus: 'Thermal Payload',
    structure_nextLower: 'Radiator Fan',
    func_nextHigher: 'Provide thermal management for the CLT SMs.',
    func_focus:
      'Dissipate heat transferred from the SM2-PWS via the fluid loop.',
    func_nextLower:
      'Force air over the radiator to dissipate heat into the surrounding environment (for ground demo).',
    fail_effect:
      'Fan motor seizes | Airflow over the radiator stops | Heat is not dissipated effectively from the fluid loop | The fluid temperature rises, leading to overheating of the SM2-PWS | PWS may shut down or be damaged.',
    fail_severity: 6,
    fail_mode: 'Fails to dissipate heat',
    fail_cause:
      'Bearing failure in the fan motor due to lubricant degradation over time.',
    risk_prevention:
      'The SM4-THS includes a radiator and fan. The thermal controller manages the fan. (D2.4, Section 6.4.5)',
    risk_occurrence: 4,
    risk_detection:
      'The failure would be detected by monitoring the THS and PWS temperature telemetry, which would show a rapid rise. (D2.4, Table 6-3)',
    risk_detScore: 3,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Select a high-reliability fan with a long-life bearing system suitable for the application. Implement a redundant fan in the design.',
    opt_detection:
      'Perform an accelerated life test on the fan assembly to validate its operational lifetime.',
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
    opt_remarks: 'MOSAR D2.4, page 83, MOSAR D2.4, Table 6-3, page 80'
  },
  {
    id: 'FC_199',
    history: '',
    structure_nextHigher: 'HOTDOCK Structure',
    structure_focus: 'Mounting Interface',
    structure_nextLower: 'M3 Mounting Bolt Threads',
    func_nextHigher:
      'Provide a mechanical connection to the module or robotic end-effector.',
    func_focus:
      'Transfer all operational and launch loads to the parent structure.',
    func_nextLower:
      'Provide secure threaded engagement to achieve clamping force.',
    fail_effect:
      'Threads gall during assembly | Bolt seizes in the threaded hole | The bolt cannot be torqued to the correct value or cannot be removed | Improper preload, or inability to service the unit.',
    fail_severity: 6,
    fail_mode: 'Fails to achieve correct preload',
    fail_cause:
      'Galling (adhesive wear) between the threads of a stainless steel bolt and a tapped aluminum housing during installation.',
    risk_prevention:
      'DesR_009 allows for dissimilar materials and DesR_016 requires galvanic compatibility, which often drives material choices leading to galling risk.',
    risk_occurrence: 4,
    risk_detection:
      "The issue would be detected during assembly when the torque wrench 'clicks' prematurely or the torque continues to increase without rotation.",
    risk_detScore: 3,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Install stainless steel threaded inserts (e.g., Helicoils) into the aluminum housing. Use a silver-plated fastener or apply a space-rated anti-galling lubricant to the threads.',
    opt_detection:
      'Mandate the use of a calibrated torque-angle wrench during assembly to detect galling, which is characterized by a low stiffness prior to reaching the target torque.',
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
    opt_remarks: 'D2.5, DesR_009, page 19, D2.5, DesR_016, page 21'
  },
  {
    id: 'FC_039',
    history: '',
    structure_nextHigher: 'HOTDOCK Power Interface',
    structure_focus: 'Sense Circuitry',
    structure_nextLower: 'Voltage Divider Resistors',
    func_nextHigher: 'Provide telemetry for current and voltage (D2.5, pg 42).',
    func_focus: 'Provide telemetry for voltage passed through the interface.',
    func_nextLower:
      "Scale down the bus voltage to a range readable by the microcontroller's ADC.",
    fail_effect:
      'Resistor value drifts significantly over time | Voltage telemetry becomes inaccurate | Ground control makes incorrect decisions based on faulty telemetry, or automated protections trip unnecessarily.',
    fail_severity: 5,
    fail_mode: 'Reports incorrect voltage telemetry',
    fail_cause:
      'Resistance value shifts due to long-term aging and exposure to the radiation environment.',
    risk_prevention:
      'FuncR_018 requires voltage telemetry. Use of high-reliability, space-qualified resistors is assumed.',
    risk_occurrence: 3,
    risk_detection:
      'Verification is by Testing. Calibration would be part of this.',
    risk_detScore: 4,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Specify the use of high-precision, low-temperature-coefficient, and established-reliability (space-grade) resistors for all critical analog measurement circuits.',
    opt_detection:
      'Perform a calibration check of all telemetry channels at the beginning and end of a thermal vacuum life test to characterize any drift.',
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
    opt_remarks:
      'D2.5, FuncR_018, page 14, No specific component grade is cited'
  },
  {
    id: 'FC_050',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'Firmware',
    structure_nextLower: 'Quiescent Power Mode Logic',
    func_nextHigher: 'Control all HOTDOCK functionalities.',
    func_focus:
      'Draw less than TBC mW of quiescent power in passive state (FuncR_019).',
    func_nextLower:
      'Place the microcontroller and peripherals into a low-power sleep mode when idle.',
    fail_effect:
      'Firmware fails to enter sleep mode | Quiescent power draw is much higher than specified | The spacecraft power budget is exceeded, especially if many HOTDOCKs are installed | Drains batteries, may cause system to shut down.',
    fail_severity: 5,
    fail_mode: 'Power consumption too high in passive state',
    fail_cause:
      'A software bug prevents a peripheral (e.g., a timer or UART) from being properly shut down before the microcontroller enters its main sleep mode.',
    risk_prevention:
      'FuncR_019 requires low quiescent power. Power budget is provided in Table 7-2.',
    risk_occurrence: 5,
    risk_detection:
      'Verification is by Testing. The power budget is an input to this testing.',
    risk_detScore: 3,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Create a detailed power state diagram in the firmware design, and use a code checklist to ensure every peripheral is explicitly managed upon entry\/exit from low-power modes.',
    opt_detection:
      'Perform a detailed power consumption measurement of the controller in all operational states, particularly the passive state, to verify compliance with the power budget.',
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
    opt_remarks: 'D2.5, FuncR_019, page 14, D2.5, Table 7-2, page 47'
  },
  {
    id: 'FC_096',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Absolute Position Sensor',
    structure_nextLower: 'Multi-turn Counter',
    func_nextHigher: 'Provide feedback for control.',
    func_focus: 'Detect the absolute position of the locking ring.',
    func_nextLower:
      'Keep track of the number of full rotations if the sensor is not absolute over the full range.',
    fail_effect:
      'Power loss causes the multi-turn counter to reset | The controller loses the absolute position of the locking ring | The system must perform a re-homing sequence, or it may operate with an incorrect position offset.',
    fail_severity: 5,
    fail_mode: 'Loses absolute position reference',
    fail_cause:
      'A power interruption to the sensor or controller causes the volatile turn counter to be lost.',
    risk_prevention:
      "The telemetry list includes 'Absolute position sensor' (HK_2, POSI_2), implying a truly absolute sensor is intended.",
    risk_occurrence: 4,
    risk_detection:
      'A re-homing sequence or comparison with other sensors (if available) would be needed to detect the offset after a power cycle.',
    risk_detScore: 6,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Select a truly absolute position sensor that does not require a battery or external power to maintain its position information (e.g., a resolver or a modern magnetic absolute encoder).',
    opt_detection:
      'Perform a power-cycle test where the mechanism is stopped at various intermediate positions, and verify that the reported position is correct immediately after power is restored.',
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
    opt_remarks: 'D2.5, Table 4-2, page 35, No specific sensor type cited'
  },
  {
    id: 'FC_108',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'POGO Pin Connector',
    structure_nextLower: 'Contact Wipe',
    func_nextHigher: 'Provide a separable interface for power and data.',
    func_focus: 'Establish a compliant electrical connection.',
    func_nextLower:
      'The pin tip must slide a short distance across the pad surface during mating to clear away any light contamination.',
    fail_effect:
      'No wiping action occurs | The pin makes contact but does not wipe | Light oxide layers or contaminants are not cleared | Higher probability of a high-resistance connection.',
    fail_severity: 5,
    fail_mode: 'Contact resistance is high',
    fail_cause:
      'The kinematics of the mating process result in a purely vertical engagement with no lateral motion, preventing any contact wipe.',
    risk_prevention:
      'The form-fit geometry guides the final approach. This implicitly defines the mating kinematics.',
    risk_occurrence: 5,
    risk_detection:
      'High-resistance connections would be detected during electrical testing.',
    risk_detScore: 6,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Analyze and refine the cam profiles and form-fit geometry to ensure a small amount of lateral motion (wipe) is induced on the connector plate during the final stage of engagement.',
    opt_detection:
      'Use high-speed video to observe the POGO pin engagement on a microscopic level to verify that a wiping action is occurring.',
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
    opt_remarks:
      'D2.5, Section 3.1, page 30, No specific requirement for contact wipe'
  },
  {
    id: 'FC_120',
    history: '',
    structure_nextHigher: 'HOTDOCK Power Interface',
    structure_focus: 'Power Consumption',
    structure_nextLower: 'Active Mode Power',
    func_nextHigher: 'Provide power to internal components.',
    func_focus:
      'Power consumption shall be minimized, with a max of 10W in active mode (OpR_010).',
    func_nextLower:
      'The combined power draw of the controller and motor must not exceed 10W.',
    fail_effect:
      'Power consumption exceeds the 10W limit | The spacecraft power budget is violated | May cause the upstream power regulator to trip, or drain batteries faster than planned.',
    fail_severity: 5,
    fail_mode: 'Power consumption too high in active mode',
    fail_cause:
      'High mechanical friction in the mechanism forces the motor to draw more current (and thus power) than anticipated to complete the actuation.',
    risk_prevention:
      'OpR_010 sets the power limit. The power budget (Table 7-2) estimates 2.7W total.',
    risk_occurrence: 5,
    risk_detection: 'Verification is by Testing.',
    risk_detScore: 3,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Refine the mechanical design to minimize friction. Select a high-efficiency motor and gearbox combination.',
    opt_detection:
      'Measure the power consumption of the interface during a full actuation cycle under worst-case load and temperature conditions to verify compliance with the 10W requirement.',
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
    opt_remarks: 'D2.5, OpR_010, page 27, D2.5, Table 7-2, page 47'
  },
  {
    id: 'FC_192',
    history: '',
    structure_nextHigher: 'HOTDOCK Sensors',
    structure_focus: 'NTC Temperature Sensor',
    structure_nextLower: 'Thermistor Element',
    func_nextHigher: 'Provide telemetry for monitoring.',
    func_focus: 'Measure temperature of various components (motor, MCU, PCB).',
    func_nextLower: 'Exhibit a known change in resistance with temperature.',
    fail_effect:
      'Thermistor resistance drifts out of specification | The reported temperature is inaccurate | Thermal protection may trip too early or too late | Inaccurate system health monitoring.',
    fail_severity: 5,
    fail_mode: 'Reports incorrect temperature telemetry',
    fail_cause:
      'Aging of the thermistor material causes its resistance-temperature characteristic to drift over many years and thermal cycles.',
    risk_prevention:
      'Temperature telemetry is required (FuncR_018) and specific thermistors are listed in telemetry (Table 4-2).',
    risk_occurrence: 3,
    risk_detection:
      'This slow drift is very difficult to detect without periodic re-calibration against a known standard.',
    risk_detScore: 8,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Select high-stability, space-qualified thermistors. Use high-precision reference resistors in the measurement circuit to minimize other sources of drift.',
    opt_detection:
      'Perform an accelerated aging test (thermal cycling and bake) on a sample of thermistors and characterize their long-term drift.',
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
    opt_remarks: 'D2.5, FuncR_018, page 14, D2.5, Table 4-2, page 35'
  },
  {
    id: 'FC_109',
    history: '',
    structure_nextHigher: 'HOTDOCK Structure',
    structure_focus: 'Housing',
    structure_nextLower: 'Mass',
    func_nextHigher: 'Provide the main structure and enclosure.',
    func_focus:
      'The standard interface shall be optimized regarding the mass (PhysR_001).',
    func_nextLower:
      'The component mass must be within the allocated budget of 1.56 kg (Table 7-1).',
    fail_effect:
      'The final design is overweight | The overall system mass budget is exceeded | Launch cost increases, or other components must be lightened.',
    fail_severity: 4,
    fail_mode: 'Exceeds mass budget',
    fail_cause:
      'An unforeseen design change (e.g., adding structural reinforcement) increases the mass of the housing beyond the budgeted amount.',
    risk_prevention:
      'PhysR_001 requires mass optimization. A detailed mass budget is provided in Table 7-1, including a 10% margin.',
    risk_occurrence: 4,
    risk_detection:
      'Verification is by Testing (weighing the part). The mass is tracked throughout the design process.',
    risk_detScore: 2,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Maintain a live mass roll-up report throughout the design process, and hold regular reviews to track any deviations from the budget.',
    opt_detection:
      'Weigh all components and sub-assemblies at key stages of the manufacturing and integration process to validate the mass model.',
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
    opt_remarks: 'D2.5, PhysR_001, page 23, D2.5, Table 7-1, page 47'
  },
  {
    id: 'FC_128',
    history: '',
    structure_nextHigher: 'HOTDOCK Power & Data Interface',
    structure_focus: 'Data Transfer Interface',
    structure_nextLower: 'Data Rate',
    func_nextHigher: 'Allow exchange of data.',
    func_focus:
      'The data interface shall allow a data rate of minimum 100Mbit\/s (FuncR_020).',
    func_nextLower: 'The physical layer must support the required bandwidth.',
    fail_effect:
      'The physical layer does not support 100Mbit\/s | The data link can only be operated at a lower speed | The requirement is not met, throughput for large data transfers is reduced.',
    fail_severity: 4,
    fail_mode: 'Data rate is below specification',
    fail_cause:
      'The combination of POGO pin capacitance and trace length creates a low-pass filter effect that degrades the signal at 100Mbit\/s.',
    risk_prevention:
      'The prototype design allows SpaceWire transfer of 100Mbps over 5.5m (D2.5, pg 41).',
    risk_occurrence: 4,
    risk_detection: 'Verification is by Testing.',
    risk_detScore: 3,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Perform a detailed signal integrity simulation of the entire end-to-end channel to verify performance at 100Mbit\/s before committing to the PCB design.',
    opt_detection:
      'During verification testing, perform a bit error rate test (BERT) on the data link at the required speed to confirm error-free operation.',
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
    opt_remarks: 'D2.5, FuncR_020, page 15, D2.5, Section 5.2.1, page 41'
  },
  {
    id: 'FC_106',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Mechanical Transmission',
    structure_nextLower: 'Actuation Speed',
    func_nextHigher: 'Rotate locking ring.',
    func_focus: 'Minimize the coupling time between two interfaces (OpR_011).',
    func_nextLower:
      'Operate at the maximum speed allowed by the motor and control system.',
    fail_effect:
      'Actuation is too slow | Coupling time is longer than specified | Mission timelines may be impacted.',
    fail_severity: 3,
    fail_mode: 'Coupling time too long',
    fail_cause:
      'The motor speed is intentionally limited in firmware to a very conservative value to ensure stability, resulting in slow operation.',
    risk_prevention: 'OpR_011 requires minimized coupling time.',
    risk_occurrence: 4,
    risk_detection:
      'Verification is by Testing. The coupling time will be measured.',
    risk_detScore: 2,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Perform a trade study and testing to determine the optimal motor speed that balances speed of operation with control stability and power consumption.',
    opt_detection:
      'Characterize the actuation time as a function of motor speed and load during design verification testing.',
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
    opt_remarks: 'D2.5, OpR_011, page 27, No specific time requirement defined'
  },
  {
    id: 'FC_121',
    history: '',
    structure_nextHigher: 'HOTDOCK Actuation Assembly',
    structure_focus: 'Brushless DC Motor (MAXON EC 32 flat)',
    structure_nextLower: 'Motor Cogging Torque',
    func_nextHigher: 'Rotate locking ring.',
    func_focus: 'Generate smooth rotational torque.',
    func_nextLower:
      'Minimize torque ripple caused by the interaction of the rotor magnets and stator teeth.',
    fail_effect:
      "High cogging torque | The motor has a 'lumpy' feel and requires more torque to start moving | The control loop must work harder, may be less stable at low speeds.",
    fail_severity: 3,
    fail_mode: 'Motor control is unstable at low speed',
    fail_cause: 'The selected motor has a high intrinsic cogging torque.',
    risk_prevention:
      "The motor is a coreless design ('flat'), which typically have low cogging torque. This is an inherent design choice.",
    risk_occurrence: 3,
    risk_detection: 'This would be characterized during initial motor testing.',
    risk_detScore: 3,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'For future designs, specify a maximum cogging torque as a motor selection criterion. Implement a feed-forward compensation algorithm in the firmware to cancel out known cogging torque.',
    opt_detection:
      'Measure the cogging torque of the selected motor on a dynamometer to provide data for control loop tuning and future component selection.',
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
    opt_remarks:
      'D2.5, Figure 3-1, page 30, No specific requirement on cogging torque'
  },
  {
    id: 'FC_093',
    history: '',
    structure_nextHigher: 'HOTDOCK Controller',
    structure_focus: 'LED Pattern Control',
    structure_nextLower: 'LED Driver Circuit',
    func_nextHigher: 'Provide visual status indication.',
    func_focus: 'Control LED patterns (TC_4).',
    func_nextLower: 'Drive current through the status LEDs.',
    fail_effect:
      'LED driver fails | No visual status is provided | An operator (e.g., astronaut or ground tele-operator) cannot visually confirm the state of the interface | Increased risk of incorrect operation.',
    fail_severity: 2,
    fail_mode: 'Fails to provide visual status',
    fail_cause: 'A burned-out LED or a failed driver transistor.',
    risk_prevention: 'TC_4 is a defined telecommand for LED control.',
    risk_occurrence: 4,
    risk_detection:
      'A functional test during ground operations would identify the failure.',
    risk_detScore: 2,
    risk_ap: 'L',
    risk_filter: '',
    opt_preventive:
      'Use high-reliability LEDs and ensure the driver circuit design includes current-limiting resistors with proper derating.',
    opt_detection:
      'Incorporate a check of all LED patterns into the standard pre-operation checkout sequence.',
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
    opt_remarks: 'D2.5, Table 4-1, page 34, No specific design details given'
  }
]
