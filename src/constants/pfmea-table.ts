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

export const PFMEA_HEAD_COLORS = {
  white: 'bg-[#ffffff]',
  grey: 'bg-[#d9d9d9]',
  blue: 'bg-[#b9d7ed]',
  purple: 'bg-[#cdbfda]',
  greenRisk: 'bg-[#aad08e]',
  greenOpt: 'bg-[#e4efda]'
}

export const PFMEA_HEAD: HeaderSection[] = [
  {
    id: 'meta-issue',
    groupTitle: '\u00A0',
    color: PFMEA_HEAD_COLORS.grey,
    columns: [{ title: 'Issue #', width: 'w-16', sticky: true }]
  },
  {
    id: 'meta-history',
    groupTitle: 'Continuous Improvement',
    color: PFMEA_HEAD_COLORS.grey,
    columns: [{ title: 'History / Change Authorization', width: 'w-24' }]
  },
  {
    id: 'structure',
    groupTitle: 'STRUCTURE ANALYSIS (STEP 2)',
    color: PFMEA_HEAD_COLORS.grey,
    columns: [
      {
        title:
          '1. Process Item System, Subsystem, Part Element or Name of Process',
        width: 'w-48'
      },
      {
        title: '2. Process Step Station No. and Name of Focus Element',
        width: 'w-48'
      },
      { title: '3. Process Work Element 4M Type', width: 'w-48' }
    ]
  },
  {
    id: 'function',
    groupTitle: 'FUNCTION ANALYSIS (STEP 3)',
    color: PFMEA_HEAD_COLORS.blue,
    columns: [
      {
        title:
          '1. Function of the Process Item Function of System, Subsystem, Part Element or Process',
        width: 'w-64'
      },
      {
        title:
          '2. Function of the Process Step and Product Characteristic (Quantitative value is optional)',
        width: 'w-64'
      },
      {
        title:
          '3. Function of the Process Work Element and Process Characteristic',
        width: 'w-64'
      }
    ]
  },
  {
    id: 'failure',
    groupTitle: 'FAILURE ANALYSIS (STEP 4)',
    color: PFMEA_HEAD_COLORS.purple,
    columns: [
      {
        title: '1. Failure Effects (FE)',
        width: 'w-64'
      },
      { title: 'Severity (S) of FE', width: 'w-10' },
      { title: '2. Failure Mode (FM) of the Process Step', width: 'w-64' },
      {
        title: '3. Failure Cause (FC) of the Work Element',
        width: 'w-64'
      }
    ]
  },
  {
    id: 'risk',
    groupTitle: 'RISK ANALYSIS (STEP 5)',
    color: PFMEA_HEAD_COLORS.greenRisk,
    columns: [
      { title: 'Current Prevention Control (PC) of FC', width: 'w-64' },
      { title: 'Occurrence (O) of FC', width: 'w-10' },
      { title: 'Current Detection Controls (DC) of FC or FM', width: 'w-64' },
      { title: 'Detection (D) of FC/FM', width: 'w-10' },
      { title: 'PFMEA AP', width: 'w-16' },
      { title: 'Special Characteristics', width: 'w-16' },
      {
        title: 'Filter Code (Optional)',
        width: 'w-16',
        color: PFMEA_HEAD_COLORS.white
      }
    ]
  },
  {
    id: 'optimization',
    groupTitle: 'OPTIMIZATION (STEP 6)',
    color: PFMEA_HEAD_COLORS.greenOpt,
    columns: [
      { title: 'Preventive Action', width: 'w-48' },
      { title: 'Detection Action', width: 'w-48' },
      {
        title: "Responsible Person's Name",
        width: 'w-24',
        color: PFMEA_HEAD_COLORS.white
      },
      {
        title: 'Target Completion Date',
        width: 'w-24',
        color: PFMEA_HEAD_COLORS.white
      },
      { title: 'Status', width: 'w-24', color: PFMEA_HEAD_COLORS.white },
      {
        title: 'Action Taken with Pointer to Evidence',
        width: 'w-48',
        color: PFMEA_HEAD_COLORS.white
      },
      {
        title: 'Completion Date',
        width: 'w-24',
        color: PFMEA_HEAD_COLORS.white
      },
      { title: 'Severity (S)', width: 'w-10' },
      { title: 'Occurrence (O)', width: 'w-10' },
      { title: 'Detection (D)', width: 'w-10' },
      { title: 'SpProd Char', width: 'w-10', color: PFMEA_HEAD_COLORS.white },
      {
        title: 'PFMEA AP',
        width: 'w-10',
        color: PFMEA_HEAD_COLORS.white
      },
      { title: 'Remarks', width: 'w-48', color: PFMEA_HEAD_COLORS.white }
    ]
  }
]

export const PFMEA_BODY = [
  {
    id: 'FC_032',
    history: '',
    structure_processItem: 'Build Plate Assembly',
    structure_processStep:
      '[Heater & Thermal Fuse] Install Thermal Fuse (p. 31)',
    structure_workElement: 'Man',
    func_processItem: 'Provide a heated, flat surface for 3D printing.',
    func_processStep:
      'Mount the thermal fuse in close contact with the build plate to act as a safety cut-off.',
    func_workElement:
      'Ensure good thermal contact between the fuse and the aluminum plate for accurate temperature sensing.',
    fail_effect:
      '1. Your Plant: Safety feature is compromised. 2. Ship-to Plant: N\/A. 3. End User: In a heater runaway event (e.g., failed SSR), the fuse will not trip at the correct plate temperature, allowing the bed to overheat significantly. This is a major fire hazard.',
    fail_severity: 10,
    fail_mode: 'Poor thermal contact between thermal fuse and build plate.',
    fail_cause:
      'The fuse is mounted loosely, or no thermal compound is used, creating an air gap that insulates the fuse from the plate.',
    risk_prevention: 'Diagram shows the location of the thermal fuse.',
    risk_occurrence: 6,
    risk_detection: 'Visual and tactile check of fuse mounting.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'CC',
    risk_filter: '',
    opt_preventive:
      "Update the manual to explicitly state: 'Apply a small amount of thermal paste to the base of the thermal fuse before securing it to the plate to ensure good thermal contact.'",
    opt_detection:
      'Add a check to the pre-flight checklist (p. 135) to verify the thermal fuse is securely mounted.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 31, No evidence'
  },
  {
    id: 'FC_064',
    history: '',
    structure_processItem: 'Skirts',
    structure_processStep: '[Filtered Mains Inlet] Install Inlet (p. 93-94)',
    structure_workElement: 'Material',
    func_processItem: 'Enclose the printer base and house the power inlet.',
    func_processStep:
      'Install the filtered mains power inlet and rocker switch into the printed skirt.',
    func_workElement: 'The components are a snug fit in the printed openings.',
    fail_effect:
      '1. Your Plant: Rework\/reprint. 2. Ship-to Plant: N\/A. 3. End User: The power inlet is loose and can be pushed into the electronics bay, exposing live mains contacts. This is a severe shock hazard.',
    fail_severity: 10,
    fail_mode: 'Mains inlet is loose in skirt opening.',
    fail_cause:
      'The opening in the 3D printed skirt is oversized due to printer miscalibration (under-extrusion) or shrinkage.',
    risk_prevention: 'Using correct print settings.',
    risk_occurrence: 4,
    risk_detection: 'Test fitting the inlet into the skirt.',
    risk_detScore: 3,
    risk_ap: 'H',
    risk_specialChar: 'CC',
    risk_filter: '',
    opt_preventive:
      'Adjust the 3D model to have a slightly smaller opening, making it more tolerant to printing variations. Recommend printing a small test piece with just the opening to check fitment first.',
    opt_detection:
      "Add a check: 'The mains inlet should snap firmly into place. If it is loose, do not proceed. Reprint the part.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 5, No evidence'
  },
  {
    id: 'FC_070',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep: '[Mains Inlet Wiring] Wire Inlet to PSU (p. 124)',
    structure_workElement: 'Man',
    func_processItem:
      'Connect all electronic components according to wiring diagrams.',
    func_processStep:
      'Wire the Mains Inlet to the 24V Power Supply Unit (PSU).',
    func_workElement:
      'Connect the Ground wire from the inlet to the ground terminal on the PSU.',
    fail_effect:
      "1. Your Plant: Safety hazard. 2. Ship-to Plant: N\/A. 3. End User: The printer's metal frame is not grounded. In the event of a short circuit, the entire frame could become energized at mains voltage, creating a lethal electric shock hazard.",
    fail_severity: 10,
    fail_mode: 'Ground wire not connected.',
    fail_cause:
      'The assembler overlooks the green ground wire connection in the diagram.',
    risk_prevention:
      'Clear wiring diagram showing the path of the Ground, Live, and Neutral wires (p. 124).',
    risk_occurrence: 5,
    risk_detection:
      "Pre-flight checklist item 'MAINS WIRING' prompts a visual review (p. 135).",
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'CC',
    risk_filter: '',
    opt_preventive:
      'Use a pre-made harness with a connector for the PSU that includes the ground pin, making it impossible to forget.',
    opt_detection:
      "Add a mandatory step to the checklist: 'Use a multimeter to check for continuity between the ground pin on the power plug and the metal frame of the printer.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 124, Assembly Manual, p. 135'
  },
  {
    id: 'FC_071',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep: '[Mains Inlet Wiring] Wire Inlet to PSU (p. 124)',
    structure_workElement: 'Man',
    func_processItem:
      'Connect all electronic components according to wiring diagrams.',
    func_processStep:
      'Wire the Mains Inlet to the 24V Power Supply Unit (PSU).',
    func_workElement:
      'Connect the Live and Neutral wires to the correct terminals on the PSU.',
    fail_effect:
      '1. Your Plant: Damage to PSU, safety hazard. 2. Ship-to Plant: N\/A. 3. End User: The PSU may be damaged, but the primary risk is that the fuse and switch are now on the neutral line, not the live line. The printer may appear to be off when switched off, but circuits are still live relative to ground, creating a shock hazard during maintenance.',
    fail_severity: 10,
    fail_mode: 'Live and Neutral wires are swapped.',
    fail_cause:
      'Assembler misinterprets the L and N markings or the diagram and reverses the connections.',
    risk_prevention:
      'Clear wiring diagram showing the path of the Ground, Live, and Neutral wires (p. 124).',
    risk_occurrence: 6,
    risk_detection:
      "Pre-flight checklist item 'MAINS WIRING' prompts a visual review (p. 135).",
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'CC',
    risk_filter: '',
    opt_preventive:
      'Use color-coded fork terminals (e.g., brown for Live, blue for Neutral) in the kit and update the diagram to match.',
    opt_detection:
      'Add a multimeter check to the checklist to verify voltage at specific test points before full power-up.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 124, Assembly Manual, p. 135'
  },
  {
    id: 'FC_073',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep: '[Mains Voltage Wiring] Wire Bed Heater (p. 125)',
    structure_workElement: 'Man',
    func_processItem:
      'Connect all electronic components according to wiring diagrams.',
    func_processStep: 'Wire the heated bed.',
    func_workElement:
      'Connect the Build Plate Ground wire to the central grounding point on the build plate.',
    fail_effect:
      '1. Your Plant: Safety hazard. 2. Ship-to Plant: N\/A. 3. End User: The heated bed, which has mains voltage running through it, is not grounded. If the heater element shorts to the plate, the entire build surface can become live at mains voltage. Touching the bed could be lethal.',
    fail_severity: 10,
    fail_mode: 'Heated bed ground wire not connected.',
    fail_cause:
      'Assembler overlooks the separate ground wire connection for the build plate shown in the diagram.',
    risk_prevention:
      "Wiring diagram on p. 125 clearly shows the 'Build Plate Ground' wire.",
    risk_occurrence: 6,
    risk_detection: 'Visual inspection of wiring.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'CC',
    risk_filter: '',
    opt_preventive:
      'Source heated beds that have the ground wire pre-attached as part of the main cable harness.',
    opt_detection:
      "Add a checklist item: 'Verify continuity between the build plate's metal surface and the frame ground.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 125, No evidence'
  },
  {
    id: 'FC_166',
    history: '',
    structure_processItem: 'Software and Firmware',
    structure_processStep: '[Firmware] Edit `printer.cfg` file',
    structure_workElement: 'Man',
    func_processItem: "Install and configure the printer's control software.",
    func_processStep:
      'Configure all printer hardware parameters in the Klipper `printer.cfg` text file.',
    func_workElement:
      'Configure thermal safety limits (`min_temp`, `max_temp`).',
    fail_effect:
      '1. Your Plant: Safety system disabled. 2. Ship-to Plant: N\/A. 3. End User: The `max_temp` is set too high (e.g., 500 C). In a thermal runaway event, the firmware will not shut down the printer at a safe temperature, dramatically increasing the risk of fire.',
    fail_severity: 10,
    fail_mode: 'Firmware thermal safety limits configured incorrectly.',
    fail_cause:
      'The user disables the safety checks or sets them to unsafe values, possibly while trying to troubleshoot another issue, and forgets to set them back.',
    risk_prevention: 'Default Klipper configurations have safe values.',
    risk_occurrence: 4,
    risk_detection: 'Code review of the `printer.cfg` file.',
    risk_detScore: 9,
    risk_ap: 'H',
    risk_specialChar: 'CC',
    risk_filter: '',
    opt_preventive:
      "Add a prominent warning in the manual's software section: 'WARNING: Do not disable thermal safety checks or set `max_temp` higher than 290C. This is a critical fire safety feature.'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_189',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep: '[Final Wiring] Securing Electronics Panel',
    structure_workElement: 'Man',
    func_processItem: 'Enclose the electronics bay.',
    func_processStep: 'Install the bottom panel to cover the electronics.',
    func_workElement:
      'Ensure no wires are pinched between the panel and the frame.',
    fail_effect:
      '1. Your Plant: Short circuit, fire hazard. 2. Ship-to Plant: N\/A. 3. End User: A mains voltage wire is pinched between the metal frame and the bottom panel. The sharp edge of the extrusion cuts through the insulation, causing a direct short from mains live to the grounded frame. This will trip a breaker and could cause a spark\/fire.',
    fail_severity: 10,
    fail_mode: 'Wire pinched by bottom panel.',
    fail_cause:
      'The assembler does not route the wires neatly, leaving a wire draped over the edge of the frame where the panel will be installed.',
    risk_prevention: 'Good workmanship practices.',
    risk_occurrence: 5,
    risk_detection:
      'Visually inspecting the perimeter of the electronics bay before installing the bottom panel.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'CC',
    risk_filter: '',
    opt_preventive:
      'Provide 3D printable cable clips that secure the wiring to the deck panel, keeping it away from the edges of the frame.',
    opt_detection:
      "Add a checklist item: 'Before closing bottom panel, check that no wires are in the path of the panel edges.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_072',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep:
      '[Mains Voltage Wiring] Wire Solid State Relay (SSR) (p. 125)',
    structure_workElement: 'Man',
    func_processItem:
      'Connect all electronic components according to wiring diagrams.',
    func_processStep:
      'Wire the Solid State Relay (SSR) to control power to the heated bed.',
    func_workElement:
      'Connect the low-voltage control wires from the controller board to the DC input side of the SSR, and the high-voltage mains wires to the AC output side.',
    fail_effect:
      '1. Your Plant: Destruction of controller board and SSR. 2. Ship-to Plant: N\/A. 3. End User: Mains voltage is sent into the low-voltage controller board, instantly destroying it and the SSR. Potential fire and shock hazard.',
    fail_severity: 9,
    fail_mode:
      'Mains voltage wired to the low-voltage control side of the SSR.',
    fail_cause:
      'Assembler does not understand the function of the SSR and wires the mains power to the clearly marked DC input terminals.',
    risk_prevention:
      "Explicit warning: 'Under no circumstances should you wire mains current to the low voltage side of the relay.' (p. 125).",
    risk_occurrence: 4,
    risk_detection:
      'Visual review of wiring against the diagram (p. 125) and checklist (p. 135).',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'CC',
    risk_filter: '',
    opt_preventive:
      'Use a relay with shrouded connectors or different connector types for the AC and DC sides to make incorrect wiring more difficult.',
    opt_detection:
      "Add a specific checklist item: 'TRIPLE CHECK SSR WIRING. Mains power (from PSU) goes to terminals 1 & 2. Control signal (from SKR board) goes to terminals 3 & 4.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 125, Assembly Manual, p. 135'
  },
  {
    id: 'FC_098',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep: '[Wiring] General Wire Management',
    structure_workElement: 'Man',
    func_processItem:
      'Connect all electronic components according to wiring diagrams.',
    func_processStep: 'Route all wires neatly and secure them.',
    func_workElement:
      'Ensure wires are not pinched, chafed, or pulled taut by any moving parts.',
    fail_effect:
      "1. Your Plant: Intermittent faults during testing. 2. Ship-to Plant: N\/A. 3. End User: A wire's insulation is slowly worn away by rubbing against a moving part. Eventually, it shorts against the frame or another wire, causing component damage, a blown fuse, or a fire hazard. Intermittent connection causes random print failures that are hard to diagnose.",
    fail_severity: 9,
    fail_mode: 'Wire chafing leading to short circuit.',
    fail_cause:
      'A wire (e.g., for the toolhead) is routed incorrectly and rubs against a belt, extrusion, or other component during motion.',
    risk_prevention:
      'Use of cable chains helps to constrain and protect wires.',
    risk_occurrence: 5,
    risk_detection:
      'Visual inspection of all wiring routes, and manually moving all axes to their limits to check for rubbing or snagging.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'CC',
    risk_filter: '',
    opt_preventive:
      'Add a dedicated section to the manual on best practices for wire routing, including using zip ties to secure wires and checking for interference.',
    opt_detection:
      "Add to checklist: 'Move X, Y, and Z axes to all corners of the build volume. Verify no wires are pinched, pulled tight, or rubbing.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 128-131, No evidence'
  },
  {
    id: 'FC_107',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep: '[Wiring] Crimp Terminals',
    structure_workElement: 'Machine',
    func_processItem:
      'Connect all electronic components according to wiring diagrams.',
    func_processStep:
      'Crimp fork or ferrule terminals onto wire ends for connecting to screw terminals.',
    func_workElement:
      'The crimping tool must be the correct type and apply sufficient, uniform pressure to create a cold weld.',
    fail_effect:
      '1. Your Plant: Intermittent connection during test. 2. Ship-to Plant: N\/A. 3. End User: A poor crimp creates a high-resistance connection. On high-current wires (like the bed heater), this joint can overheat, melt, and pose a fire hazard. On signal wires, it can cause intermittent failures that are extremely difficult to diagnose.',
    fail_severity: 9,
    fail_mode: 'Poorly crimped terminal.',
    fail_cause:
      'The assembler uses the wrong tool (e.g., pliers instead of a dedicated crimper) or a faulty crimper, resulting in a mechanically weak and electrically poor connection.',
    risk_prevention: 'No specific instruction on crimping technique.',
    risk_occurrence: 7,
    risk_detection:
      "The 'pull test' - pulling firmly on the wire after crimping to ensure the terminal does not come off.",
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'CC',
    risk_filter: '',
    opt_preventive:
      'Add a section on proper wiring techniques, showing a picture of a correct crimping tool and explaining the need for a solid connection. Recommend pre-crimped wire sets.',
    opt_detection:
      'Instruct the user to perform a firm pull test on every single crimped connection they make.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_108',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep: '[Wiring] Connecting to Screw Terminals',
    structure_workElement: 'Man',
    func_processItem:
      'Connect all electronic components according to wiring diagrams.',
    func_processStep:
      'Secure wire terminals into screw terminals on the PSU and controller boards.',
    func_workElement:
      'Tighten the screw sufficiently to secure the wire without over-tightening and breaking the terminal.',
    fail_effect:
      '1. Your Plant: Intermittent connection. 2. Ship-to Plant: N\/A. 3. End User: A loose connection in a high-current path (PSU, heater) creates high resistance, leading to overheating, melting of the terminal block, and fire risk. A loose signal wire causes intermittent and random print failures.',
    fail_severity: 9,
    fail_mode: 'Loose connection at screw terminal.',
    fail_cause:
      'The assembler does not tighten the terminal screw sufficiently, leaving the wire loose.',
    risk_prevention: 'General assembly skill.',
    risk_occurrence: 7,
    risk_detection:
      'Gently tugging on each wire after tightening it in a screw terminal.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'CC',
    risk_filter: '',
    opt_preventive:
      'Recommend using ferrules on all wires going into screw terminals, which provide a better connection. Specify torque values for critical terminals like the main PSU input.',
    opt_detection:
      "Add to checklist: 'After completing wiring, go back and gently tug on every single wire connected to a screw terminal to check for looseness.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_119',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep:
      '[Deck Panel & Z Drives] Install Bottom Deck Panel (p. 25)',
    structure_workElement: 'Material',
    func_processItem: 'Create a mounting platform for the electronics.',
    func_processStep: 'Install the bottom deck panel.',
    func_workElement:
      'The deck panel material must be electrically non-conductive.',
    fail_effect:
      '1. Your Plant: Safety hazard. 2. Ship-to Plant: N\/A. 3. End User: A short circuit on an electronics board (e.g., from a stray solder blob or loose wire) can energize the entire panel. If the panel touches the frame, it can trip a breaker. If not, it creates a shock hazard inside the electronics bay.',
    fail_severity: 9,
    fail_mode: 'Deck panel is electrically conductive.',
    fail_cause:
      'User substitutes the specified panel material (e.g., plastic or composite) with an aluminum sheet, not realizing the safety implication.',
    risk_prevention: 'Bill of materials specifies a non-conductive material.',
    risk_occurrence: 3,
    risk_detection:
      'Using a multimeter to check for continuity between the panel and the frame.',
    risk_detScore: 9,
    risk_ap: 'H',
    risk_specialChar: 'CC',
    risk_filter: '',
    opt_preventive:
      "Add a warning to the manual: 'The deck panel MUST be made from an electrically insulating material. Do NOT use a metal panel.'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence (BOM not provided), No evidence'
  },
  {
    id: 'FC_140',
    history: '',
    structure_processItem: 'Build Plate Assembly',
    structure_processStep:
      '[Heater & Thermal Fuse] Apply Heater to Build Plate (p. 31)',
    structure_workElement: 'Man',
    func_processItem: 'Provide a heated, flat surface for 3D printing.',
    func_processStep:
      'Adhere the Keenovo silicone heater to the underside of the aluminum build plate.',
    func_workElement:
      'Clean the surface of the aluminum plate before applying the adhesive heater.',
    fail_effect:
      '1. Your Plant: Rework impossible, scrapped heater\/plate. 2. Ship-to Plant: N\/A. 3. End User: The heater adhesive fails to bond properly. The heater peels away from the plate over time, creating a large air gap. This leads to very slow and uneven heating, and is a fire hazard as the heater element can overheat in the un-cooled spot.',
    fail_severity: 9,
    fail_mode: 'Heater delaminates from build plate.',
    fail_cause:
      'The surface of the aluminum plate was not cleaned of machine oils and residue before the heater was applied.',
    risk_prevention: 'No explicit instruction to clean the plate.',
    risk_occurrence: 6,
    risk_detection: 'No detection method other than failure in service.',
    risk_detScore: 10,
    risk_ap: 'H',
    risk_specialChar: 'CC',
    risk_filter: '',
    opt_preventive:
      "Add a critical instruction: 'Before applying the heater, thoroughly clean the aluminum plate with isopropyl alcohol and a lint-free cloth to remove any oils.'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_145',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep: '[Mains Inlet Wiring] Wire Stripping',
    structure_workElement: 'Machine',
    func_processItem:
      'Connect all electronic components according to wiring diagrams.',
    func_processStep: 'Prepare wire ends for connection.',
    func_workElement:
      'Wire stripper cleanly removes insulation without damaging the copper conductor strands.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The wire stripper nicks or cuts several of the copper strands. The reduced cross-sectional area of the wire creates a high-resistance point. In a high-current wire, this spot can overheat and melt, posing a fire risk.',
    fail_severity: 9,
    fail_mode: 'Conductor strands damaged during stripping.',
    fail_cause:
      'The assembler uses a dull tool, the wrong gauge setting on an automatic stripper, or a knife, and cuts into the copper strands.',
    risk_prevention: 'Standard assembly practice.',
    risk_occurrence: 6,
    risk_detection:
      'Visual inspection of the stripped wire end to check for damaged strands.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'CC',
    risk_filter: '',
    opt_preventive:
      'Recommend using a high-quality, automatic wire stripper that adjusts to the wire gauge. Provide pre-cut and stripped wires in the kit.',
    opt_detection:
      'Add a visual guide showing a good strip versus a bad (nicked) strip.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_004',
    history: '',
    structure_processItem: 'Printed Parts',
    structure_processStep: '[Part Printing] Slicing STL files',
    structure_workElement: 'Man',
    func_processItem: 'Provide the structural components for the printer.',
    func_processStep:
      'Convert 3D model (STL) files into machine instructions (G-code) for printing.',
    func_workElement:
      'Select the correct material profile (ABS) with recommended settings in the slicer software.',
    fail_effect:
      '1. Your Plant: Wasted filament and time reprinting parts. 2. Ship-to Plant: N\/A. 3. End User: User accidentally prints parts using a PLA profile (lower temp, high fan). The resulting ABS parts have extremely poor layer adhesion and are brittle, causing them to break during assembly or in service.',
    fail_severity: 8,
    fail_mode: 'Parts printed with incorrect material settings.',
    fail_cause:
      "User selects the wrong slicer profile (e.g., 'Generic PLA') out of habit and fails to verify settings like temperature and fan speed before printing.",
    risk_prevention: 'Print guidelines provided in the manual (p. 5).',
    risk_occurrence: 5,
    risk_detection:
      "Reviewing slicer settings before starting the print. Observing the printer's temperature display during the print.",
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Provide pre-configured slicer profiles for popular slicers (PrusaSlicer, Cura) that users can download and import directly.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 5, No evidence'
  },
  {
    id: 'FC_010',
    history: '',
    structure_processItem: 'Voron 2.4 Frame',
    structure_processStep:
      '[Frame Assembly] Assemble Frame Top & Check Squareness (p. 14)',
    structure_workElement: 'Man',
    func_processItem:
      "Assembly of a rigid and square foundational structure for the printer's motion system.",
    func_processStep:
      'Assemble the top four extrusions and ensure all eight corners of the frame cube are as square as possible (90 degrees).',
    func_workElement:
      'Utilize a framing square or other reference surface to check for 90-degree angles at each corner joint before final tightening.',
    fail_effect:
      '1. Your Plant: Difficulty installing linear rails and gantry, rework required. 2. Ship-to Plant: N\/A. 3. End User: Gantry motion is not orthogonal to the Z-axis, causing skewed prints; potential for binding and excessive wear on motion components.',
    fail_severity: 8,
    fail_mode: 'Frame is not square (forms a parallelogram).',
    fail_cause:
      'Assembler fails to check for squareness before fully tightening the frame fasteners, relying on visual estimation.',
    risk_prevention:
      "Manual instruction: 'Use a framing square and ensure all corners are as square as possible' (p. 14). Manual also suggests building on a glass surface (p. 13).",
    risk_occurrence: 6,
    risk_detection:
      'The check with the framing square is the detection control.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Design and provide files for 3D printable corner jigs that hold the extrusions at a perfect 90-degree angle during assembly.',
    opt_detection:
      "Add a verification step to measure and compare the diagonal distances of the frame's faces. The distances should be equal.",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 14, Assembly Manual, p. 14'
  },
  {
    id: 'FC_015',
    history: '',
    structure_processItem: 'Voron 2.4 Frame',
    structure_processStep:
      '[Z Axis Linear Rails] Install Z-Axis Linear Rails (p. 16)',
    structure_workElement: 'Man',
    func_processItem:
      'Provide a smooth, precise, and parallel guide system for the Z-axis motion.',
    func_processStep:
      'Secure four linear rails to the four vertical frame extrusions using M3x8 SHCS fasteners.',
    func_workElement:
      'Tighten the M3 fasteners sufficiently to hold the rail securely without deforming the rail or stripping the T-nuts.',
    fail_effect:
      '1. Your Plant: Stripped T-nut requires rail removal to replace. Rail deformation requires scrapping the rail. 2. Ship-to Plant: N\/A. 3. End User: Deformed (bowed) rail causes severe binding of the Z-axis, preventing motion and potentially damaging motors. Catastrophic print failure.',
    fail_severity: 8,
    fail_mode: 'M3 fasteners over-tightened, deforming the linear rail.',
    fail_cause:
      'Assembler applies excessive torque to the M3 fasteners, exceeding the yield strength of the rail body.',
    risk_prevention:
      "Explicit warning in manual: 'DON’T OVER TIGHTEN!' (p. 16).",
    risk_occurrence: 6,
    risk_detection: 'Checking for smooth carriage movement after installation.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Specify a torque value for the M3 fasteners and recommend a suitable torque driver.',
    opt_detection:
      'Use a straight edge or indicator gauge to check the rail for straightness after the fasteners are tightened.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 16, No evidence for detection'
  },
  {
    id: 'FC_020',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep:
      '[Z Belt Drive & Stepper] Assemble Pulley to Stepper (p. 19)',
    structure_workElement: 'Man',
    func_processItem:
      'Assembly of four identical Z-axis belt drive modules to lift the gantry.',
    func_processStep:
      'Secure a GT2 16T pulley onto the Z-axis stepper motor shaft.',
    func_workElement:
      "Tighten two grub screws to securely fasten the pulley to the motor's D-shaft, and apply thread lock compound.",
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: Pulley slips on the motor shaft during operation, causing one corner of the gantry to stop moving while the others continue. This leads to a severely tilted gantry, failed print, and potential damage from binding.',
    fail_severity: 8,
    fail_mode: 'Pulley slips on motor shaft.',
    fail_cause:
      'Assembler does not tighten the grub screws sufficiently, or forgets to apply thread lock compound allowing them to vibrate loose.',
    risk_prevention:
      "Explicit instruction: 'APPLY THREAD LOCK COMPOUND' (p. 19).",
    risk_occurrence: 6,
    risk_detection:
      'Attempting to rotate the pulley by hand while holding the motor shaft after assembly.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Recommend a specific torque for the grub screws and suggest using a torque driver for M3 grub screws.',
    opt_detection:
      "Add a mandatory check to the final checklist: 'Verify all motor pulley grub screws are tight'.",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 19, No evidence'
  },
  {
    id: 'FC_023',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep:
      '[Belt Drive Shaft Assembly] Assemble Shaft Components (p. 20)',
    structure_workElement: 'Man',
    func_processItem:
      'Assembly of four identical Z-axis belt drive modules to lift the gantry.',
    func_processStep:
      'Assemble a drive shaft with two pulleys (80T and 20T), three bearings, and shims.',
    func_workElement:
      'Install components in the correct order as shown in the diagram: Bearing, 80T Pulley, Shim, Bearing, 20T Pulley, Bearing.',
    fail_effect:
      '1. Your Plant: Rework required after discovering incorrect assembly. 2. Ship-to Plant: N\/A. 3. End User: Incorrect spacing between components. Belt will not align with motor pulley, causing belt wear, skipping, and Z-axis failure.',
    fail_severity: 8,
    fail_mode:
      'Components on shaft assembled in wrong order (e.g., shim forgotten).',
    fail_cause:
      'Assembler does not follow the diagram carefully and omits the M5 shim or reverses the order of a pulley and bearing.',
    risk_prevention:
      'Clear, exploded-view diagram showing the correct component stack-up (p. 20).',
    risk_occurrence: 7,
    risk_detection:
      "Visual comparison of the assembled shaft against the manual's diagram.",
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Number the components in the diagram (1, 2, 3...) to reinforce the correct assembly sequence.',
    opt_detection:
      'Add a checkpoint to use calipers to measure the distance between the two pulleys and compare it to a nominal value.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 20, Assembly Manual, p. 20'
  },
  {
    id: 'FC_033',
    history: '',
    structure_processItem: 'Build Plate Assembly',
    structure_processStep: '[Z Endstop Pin] Assemble Endstop Pin (p. 32)',
    structure_workElement: 'Man',
    func_processItem:
      'Provide a physical trigger mechanism for the Z-axis endstop switch.',
    func_processStep:
      'Assemble the Z endstop pin by pressing a 33mm shaft into a de-flanged GT2 20T pulley.',
    func_workElement:
      'Secure the assembly by tightening a grub screw against a notch cut into the shaft.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The pin falls out of the assembly, especially when the printer is tilted. This will cause the nozzle to crash into the build plate during the homing sequence, damaging the nozzle, hotend, and\/or build surface.',
    fail_severity: 8,
    fail_mode: 'Endstop pin falls out of pulley.',
    fail_cause:
      "Assembler fails to cut a notch into the shaft for the grub screw to engage with, as described in the 'IMPORTANT NOTICE' on p. 33.",
    risk_prevention:
      'A full page of instructions and warnings (p. 33) is dedicated to the criticality of this step.',
    risk_occurrence: 5,
    risk_detection:
      'Tugging on the pin after assembly to ensure it is retained by the grub screw.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Source a shaft that is pre-notched from the supplier to eliminate this manual fabrication step.',
    opt_detection:
      "Add a specific instruction: 'After tightening the grub screw, pull firmly on the shaft. It should not come out. If it does, your notch is insufficient.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 33, No evidence'
  },
  {
    id: 'FC_034',
    history: '',
    structure_processItem: 'Build Plate Assembly',
    structure_processStep: '[Z Endstop Pin] Adjust Endstop Pin (p. 33)',
    structure_workElement: 'Man',
    func_processItem:
      'Provide a physical trigger mechanism for the Z-axis endstop switch.',
    func_processStep: 'Adjust the length of the endstop pin.',
    func_workElement:
      'The grub screw must be left loose enough to allow the shaft to move and actuate the microswitch, and be held with retaining compound.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The endstop switch cannot be triggered because the pin is seized. The nozzle will crash into the build plate during homing, causing damage.',
    fail_severity: 8,
    fail_mode: 'Endstop pin seized, cannot actuate switch.',
    fail_cause:
      'Assembler overtightens the grub screw, locking the shaft in place and preventing it from moving.',
    risk_prevention:
      "Explicit instruction: 'It should not be tight to the shaft, but rather left loose to allow for movement.' (p. 33).",
    risk_occurrence: 6,
    risk_detection:
      'Manually pushing on the pin to verify it moves freely and clicks the microswitch.',
    risk_detScore: 4,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Redesign the mechanism to use a shoulder bolt or similar method that mechanically prevents overtightening and seizure.',
    opt_detection:
      "Add a mandatory check to the Pre-Flight Checklist: 'Manually press Z-endstop pin. Does it move freely and click the switch?'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 33, No evidence'
  },
  {
    id: 'FC_035',
    history: '',
    structure_processItem: 'Build Plate Assembly',
    structure_processStep: '[Z Endstop Pin] Mount Microswitch (p. 34)',
    structure_workElement: 'Man',
    func_processItem:
      'Provide a physical trigger mechanism for the Z-axis endstop switch.',
    func_processStep: 'Secure the microswitch to the printed endstop housing.',
    func_workElement:
      'Remove the metal lever from the microswitch body before installation.',
    fail_effect:
      '1. Your Plant: Rework required to remove switch and lever. 2. Ship-to Plant: N\/A. 3. End User: The metal lever gets in the way of the endstop pin, preventing the switch from being actuated correctly. The nozzle will crash into the bed.',
    fail_severity: 8,
    fail_mode: 'Microswitch lever not removed.',
    fail_cause:
      "Assembler misses the instruction 'Make sure to remove the lever from the microswitch as it will get in the way.'",
    risk_prevention: 'Explicit instruction in manual (p. 34).',
    risk_occurrence: 7,
    risk_detection: 'Visual inspection of the assembled endstop.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Source microswitches that do not come with a lever pre-installed.',
    opt_detection:
      "Improve the diagram to show a large red 'X' over the lever on the microswitch before it is shown being installed.",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 34, No evidence'
  },
  {
    id: 'FC_038',
    history: '',
    structure_processItem: 'AB Drive Modules',
    structure_processStep: '[AB Drive Stepper Install] Install Pulley (p. 44)',
    structure_workElement: 'Man',
    func_processItem:
      'Assembly of the A and B motor drive modules for the gantry.',
    func_processStep:
      'Install the GT2 20T pulley onto the stepper motor shaft.',
    func_workElement:
      'Apply thread lock compound to the pulley grub screws to prevent them from loosening.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: Pulley grub screws vibrate loose. The pulley slips on the motor shaft, causing a loss of motion on one side of the gantry. This results in layer shifting and a failed print.',
    fail_severity: 8,
    fail_mode: 'Thread lock not applied to pulley grub screws.',
    fail_cause:
      'Assembler forgets to apply thread lock compound to the grub screws before tightening them.',
    risk_prevention:
      "Explicit instruction: 'Make sure to apply thread lock compound to the pulley grub screws.' (p. 44).",
    risk_occurrence: 6,
    risk_detection:
      'Visual inspection for thread lock residue during assembly.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive: 'Use grub screws with a pre-applied thread locking patch.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 44, No evidence'
  },
  {
    id: 'FC_039',
    history: '',
    structure_processItem: 'AB Drive Modules',
    structure_processStep:
      '[Completed AB Drive Units] Check Pulley Orientation (p. 45)',
    structure_workElement: 'Man',
    func_processItem:
      'Assembly of the A and B motor drive modules for the gantry.',
    func_processStep: 'Complete the assembly of the A drive and B drive units.',
    func_workElement:
      'Ensure the 20T motor pulley is mounted oppositely on the A drive versus the B drive to ensure correct belt paths.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The belt paths for the CoreXY motion system will be incorrect. The gantry will not move correctly; it may bind, move erratically, or move in unexpected directions. Printer is non-functional until corrected.',
    fail_severity: 8,
    fail_mode:
      'A and B drive motor pulleys are mounted identically, not mirrored.',
    fail_cause:
      'Assembler does not read or understand the instruction to mount the pulleys opposite to each other for the two different drive units.',
    risk_prevention:
      "Explicit instruction with images for comparison: 'CHECK 20T PULLEY' (p. 45).",
    risk_occurrence: 6,
    risk_detection:
      'Visual comparison of the two completed modules against the diagram in the manual.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Design the A and B drive housings to be physically different (asymmetrical) so the pulley can only be mounted in the correct position for each.',
    opt_detection:
      "Create a simple printable gauge that fits over the assembly and indicates if the pulley is in the 'A' or 'B' position.",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 45, Assembly Manual, p. 45'
  },
  {
    id: 'FC_042',
    history: '',
    structure_processItem: 'Gantry Assembly',
    structure_processStep: '[Y Rail Install] Install Y-Linear Rails (p. 52)',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the gantry, which carries the toolhead.',
    func_processStep: 'Install the Y-axis linear rails onto the Y-extrusions.',
    func_workElement:
      'Use the front idlers as the reference point, pressing the linear rails firmly against the backs of the idlers.',
    fail_effect:
      '1. Your Plant: Rework required to reposition rails. 2. Ship-to Plant: N\/A. 3. End User: The gantry is not square. The X-axis is not perpendicular to the Y-axis. This causes prints to be skewed (circles print as ovals, squares as rhombuses).',
    fail_severity: 8,
    fail_mode: 'Y-rails not indexed correctly against the front idlers.',
    fail_cause:
      'Assembler does not press the rail firmly against the idler blocks before tightening, leaving a gap. The two Y-rails are not positioned identically.',
    risk_prevention:
      "Explicit instruction: 'The front idlers are our index point...install the linear rails such that they are pressed firmly against the backs of the idlers.' (p. 52).",
    risk_occurrence: 6,
    risk_detection:
      'Visual and tactile check to ensure there is no gap between the rail end and the idler block.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Design the idler blocks with a lip that overlaps the end of the rail, creating a positive stop and making misalignment impossible.',
    opt_detection:
      'Add a check: Use calipers to measure from the front of the extrusion to the end of the rail on both sides to ensure the measurement is identical.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 52, Assembly Manual, p. 52'
  },
  {
    id: 'FC_043',
    history: '',
    structure_processItem: 'Gantry Assembly',
    structure_processStep: '[Front Idlers] Install Front Idlers (p. 53)',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the gantry, which carries the toolhead.',
    func_processStep:
      'Install the left and right front idler assemblies onto the Y-extrusions.',
    func_workElement:
      'Ensure both idlers are sitting flush to the end of both extrusions.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The gantry is not square, as the primary indexing points are misaligned. Prints will be skewed.',
    fail_severity: 8,
    fail_mode: 'Front idlers not installed flush with extrusion ends.',
    fail_cause:
      'Assembler does not take care to align the idlers perfectly flush with the extrusion ends before tightening the fasteners.',
    risk_prevention:
      "Explicit instruction: 'Take your time and ensure that both idlers are sitting flush to the end of both extrusions.' (p. 53).",
    risk_occurrence: 6,
    risk_detection:
      'Visual and tactile check. Running a finger over the joint to feel for any steps.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Provide a 3D printable alignment tool that fits over the extrusion and idler, forcing them to be flush during tightening.',
    opt_detection:
      'Use a small square to check that the front face of the idler is co-planar with the end face of the extrusion.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 53, Assembly Manual, p. 53'
  },
  {
    id: 'FC_049',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[A\/B Belt Routing] Route Belts (p. 64-65)',
    structure_workElement: 'Man',
    func_processItem:
      'Assembly of the Afterburner toolhead, which holds the hotend and extruder.',
    func_processStep: 'Route the A and B belts through the CoreXY motion path.',
    func_workElement:
      'Follow the complex routing diagram exactly, ensuring no twists in the belt and that it passes over\/under the correct idlers.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: Incorrectly routed belts will cause the gantry to move in wrong or unpredictable directions. Printer is non-functional. A twisted belt will wear out very quickly.',
    fail_severity: 8,
    fail_mode: 'Belt routed incorrectly (e.g., twisted or wrong path).',
    fail_cause:
      'The CoreXY belt path is complex and non-intuitive. The assembler misinterprets the diagram and routes a belt on the wrong side of an idler or introduces a 180-degree twist.',
    risk_prevention:
      'Detailed routing diagrams for both A and B belts are provided (p. 64-65).',
    risk_occurrence: 6,
    risk_detection:
      'Careful visual trace of the entire belt path, comparing it against the manual, before applying tension.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Create an animated GIF or video of the belt routing process, as a 2D diagram can be ambiguous.',
    opt_detection:
      "Add a check: 'Manually move the toolhead in X and Y and observe the motors. For pure X motion, motors should turn equally. For pure Y, they should turn opposite.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 64-65, No evidence'
  },
  {
    id: 'FC_062',
    history: '',
    structure_processItem: 'Belting Z Drive',
    structure_processStep:
      '[Mounting Z Blocks to Carriages] Attach Belt to Gantry (p. 87)',
    structure_workElement: 'Man',
    func_processItem:
      'Synchronize the four Z-drives using a single continuous belt.',
    func_processStep:
      'Attach the Z-belt to the gantry at four points using Z-joint blocks.',
    func_workElement:
      'Ensure the gantry is level before securing the belts to the Z-joint blocks.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The gantry is installed crooked. It will bind in the Z-axis, causing failed prints. The printer will not be able to perform leveling or calibration routines.',
    fail_severity: 8,
    fail_mode: 'Gantry installed non-level.',
    fail_cause:
      'The assembler tensions and secures the Z-belts without first ensuring the gantry is at an equal height at all four corners.',
    risk_prevention:
      'This critical step is not explicitly detailed in the manual.',
    risk_occurrence: 8,
    risk_detection:
      'Measuring the distance from the frame to the gantry at each corner after belt installation.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Add a detailed procedure: 'Before attaching the belts, use identical objects (e.g., 3D printed blocks) to prop up all four corners of the gantry, ensuring it is parallel to the frame. Then, attach and tension the belts.'",
    opt_detection:
      "Add to pre-flight checklist: 'Measure gantry height at all four corners. Are they equal?'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_069',
    history: '',
    structure_processItem: 'Electronics Mounting',
    structure_processStep:
      '[SKR Mounting Bracket] Mount Controller Board (p. 119)',
    structure_workElement: 'Environment',
    func_processItem:
      'Mount all electronic components securely to the DIN rails.',
    func_processStep:
      'Mount the main controller board (BigTreeTech SKR) to its printed bracket.',
    func_workElement:
      'Protect the sensitive electronic components from electrostatic discharge (ESD) during handling.',
    fail_effect:
      "1. Your Plant: Scrapped controller board. 2. Ship-to Plant: N\/A. 3. End User: The controller board is non-functional ('dead on arrival'). The printer cannot be operated. Requires expensive replacement and halts the build.",
    fail_severity: 8,
    fail_mode: 'Controller board damaged by ESD.',
    fail_cause:
      'The assembler handles the board in a static-prone environment (e.g., on carpet) without using an ESD wrist strap, and a static discharge event damages a component on the board.',
    risk_prevention: 'No specific ESD warnings are present in the manual.',
    risk_occurrence: 4,
    risk_detection:
      'Failure detected at first power-on when the board does not function.',
    risk_detScore: 10,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Add a prominent 'ESD SENSITIVE COMPONENTS' warning icon and text to the Electronics Mounting section, recommending the use of an anti-static wrist strap.",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_074',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep: '[Low Voltage Power] Wire Components (p. 126)',
    structure_workElement: 'Man',
    func_processItem:
      'Connect all electronic components according to wiring diagrams.',
    func_processStep:
      'Wire the low voltage (24V) components like the controller boards and fans.',
    func_workElement:
      'Connect positive (+) and negative (-) wires to the correct terminals, observing polarity.',
    fail_effect:
      '1. Your Plant: Damage to electronic components. 2. Ship-to Plant: N\/A. 3. End User: Connecting power with reverse polarity will instantly and permanently damage the controller board or other electronics. Component must be replaced.',
    fail_severity: 8,
    fail_mode: 'Low voltage power connected with reverse polarity.',
    fail_cause:
      'Assembler does not pay attention to the + and - markings on the power supply and controller board, or the red\/black wire colors.',
    risk_prevention:
      'Wiring diagram shows red (+) and black (-) wires. Components are marked with polarity.',
    risk_occurrence: 5,
    risk_detection: "Pre-flight checklist item 'LOW VOLTAGE WIRING' (p. 135).",
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Use polarized connectors (e.g., XT60) for main power connections that physically prevent reverse polarity connection.',
    opt_detection:
      "Add a checklist step: 'Before powering on, use a multimeter to check the polarity of the wires at the controller board connector.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 126, Assembly Manual, p. 135'
  },
  {
    id: 'FC_077',
    history: '',
    structure_processItem: 'Electronics Sub-Assembly',
    structure_processStep: '[Test] Initial Power-On',
    structure_workElement: 'Man',
    func_processItem: 'Verify the integrity of the electronics assembly.',
    func_processStep:
      'Apply mains power to the printer for the first time to check for fundamental errors.',
    func_workElement:
      'Ensure all mains and low-voltage wiring is correct before applying power.',
    fail_effect:
      "1. Your Plant: 'Magic smoke' released, component destruction. 2. Ship-to Plant: N\/A. 3. End User: A wiring error (e.g., reverse polarity, short circuit) instantly destroys the main controller board or other expensive components upon power-up.",
    fail_severity: 8,
    fail_mode: 'Component destroyed on first power-up.',
    fail_cause:
      'A critical wiring error, such as reversing the 24V input to the controller board, was made during assembly and not caught.',
    risk_prevention:
      'Visual check of wiring against diagrams. Pre-flight checklist (p. 135).',
    risk_occurrence: 5,
    risk_detection:
      'Using a multimeter to check for short circuits between power and ground, and to verify voltage\/polarity before connecting the final component (the controller board).',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Use keyed connectors for all power connections to make polarity reversal physically impossible.',
    opt_detection:
      "Add a 'Smoke Test' procedure to the manual: 'Disconnect power from all controller boards. Power on the PSU. Use a multimeter to verify 24V and 5V outputs are correct. Power off. Connect boards. Power on again.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 135, No evidence'
  },
  {
    id: 'FC_081',
    history: '',
    structure_processItem: 'Software and Firmware',
    structure_processStep: '[Firmware] Edit `printer.cfg` file',
    structure_workElement: 'Man',
    func_processItem: "Install and configure the printer's control software.",
    func_processStep:
      'Configure all printer hardware parameters in the Klipper `printer.cfg` text file.',
    func_workElement:
      'Set the correct thermistor type for the hotend and heated bed.',
    fail_effect:
      '1. Your Plant: Incorrect temperature readings. 2. Ship-to Plant: N\/A. 3. End User: Temperature readings are wildly inaccurate (e.g., reads 150°C when it is actually 220°C). This leads to poor print quality, extruder jams, or thermal runaway safety shutdowns.',
    fail_severity: 8,
    fail_mode: 'Incorrect thermistor type configured.',
    fail_cause:
      'The user does not know what specific thermistor model was included in their kit and guesses the `sensor_type` in the configuration file.',
    risk_prevention: 'Kit BOM should specify the thermistor type.',
    risk_occurrence: 6,
    risk_detection:
      'Verifying the temperature reading against a known reference (e.g., an infrared thermometer) or by observing material melting behavior.',
    risk_detScore: 9,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Kit suppliers must clearly label or document the exact model of thermistor provided. The Voron Sourcing Guide should recommend a single, standard thermistor.',
    opt_detection:
      "Add a calibration check: 'Heat the nozzle to the melting point of a known filament (e.g., 210°C for PLA). Does it extrude correctly? If not, your thermistor type may be wrong.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_088',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep:
      '[Belt Drive Shaft Assembly] Assemble Shaft Components (p. 20)',
    structure_workElement: 'Man',
    func_processItem:
      'Assembly of four identical Z-axis belt drive modules to lift the gantry.',
    func_processStep:
      'Assemble a drive shaft with two pulleys (80T and 20T), three bearings, and shims.',
    func_workElement:
      'Tighten grub screws on both the 80T and 20T pulleys, with thread lock.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The 80T pulley, which drives the main Z belt, slips on its shaft. This desynchronizes one corner from the other three, causing the gantry to tilt severely and the print to fail.',
    fail_severity: 8,
    fail_mode: '80T pulley slips on drive shaft.',
    fail_cause:
      "Assembler applies thread lock to the 20T pulley grub screws but forgets to also apply it to the 80T pulley's grub screws.",
    risk_prevention:
      "Instruction with diagram: 'APPLY THREAD LOCK COMPOUND...not only to the 9mm pulley grub screws, but also the 80T pulley!' (p. 20).",
    risk_occurrence: 6,
    risk_detection:
      'Visual check for thread lock residue on all grub screws before assembly into housing.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive: 'Use grub screws with pre-applied locking patches.',
    opt_detection:
      "Add a checklist item for each of the four Z-drive modules: 'Verified thread lock on both 20T and 80T pulley grub screws.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 20, No evidence'
  },
  {
    id: 'FC_092',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[XY Belt Retention] Install Belt Clamps (p. 61)',
    structure_workElement: 'Man',
    func_processItem: 'Securely anchor the belts to the toolhead carriage.',
    func_processStep: 'Install the toothed XY belt retention blocks.',
    func_workElement:
      'Ensure the teeth of the belt are properly meshed with the teeth on the retention blocks before tightening.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The belt is not securely clamped. It will slip in the clamp under tension or during rapid movements, causing sudden, large layer shifts and immediate print failure.',
    fail_severity: 8,
    fail_mode: 'Belt slips in carriage clamp.',
    fail_cause:
      'The belt is not fully seated in the toothed channel of the clamp, so the teeth do not properly engage the belt before the clamp is tightened.',
    risk_prevention: 'Diagram on page 61 shows the assembly.',
    risk_occurrence: 6,
    risk_detection:
      'Visual inspection of the belt in the clamp before tightening the second half.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Redesign the clamp with deeper, more aggressive teeth to improve grip and make engagement less critical.',
    opt_detection:
      "Add a check: 'After tensioning the belts, use pliers to pull firmly on the belt end emerging from the clamp. It should not slip.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 61, No evidence'
  },
  {
    id: 'FC_102',
    history: '',
    structure_processItem: 'Build Plate Assembly',
    structure_processStep: '[Z Endstop Pin] Adjust Endstop Pin (p. 33)',
    structure_workElement: 'Man',
    func_processItem:
      'Provide a physical trigger mechanism for the Z-axis endstop switch.',
    func_processStep: 'Adjust the length of the endstop pin.',
    func_workElement:
      'Cut the pin to the correct length based on the specific build plate configuration.',
    fail_effect:
      '1. Your Plant: Rework\/scrapped part. 2. Ship-to Plant: N\/A. 3. End User: The pin is cut too short. The hot end nozzle will crash into the build plate before the pin is long enough to trigger the switch. This can cause significant damage to the hotend or build surface.',
    fail_severity: 8,
    fail_mode: 'Endstop pin cut too short.',
    fail_cause:
      'The assembler cuts the pin based on a miscalculation or before the final build surface is installed, resulting in a pin that is too short to function.',
    risk_prevention:
      "Recommendation to 'cut and size this pin as your last step in your build process.' (p. 33).",
    risk_occurrence: 6,
    risk_detection:
      'Manually lowering the gantry to see if the pin triggers the switch before the nozzle touches the bed.',
    risk_detScore: 6,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Provide a 3D printable gauge that represents the nozzle height, allowing the user to precisely mark and cut the pin without risking a nozzle crash.',
    opt_detection:
      "Add a mandatory check: 'With the printer off, slowly and manually lower the gantry. Verify the Z-endstop switch clicks BEFORE the nozzle touches the build plate.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 33, No evidence'
  },
  {
    id: 'FC_105',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Hot End & Fan Housing] Assemble Hotend (p. 66)',
    structure_workElement: 'Man',
    func_processItem: 'Melt and extrude filament.',
    func_processStep: 'Assemble the hotend into its mount.',
    func_workElement:
      'Ensure the heater block, heat break, and nozzle are all tightened correctly *while hot*.',
    fail_effect:
      "1. Your Plant: Leaks during print testing. 2. Ship-to Plant: N\/A. 3. End User: Molten plastic leaks from the threads between the nozzle and heat break. This 'hotend blob' can cover the entire hotend, destroying it and the surrounding printed parts, and is a fire hazard.",
    fail_severity: 8,
    fail_mode: 'Molten plastic leaks from hotend.',
    fail_cause:
      "The assembler did not perform a final 'hot tighten' of the nozzle against the heat break. As the components heat up, they expand, and a gap opens up that was not present when cold.",
    risk_prevention:
      'This critical procedure is standard for 3D printers but is not mentioned in this assembly manual.',
    risk_occurrence: 8,
    risk_detection:
      'Visual inspection for signs of leaking plastic during the first few prints.',
    risk_detScore: 9,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Add a critical instruction block for hotend assembly: 'IMPORTANT: After installing the hotend, heat it to 250°C. While wearing gloves, use a wrench to gently tighten the nozzle one final quarter-turn. This prevents leaks.'",
    opt_detection: 'N\/A, prevention is key.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_113',
    history: '',
    structure_processItem: 'Printed Parts',
    structure_processStep: '[Introduction] Print Guidelines (p. 5)',
    structure_workElement: 'Material',
    func_processItem: 'Provide the structural components for the printer.',
    func_processStep: '3D print all non-metal components for the printer.',
    func_workElement:
      'Print parts using ABS material as recommended for its high-temperature resistance.',
    fail_effect:
      '1. Your Plant: N\/A. 2. Ship-to Plant: N\/A. 3. End User: Parts near the heated bed or motors (e.g., Z-drive modules, skirts) deform or sag over time due to the heat. This causes misalignment, loss of function, and eventual failure of the components.',
    fail_severity: 8,
    fail_mode: 'Printed parts deform from heat.',
    fail_cause:
      'The user prints the parts in a material with a low glass transition temperature, such as PLA, instead of the recommended ABS.',
    risk_prevention:
      "Explicit material recommendation in the manual: '...we recommend only using ABS to build your printer.' (p. 5).",
    risk_occurrence: 5,
    risk_detection:
      'Visual identification of the material (e.g., PLA is glossier than ABS).',
    risk_detScore: 9,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Add a more prominent warning explaining *why* ABS is required, mentioning that PLA parts will deform and cause printer failure.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 5, No evidence'
  },
  {
    id: 'FC_114',
    history: '',
    structure_processItem: 'Printed Parts',
    structure_processStep: '[Introduction] Print Guidelines (p. 5)',
    structure_workElement: 'Material',
    func_processItem: 'Provide the structural components for the printer.',
    func_processStep: '3D print all non-metal components for the printer.',
    func_workElement:
      'Print parts with the recommended infill percentage (40%) and wall count (4) for required strength.',
    fail_effect:
      '1. Your Plant: N\/A. 2. Ship-to Plant: N\/A. 3. End User: A critical structural part, such as an XY joint or motor mount, cracks or breaks under the stress of belt tension or motion. The printer is non-functional until a new part is printed and installed.',
    fail_severity: 8,
    fail_mode: 'Printed part cracks or breaks.',
    fail_cause:
      'The user prints the parts with insufficient infill or walls (e.g., 15% infill, 2 walls) to save time or material, resulting in a mechanically weak part.',
    risk_prevention: 'Explicit print guidelines provided in the manual (p. 5).',
    risk_occurrence: 6,
    risk_detection: 'No detection method other than failure in service.',
    risk_detScore: 10,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Add a note explaining that these settings are for mechanical strength and should not be reduced.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 5, No evidence'
  },
  {
    id: 'FC_157',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep: '[Wiring] Connecting Ferrules',
    structure_workElement: 'Man',
    func_processItem:
      'Connect all electronic components according to wiring diagrams.',
    func_processStep: 'Secure wire ends into screw terminals.',
    func_workElement:
      'Ensure no stray wire strands are left outside the ferrule or screw terminal.',
    fail_effect:
      '1. Your Plant: Short circuit, component damage. 2. Ship-to Plant: N\/A. 3. End User: A single stray strand of wire from a positive terminal touches the adjacent negative terminal, creating a direct short circuit. This can destroy the controller board, damage the PSU, or pose a fire risk.',
    fail_severity: 8,
    fail_mode: 'Stray wire strand causes short circuit.',
    fail_cause:
      'When inserting a wire into a terminal, the assembler does not ensure all fine copper strands are captured. One strand splays out and touches an adjacent terminal.',
    risk_prevention: 'Good workmanship practices.',
    risk_occurrence: 6,
    risk_detection:
      'Careful visual inspection of all terminal blocks with a magnifying glass and good light after wiring is complete.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Strongly recommend and provide instructions for using wire ferrules, which contain all strands and make shorts nearly impossible.',
    opt_detection:
      "Add to checklist: 'Inspect all screw terminals. Are there any stray wire strands? Use a multimeter to check for shorts between adjacent terminals before power-on.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_158',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep: '[Cable Chain Assembly] Closing Lids',
    structure_workElement: 'Man',
    func_processItem: 'Manage and protect wiring during printer motion.',
    func_processStep:
      'Route wires through the cable chains and close the lids.',
    func_workElement:
      'Ensure wires are not pinched by the snap-on lids of the cable chain.',
    fail_effect:
      '1. Your Plant: Intermittent faults. 2. Ship-to Plant: N\/A. 3. End User: A wire is pinched between the cable chain link and its lid. Over time, motion causes the sharp plastic edge to cut through the insulation, causing a short circuit. This can lead to component damage or intermittent, hard-to-diagnose faults.',
    fail_severity: 8,
    fail_mode: 'Wire pinched in cable chain.',
    fail_cause:
      'The assembler overfills a cable chain link or is not careful when snapping the lid on, trapping a wire.',
    risk_prevention: 'General assembly care.',
    risk_occurrence: 7,
    risk_detection:
      'Visually inspecting each link to ensure all wires are sitting inside the channel before snapping the lid on.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Recommend a maximum fill percentage for the cable chains. Advise the user to lay all wires in the chain first, then go back and close the lids one by one, checking each one.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_171',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep: '[Thermistor Wiring] Wire Routing',
    structure_workElement: 'Man',
    func_processItem:
      'Connect all electronic components according to wiring diagrams.',
    func_processStep: 'Wire the hotend thermistor.',
    func_workElement:
      'Ensure thermistor wires are not shorted to the heater cartridge wires.',
    fail_effect:
      '1. Your Plant: Component damage, safety risk. 2. Ship-to Plant: N\/A. 3. End User: The thermistor wire shorts to the 24V heater line. This sends 24V directly into the sensitive analog input of the controller board, destroying the microcontroller. It can also cause erratic temperature readings, leading to overheating.',
    fail_severity: 8,
    fail_mode: 'Thermistor shorts to heater voltage.',
    fail_cause:
      'The insulation on both the thermistor and heater wires is damaged from being pinched in the heater block, allowing the conductors to touch.',
    risk_prevention: 'Good workmanship practices.',
    risk_occurrence: 4,
    risk_detection:
      'Using a multimeter to check for continuity between the thermistor leads and the heater leads before powering on.',
    risk_detScore: 9,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Recommend using fiberglass sleeving over the thermistor wires near the heater block to provide extra insulation and strain relief.',
    opt_detection:
      'Add a mandatory multimeter check to the pre-flight checklist (p. 135).',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_178',
    history: '',
    structure_processItem: 'Gantry Assembly',
    structure_processStep: '[Squaring] Gantry Squaring',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the gantry, which carries the toolhead.',
    func_processStep: 'Ensure the gantry is perfectly square.',
    func_workElement:
      'Adjust the rear brace (p. 55) and belt tensions (p. 65) to make the gantry assembly square.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The gantry is a parallelogram, not a rectangle. Prints are skewed; circles print as ovals and squares as rhombuses.',
    fail_severity: 8,
    fail_mode: 'Gantry not square after final assembly.',
    fail_cause:
      'The user skips or improperly performs the gantry squaring procedure, failing to adjust the components to achieve squareness before final tightening.',
    risk_prevention:
      "Instructions on pages 53, 55, and 65 all contribute to a square gantry but there is no single 'squaring procedure' step.",
    risk_occurrence: 6,
    risk_detection:
      'Measuring the diagonals of the gantry. The two measurements should be equal.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Create a dedicated 'Gantry Squaring Procedure' page that consolidates all the relevant steps and emphasizes measuring the diagonals as the final verification.",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 53, 55, 65, No evidence'
  },
  {
    id: 'FC_182',
    history: '',
    structure_processItem: 'Gantry Assembly',
    structure_processStep: '[Dual Rail Install] Rail Alignment (p. 47)',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the gantry, which carries the toolhead.',
    func_processStep: 'Mount two linear rails to the X-axis extrusion.',
    func_workElement:
      'Use a specific tightening sequence to ensure rails are parallel.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The two rails are not parallel. The toolhead carriage, which rides on both rails, will bind. This causes jerky motion, high motor load, skipped steps, and very poor print quality.',
    fail_severity: 8,
    fail_mode: 'Dual linear rails are not parallel due to tightening sequence.',
    fail_cause:
      'The assembler tightens all fasteners on one rail, then all fasteners on the second rail. This can pull the extrusion into a slight bow and make the rails non-parallel.',
    risk_prevention:
      "Provision of the 'Centered Rail Installation Guide' tool (p. 47).",
    risk_occurrence: 6,
    risk_detection:
      'Sliding the carriage along the rails after installation to feel for any binding.',
    risk_detScore: 6,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Update the manual with a specific tightening procedure: 'Use the carriage itself as an alignment tool. Snug all fasteners. Move the carriage to one end and tighten the fasteners there. Move to the other end and tighten. Then do the middle.'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 47, No evidence'
  },
  {
    id: 'FC_190',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Latch Install] Install Tension Spring',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the Clockwork extruder mechanism.',
    func_processStep: 'Install the extruder latch and tensioning knob.',
    func_workElement:
      'Install the spring that provides tension to the idler arm.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The extruder cannot grip the filament because there is no tension on the idler arm. The printer will not extrude any plastic. Print fails.',
    fail_severity: 8,
    fail_mode: 'Extruder idler tension spring is forgotten.',
    fail_cause:
      'The assembler overlooks the small spring during the latch assembly.',
    risk_prevention:
      'This component is not clearly shown or called out in the diagram on page 77.',
    risk_occurrence: 7,
    risk_detection:
      'Noticing that the tension knob does nothing and the idler arm is floppy.',
    risk_detScore: 4,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Update the diagram on page 77 to be an exploded view, clearly showing the spring as a separate component that must be installed.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 77 (implied), No evidence'
  },
  {
    id: 'FC_003',
    history: '',
    structure_processItem: 'Voron 2.4 Printer',
    structure_processStep: '[Initial Prep] Tool Check',
    structure_workElement: 'Machine',
    func_processItem:
      'Ensure all required components are available for the build.',
    func_processStep:
      'Verify all required assembly tools are available and in good condition.',
    func_workElement:
      'Hex keys are high quality, correctly sized, and have sharp, unworn edges.',
    fail_effect:
      '1. Your Plant: Inability to complete assembly step, damaged fasteners. 2. Ship-to Plant: N\/A. 3. End User: A low-quality, worn, or rounded hex key cams out and strips the head of a critical fastener (e.g., a grub screw), making it impossible to tighten or remove.',
    fail_severity: 7,
    fail_mode: 'Fastener head stripped by tool.',
    fail_cause:
      'Progressive wear on a low-quality hex key has rounded its corners, reducing engagement area in the fastener socket.',
    risk_prevention: "User's discretion in tool selection.",
    risk_occurrence: 6,
    risk_detection:
      'Feeling for a loose or sloppy fit when inserting the tool into the fastener head.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Recommend a specific brand of high-quality hex keys in the BOM. Include a set of new, correctly sized hex keys in official kits.',
    opt_detection:
      "Add a note in the introduction: 'Use high-quality tools. If a hex key feels loose in a screw, do not apply force. Get a better-fitting key.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_005',
    history: '',
    structure_processItem: 'Printed Parts',
    structure_processStep: '[Part Printing] Printing the parts',
    structure_workElement: 'Environment',
    func_processItem: 'Provide the structural components for the printer.',
    func_processStep: 'Fabricate all non-metal components using a 3D printer.',
    func_workElement:
      'Maintain a stable, high ambient temperature around the part during printing to prevent warping.',
    fail_effect:
      '1. Your Plant: Scrapped part, failed print. 2. Ship-to Plant: N\/A. 3. End User: Large ABS parts (like skirts or motor mounts) lift off the print bed at the corners (warp) due to thermal stress. The parts are dimensionally inaccurate and unusable.',
    fail_severity: 7,
    fail_mode: 'Part warps and lifts off the build plate.',
    fail_cause:
      'The printer lacks an enclosure, or a draft from a door or HVAC vent cools the part unevenly, causing differential shrinkage and warping.',
    risk_prevention:
      'Recommendation to use ABS (p. 5), which implies the need for an enclosure.',
    risk_occurrence: 7,
    risk_detection:
      'Observing the print during the first few hours for any signs of corner lifting.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Explicitly state in the print guidelines that an enclosure is required for printing Voron parts in ABS.',
    opt_detection:
      'Use a time-lapse camera to monitor prints for warping issues.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 5, No evidence'
  },
  {
    id: 'FC_007',
    history: '',
    structure_processItem: 'Printed Parts',
    structure_processStep: '[Part Printing] Printing the parts',
    structure_workElement: 'Material',
    func_processItem: 'Provide the structural components for the printer.',
    func_processStep: 'Fabricate all non-metal components using a 3D printer.',
    func_workElement: 'Filament material is dry and has consistent diameter.',
    fail_effect:
      '1. Your Plant: Print quality issues, failed prints. 2. Ship-to Plant: N\/A. 3. End User: The ABS filament has absorbed moisture from the air. This causes popping and sizzling at the nozzle, leading to very poor surface finish and extremely weak layer adhesion, making the parts brittle and unusable.',
    fail_severity: 7,
    fail_mode: 'Printed parts have poor layer adhesion and are brittle.',
    fail_cause:
      'ABS filament is hygroscopic and was not dried in a filament dryer before use.',
    risk_prevention: 'General community knowledge about printing ABS.',
    risk_occurrence: 6,
    risk_detection:
      'Observing the printing process for steam, popping sounds, or rough surface texture.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Add a note to the 'Print Guidelines' section (p. 5) explicitly recommending that all ABS filament be dried according to manufacturer specs before printing Voron parts.",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_008',
    history: '',
    structure_processItem: 'Voron 2.4 Frame',
    structure_processStep: '[Frame Assembly] Assemble First Corner (p. 12)',
    structure_workElement: 'Man',
    func_processItem:
      "Assembly of a rigid and square foundational structure for the printer's motion system.",
    func_processStep:
      'Secure three aluminum extrusions at a 90-degree corner using an M5x16 BHCS fastener, creating the first vertex of the frame.',
    func_workElement:
      'Apply correct torque to the M5 fastener to achieve required clamping force without stripping threads.',
    fail_effect:
      '1. Your Plant: Rework required, stripped extrusion threads may scrap the part. 2. Ship-to Plant: N\/A. 3. End User: Loose frame joint, loss of frame rigidity, vibration, and poor print quality.',
    fail_severity: 7,
    fail_mode: 'Fastener under-tightened.',
    fail_cause:
      'Assembler applies insufficient torque to the M5 fastener due to fear of stripping the aluminum threads or lack of tactile feedback.',
    risk_prevention:
      'Assembly manual specifies the fastener type (M5x16 BHCS).',
    risk_occurrence: 7,
    risk_detection: 'Manual check for joint tightness after assembly.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Specify a target torque value (e.g., 3-4 Nm) in the assembly instructions and recommend using a torque wrench.',
    opt_detection:
      'Implement a final inspection step to check the torque on all frame fasteners with a calibrated torque wrench.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks:
      "Assembly Manual, p. 12, Assembly Manual, p. 14 'CHECK THE FRAME'"
  },
  {
    id: 'FC_009',
    history: '',
    structure_processItem: 'Voron 2.4 Frame',
    structure_processStep: '[Frame Assembly] Assemble First Corner (p. 12)',
    structure_workElement: 'Material',
    func_processItem:
      "Assembly of a rigid and square foundational structure for the printer's motion system.",
    func_processStep:
      'Secure three aluminum extrusions at a 90-degree corner using an M5x16 BHCS fastener, creating the first vertex of the frame.',
    func_workElement:
      'Low-strength thread lock compound prevents the fastener from loosening due to vibration over time.',
    fail_effect:
      '1. Your Plant: Joint may loosen during subsequent assembly steps, causing alignment issues. 2. Ship-to Plant: N\/A. 3. End User: Frame loses squareness and rigidity over time, leading to degraded print quality, artifacts, and potential binding of the motion system.',
    fail_severity: 7,
    fail_mode: 'Thread lock compound not applied.',
    fail_cause:
      'Assembler overlooks or intentionally skips the instruction to apply low-strength thread lock compound.',
    risk_prevention:
      "Explicit instruction in the manual: 'Use a low strength thread lock compound here.' (p. 12).",
    risk_occurrence: 6,
    risk_detection:
      'Visual inspection for thread locker residue before or during fastener insertion.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Include a small, single-use packet of thread lock compound in the kit, placed in the same bag as the frame screws to act as a physical reminder.',
    opt_detection: 'No feasible detection action. Focus on prevention.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 12, No evidence for detection'
  },
  {
    id: 'FC_013',
    history: '',
    structure_processItem: 'Voron 2.4 Frame',
    structure_processStep: '[Frame Assembly] Final Check',
    structure_workElement: 'Environment',
    func_processItem:
      "Assembly of a rigid and square foundational structure for the printer's motion system.",
    func_processStep: 'Ensure frame remains square and stable after assembly.',
    func_workElement: 'Maintain stable ambient temperature after assembly.',
    fail_effect:
      '1. Your Plant: Rework and re-squaring of frame. 2. Ship-to Plant: N\/A. 3. End User: Frame fasteners loosen over time, causing a loss of rigidity and squareness. Print quality degrades with skewed dimensions and artifacts.',
    fail_severity: 7,
    fail_mode: 'Frame fasteners loosen after thermal cycling.',
    fail_cause:
      'The printer is moved to a location with large temperature swings. Differential thermal expansion between the steel fasteners and aluminum extrusions causes a ratcheting-loosening effect over many heat\/cool cycles.',
    risk_prevention: 'Use of thread lock compound on frame fasteners (p. 12).',
    risk_occurrence: 4,
    risk_detection:
      'Periodic check of frame squareness and fastener tightness as part of a maintenance schedule.',
    risk_detScore: 9,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Recommend using serrated flange bolts or lock washers that provide mechanical resistance to vibrational and thermal loosening.',
    opt_detection:
      "Add a 'First 50 Hours Maintenance' section to the manual, instructing the user to re-check the torque on all critical frame fasteners.",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 12, No evidence'
  },
  {
    id: 'FC_014',
    history: '',
    structure_processItem: 'Voron 2.4 Frame',
    structure_processStep:
      '[Z Axis Linear Rails] Install Z-Axis Linear Rails (p. 16)',
    structure_workElement: 'Man',
    func_processItem:
      'Provide a smooth, precise, and parallel guide system for the Z-axis motion.',
    func_processStep:
      'Secure four linear rails to the four vertical frame extrusions using M3x8 SHCS fasteners.',
    func_workElement:
      "Use the 'Centered Rail Installation Guide' tool to ensure each rail is perfectly centered on its extrusion face.",
    fail_effect:
      "1. Your Plant: Rework required to loosen and realign rails. 2. Ship-to Plant: N\/A. 3. End User: Z-axis motion is not smooth (binding), causing inconsistent layer heights ('Z-wobble') in prints and premature wear on Z-drive components.",
    fail_severity: 7,
    fail_mode: 'Linear rail installed off-center on the extrusion.',
    fail_cause:
      "Assembler does not use the printed 'Centered Rail Installation Guide' and relies on visual alignment.",
    risk_prevention:
      'Provision of a specific tool (Centered Rail Installation Guide) and instructions to use it (p. 16).',
    risk_occurrence: 5,
    risk_detection: 'Visual check using the guide tool.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Redesign the rail or extrusion profile to have a self-centering feature, such as a groove and key.',
    opt_detection:
      'Add a step to use a caliper to measure the distance from the edge of the rail to the edge of the extrusion at both ends.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 16, Assembly Manual, p. 16'
  },
  {
    id: 'FC_018',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep:
      '[Z Drive Assembly] Install Heat Set Inserts (p. 19)',
    structure_workElement: 'Machine',
    func_processItem:
      'Assembly of four identical Z-axis belt drive modules to lift the gantry.',
    func_processStep:
      'Install threaded inserts into the 3D printed Z drive housings using a heated soldering iron.',
    func_workElement:
      'Soldering iron maintains a temperature high enough to melt ABS plastic smoothly without burning it.',
    fail_effect:
      '1. Your Plant: Poor insert retention, damaged printed part (scrap). 2. Ship-to Plant: N\/A. 3. End User: Insert pulls out under screw tension, causing the joint to fail. The Z-drive could fall apart.',
    fail_severity: 7,
    fail_mode: 'Heat set insert has poor retention \/ pulls out easily.',
    fail_cause:
      "Soldering iron temperature is too low, failing to properly melt the plastic and allow it to flow into the insert's knurls.",
    risk_prevention:
      'General knowledge and community support regarding soldering iron use.',
    risk_occurrence: 6,
    risk_detection:
      'Tugging on the screw after installation (destructive test) or waiting for it to fail under load.',
    risk_detScore: 9,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Add a section to the manual specifying a recommended temperature range for installing heat-set inserts into ABS (e.g., 240-260°C).',
    opt_detection: 'No feasible non-destructive detection. Prevention is key.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_021',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep:
      '[Z Belt Drive & Stepper] Assemble Pulley to Stepper (p. 19)',
    structure_workElement: 'Man',
    func_processItem:
      'Assembly of four identical Z-axis belt drive modules to lift the gantry.',
    func_processStep:
      'Secure a GT2 16T pulley onto the Z-axis stepper motor shaft.',
    func_workElement:
      'Align one of the two grub screws with the flat face of the D-shaft for maximum holding force.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: Reduced holding force on the pulley. More likely to slip on the motor shaft under load, causing a tilted gantry and failed print.',
    fail_severity: 7,
    fail_mode: 'Grub screw not aligned with D-shaft flat.',
    fail_cause:
      'Assembler tightens grub screws without checking their rotational alignment relative to the flat on the motor shaft.',
    risk_prevention:
      'This is considered standard practice but is not explicitly called out in the manual.',
    risk_occurrence: 7,
    risk_detection: 'Visual inspection before tightening the grub screws.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Update the diagram on page 19 to explicitly show a cross-section of the shaft and pulley, with an arrow pointing to the grub screw on the flat.',
    opt_detection: 'No feasible detection after assembly without disassembly.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_022',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep:
      '[Belt Drive Shaft Assembly] Assemble Shaft Components (p. 20)',
    structure_workElement: 'Material',
    func_processItem:
      'Assembly of four identical Z-axis belt drive modules to lift the gantry.',
    func_processStep:
      'Assemble a drive shaft with two pulleys (80T and 20T), three bearings, and shims.',
    func_workElement:
      '625 bearings are correctly sized to provide a slip fit onto the shaft, allowing free rotation.',
    fail_effect:
      '1. Your Plant: Assembly is difficult or impossible. Force may damage bearings or printed parts. 2. Ship-to Plant: N\/A. 3. End User: Z-drive motion is rough or binding, causing Z-banding artifacts in prints. Increased wear and potential motor failure.',
    fail_severity: 7,
    fail_mode: 'Bearings are a press-fit \/ too tight on the shaft.',
    fail_cause:
      'Incoming material variation: the outer diameter of the shaft is oversized, or the inner diameter of the 625 bearings is undersized.',
    risk_prevention: 'Component sourcing from reliable vendors (implicit).',
    risk_occurrence: 5,
    risk_detection:
      'Test fitting the components at the start of the assembly step.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Implement incoming quality control (IQC) to sample and measure critical dimensions of shafts and bearings.',
    opt_detection:
      "Add a note to the manual: 'Bearings should slide onto the shaft smoothly. If they are tight, check component dimensions or lightly sand the shaft.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_028',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep: '[Motor Tension] Tension Z-Drive Belts (p. 27)',
    structure_workElement: 'Man',
    func_processItem: 'Mount the four Z-drive assemblies to the frame.',
    func_processStep:
      'Secure the motor assemblies and apply tension to the Z-drive belts by closing a tensioner latch.',
    func_workElement:
      'Ensure the belt tensioner latch sits flush with the frame, indicating it is fully closed and tension is properly applied.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: Insufficient belt tension. The belt may slip on the pulleys, causing a loss of Z-position on one corner and a tilted gantry. Print failure.',
    fail_severity: 7,
    fail_mode: 'Belt tensioner latch not fully closed.',
    fail_cause:
      'The belt is too long, there is an obstruction, or the assembler does not apply enough force to fully close the latch and assumes it is closed.',
    risk_prevention:
      "Instruction in manual: 'It should sit flush with the frame.' (p. 27).",
    risk_occurrence: 6,
    risk_detection: 'Visual and tactile check to confirm the latch is flush.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Design the latch with a positive 'click' or detent feature that provides clear feedback when it is fully engaged.",
    opt_detection:
      'Add an instruction to use a straight edge across the latch and frame to verify it is perfectly flush.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 27, Assembly Manual, p. 27'
  },
  {
    id: 'FC_029',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep: '[Motor Tension] Secure Motor Assembly (p. 27)',
    structure_workElement: 'Man',
    func_processItem: 'Mount the four Z-drive assemblies to the frame.',
    func_processStep:
      'Secure the motor assemblies and apply tension to the Z-drive belts by closing a tensioner latch.',
    func_workElement:
      'Tighten the M5 mounting bolts after the tensioner latch has been closed to lock the motor assembly in place.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The motor assembly is not secure and can shift, causing a loss of belt tension over time. This leads to Z-axis slippage and print failure.',
    fail_severity: 7,
    fail_mode: 'M5 bolts tightened before closing the tensioner.',
    fail_cause:
      'Assembler tightens the M5 bolts prematurely, preventing the tensioning mechanism from moving the motor and applying tension to the belt.',
    risk_prevention:
      'The sequence of steps in the manual shows closing the tensioner first (top of page), then tightening the bolts (bottom of page).',
    risk_occurrence: 7,
    risk_detection:
      'Discovered when the tensioner latch is hard or impossible to close.',
    risk_detScore: 4,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Combine the two instructions into a single, numbered list: '1. Close the belt tensioner latch. 2. NOW, tighten the M5 bolts.'",
    opt_detection:
      'Add a check to ensure the belt is taut after tightening the bolts. A frequency measurement app could be recommended to check tension.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 27, No evidence'
  },
  {
    id: 'FC_031',
    history: '',
    structure_processItem: 'Build Plate Assembly',
    structure_processStep:
      '[Heater & Thermal Fuse] Apply Heater to Build Plate (p. 31)',
    structure_workElement: 'Man',
    func_processItem: 'Provide a heated, flat surface for 3D printing.',
    func_processStep:
      'Adhere the Keenovo silicone heater to the underside of the aluminum build plate.',
    func_workElement:
      'Apply the heater smoothly and evenly, ensuring no air bubbles are trapped between the heater and the plate.',
    fail_effect:
      '1. Your Plant: Rework is difficult\/impossible without destroying the heater. 2. Ship-to Plant: N\/A. 3. End User: Trapped air bubbles create insulated spots, leading to uneven heating of the build plate. This can cause prints to warp. The heater may also overheat and fail prematurely in those spots.',
    fail_severity: 7,
    fail_mode: 'Air bubbles trapped under silicone heater.',
    fail_cause:
      'The assembler applies the heater unevenly, failing to use a squeegee or roller to press it down from the center outwards.',
    risk_prevention:
      'No specific instruction on application technique in the manual.',
    risk_occurrence: 7,
    risk_detection:
      'Visual and tactile inspection of the heater surface after application.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Add a detailed instruction block on page 31: 'Clean the plate with alcohol. Start from one edge and use a plastic card or roller to apply the heater slowly, pushing out any air bubbles as you go.'",
    opt_detection:
      'Instruct the user to shine a light at a low angle across the heater surface to make bubbles more visible.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_036',
    history: '',
    structure_processItem: 'Build Plate Assembly',
    structure_processStep: '[Z Endstop Install] Position Endstop (p. 36)',
    structure_workElement: 'Man',
    func_processItem:
      'Provide a physical trigger mechanism for the Z-axis endstop switch.',
    func_processStep: 'Install the Z endstop assembly under the build plate.',
    func_workElement:
      'Position the endstop so that the pin does not touch the heated bed, preventing heat transfer.',
    fail_effect:
      '1. Your Plant: Inconsistent probing results during testing. 2. Ship-to Plant: N\/A. 3. End User: Heat from the bed transfers up the metal pin, causing it to expand. This thermal expansion changes the Z=0 position as the bed heats up, leading to inconsistent first layers and failed prints.',
    fail_severity: 7,
    fail_mode: 'Endstop pin touches the heated bed.',
    fail_cause:
      'Assembler positions the endstop assembly too close to the build plate, allowing the pin to make physical contact.',
    risk_prevention:
      "Explicit instruction: '...please make sure that the pin is not touching the bed.' (p. 36).",
    risk_occurrence: 6,
    risk_detection:
      'Visual inspection, using a flashlight to check for a gap between the pin and the bed.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Redesign the endstop housing or pin to make it physically shorter, increasing the default clearance.',
    opt_detection:
      'Instruct the user to slide a piece of paper between the pin and the bed to ensure there is a gap.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 36, No evidence'
  },
  {
    id: 'FC_037',
    history: '',
    structure_processItem: 'AB Drive Modules',
    structure_processStep:
      '[Front Idler Assembly] Assemble Bearing Stack (p. 40)',
    structure_workElement: 'Man',
    func_processItem:
      'Assembly of the A and B motor drive modules for the gantry.',
    func_processStep:
      'Assemble the front idler bearing stack, which includes F695 bearings and M5 shims.',
    func_workElement:
      'Install the components in the correct order and orientation inside the printed part.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: Incorrectly stacked bearings or missing shims cause the belts to be misaligned. The belt will rub on the flanges of the bearings\/pulleys, causing premature belt wear, dust, and potential for belt failure.',
    fail_severity: 7,
    fail_mode: 'Bearing stack assembled incorrectly (e.g., missing shim).',
    fail_cause:
      "The assembly is described as 'a little tricky to install,' and the assembler may drop a shim or install components in the wrong order.",
    risk_prevention: 'Diagrams on pages 40 and 41 show the correct stack-up.',
    risk_occurrence: 7,
    risk_detection:
      'Visual inspection of the bearing stack before the final bolt is installed.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Provide a 3D printable assembly jig that holds the components in the correct order before they are installed into the housing.',
    opt_detection:
      'Add an instruction to use a pick or small tool to verify the presence and position of each shim before closing the assembly.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 40-41, No evidence'
  },
  {
    id: 'FC_041',
    history: '',
    structure_processItem: 'Gantry Assembly',
    structure_processStep:
      '[Left\/Right XY Joint Assembly] Assemble Bearing Stacks (p. 48-49)',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the gantry, which carries the toolhead.',
    func_processStep:
      'Assemble the left and right XY joints which hold the gantry extrusions together.',
    func_workElement:
      'Correctly assemble the complex bearing and idler stacks that guide the CoreXY belts.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: Incorrect belt path due to misassembled bearing stack. The belt will rub on flanges or the printed part, causing excessive wear, debris, and eventual belt failure. Poor motion quality.',
    fail_severity: 7,
    fail_mode: 'XY joint bearing stack assembled incorrectly.',
    fail_cause:
      'Assembler misinterprets the exploded view diagram and installs bearings, shims, or idlers in the wrong order or orientation.',
    risk_prevention:
      "Instruction to 'See previous examples for how to assemble these' and diagrams provided (p. 48-49).",
    risk_occurrence: 7,
    risk_detection: 'Visual inspection during assembly.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Create a more detailed, step-by-step diagram for the XY joint stack-up, as it is one of the most complex in the build.',
    opt_detection:
      'After assembly, route a string along the intended belt path to visually verify that it runs true and does not rub on anything.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 48-49, No evidence'
  },
  {
    id: 'FC_047',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Pivot Block] Install Pivot Block (p. 63)',
    structure_workElement: 'Man',
    func_processItem:
      'Assembly of the Afterburner toolhead, which holds the hotend and extruder.',
    func_processStep: 'Install the pivot block to the carriage.',
    func_workElement:
      'Leave the mounting screws loose to allow for rail alignment before final tightening.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The dual rails are pulled out of parallel when the pivot block is tightened down, as it connects to both carriages. This introduces binding into the X-axis motion.',
    fail_severity: 7,
    fail_mode: 'Pivot block screws tightened prematurely.',
    fail_cause:
      "Assembler misses the large warning 'DO NOT TIGHTEN (YET)' and tightens the screws by habit.",
    risk_prevention: 'Explicit warning in manual (p. 63).',
    risk_occurrence: 6,
    risk_detection: 'Failure to align the rail in the next step.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Change the heading to red and use a larger font for the warning to increase visibility.',
    opt_detection:
      'Add a check to ensure the pivot block can wiggle before proceeding to the rail alignment step.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 63, No evidence'
  },
  {
    id: 'FC_048',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[A\/B Belt Routing] Cut Belts (p. 64-65)',
    structure_workElement: 'Man',
    func_processItem:
      'Assembly of the Afterburner toolhead, which holds the hotend and extruder.',
    func_processStep: 'Route the A and B belts through the CoreXY motion path.',
    func_workElement:
      'Cut both the A and B belts to the exact same length to ensure a square gantry.',
    fail_effect:
      '1. Your Plant: Wasted belt material. 2. Ship-to Plant: N\/A. 3. End User: Belts of unequal length will cause the gantry to be skewed when tensioned. Prints will be dimensionally inaccurate (skewed).',
    fail_severity: 7,
    fail_mode: 'A and B belts cut to different lengths.',
    fail_cause:
      'Assembler cuts the belts independently without using the first belt as a guide for the second, as recommended.',
    risk_prevention:
      "Best practice recommendation: 'cut both XY belts the same length. You can pre-run one length and then cut the other using it as your guide.' (p. 64).",
    risk_occurrence: 6,
    risk_detection: 'Measuring the two belts against each other after cutting.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Provide a specific required length (e.g., 2500mm) in the manual, and instruct the user to measure both with a tape measure.',
    opt_detection:
      'After cutting, instruct the user to hold both ends together and verify the other ends are perfectly aligned.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 64, No evidence'
  },
  {
    id: 'FC_052',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Motor Plate] Install Drive Pinion (p. 70)',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the Clockwork extruder mechanism.',
    func_processStep: 'Install the extruder motor and drive pinion.',
    func_workElement:
      'Space the drive pinion 3.2mm from the main body of the stepper motor.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: Incorrect pinion spacing causes misalignment with the filament path and the main drive gear. This can lead to filament grinding, inconsistent extrusion, and extruder jams.',
    fail_severity: 7,
    fail_mode: 'Drive pinion spacing incorrect.',
    fail_cause:
      'Assembler guesses the spacing instead of measuring, or measures incorrectly.',
    risk_prevention:
      "Explicit instruction with a dimensional diagram: 'It should be spaced 3.2mm from the main body...' (p. 70).",
    risk_occurrence: 6,
    risk_detection: 'Measurement with calipers or a ruler during assembly.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Provide a 3D printable gauge tool that sets the 3.2mm spacing automatically.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 70, Assembly Manual, p. 70'
  },
  {
    id: 'FC_054',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep:
      '[Motor Plate Alignment] Adjust Motor Position (p. 71)',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the Clockwork extruder mechanism.',
    func_processStep: 'Align the motor plate for proper gear mesh.',
    func_workElement:
      'Adjust the motor position in its slot to ensure the drive gears mesh smoothly without being too tight (binding) or too loose (backlash).',
    fail_effect:
      '1. Your Plant: Premature gear wear during testing. 2. Ship-to Plant: N\/A. 3. End User: Gear mesh is too tight, causing binding, high motor temps, and inconsistent extrusion. Gear mesh is too loose, causing backlash, clicking noises, and inaccurate extrusion (blobs and gaps).',
    fail_severity: 7,
    fail_mode: 'Improper drive gear mesh.',
    fail_cause:
      'Assembler fails to properly adjust the motor position, setting it at one extreme of the slot without checking for smooth gear engagement.',
    risk_prevention:
      'Instruction explaining the adjustable motor position (p. 71). Drive Shaft Check step on page 74.',
    risk_occurrence: 6,
    risk_detection:
      "The 'DRIVE SHAFT CHECK' on p. 74 where the user is instructed to feel for smooth engagement.",
    risk_detScore: 6,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Provide a more specific guideline for setting the mesh, such as the 'paper method' (placing a strip of paper between gears while tightening).",
    opt_detection:
      'Instruct the user to listen for clicking (too loose) or feel for notchiness (too tight) when turning the gears by hand.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 71, Assembly Manual, p. 74'
  },
  {
    id: 'FC_060',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Hot End Install] Install Bowden Tube (p. 81)',
    structure_workElement: 'Man',
    func_processItem:
      'Assembly of the Afterburner toolhead, which holds the hotend and extruder.',
    func_processStep: 'Install the hot end and part cooling fan.',
    func_workElement:
      'Insert a short piece of Bowden (PTFE) tube to guide the filament from the extruder to the hotend.',
    fail_effect:
      '1. Your Plant: Extruder jams during testing. 2. Ship-to Plant: N\/A. 3. End User: The filament path is unconstrained between the extruder gears and the hotend. Flexible filaments will buckle and jam immediately. Rigid filaments may also jam, causing failed prints.',
    fail_severity: 7,
    fail_mode: 'Bowden tube guide is forgotten.',
    fail_cause:
      'Assembler overlooks the small, clear Bowden tube in the diagram and completes the assembly without it.',
    risk_prevention:
      'Diagram on page 81 clearly shows the Bowden Tube component.',
    risk_occurrence: 6,
    risk_detection:
      'Visual inspection of the filament path before closing the assembly.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Use a brightly colored (e.g., Capricorn) PTFE tube to make the component more visually prominent in the kit and diagrams.',
    opt_detection:
      'Add an instruction to shine a light down the filament path to verify the white\/blue tube is visible.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 81, No evidence'
  },
  {
    id: 'FC_076',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep: '[Endstop Wiring] Wire Endstops (p. 134)',
    structure_workElement: 'Man',
    func_processItem:
      'Connect all electronic components according to wiring diagrams.',
    func_processStep: 'Wire the X and Y endstop microswitches.',
    func_workElement:
      'Wire the switches in the Normally Closed (NC) configuration for safety.',
    fail_effect:
      '1. Your Plant: Failsafe is disabled. 2. Ship-to Plant: N\/A. 3. End User: The endstop is wired in Normally Open (NO) configuration. If a wire breaks or a connection comes loose, the controller will not detect the fault. When the printer tries to home, it will not see the endstop signal and will crash the gantry into the frame, causing potential damage.',
    fail_severity: 7,
    fail_mode:
      'Endstop wired as Normally Open (NO) instead of Normally Closed (NC).',
    fail_cause:
      'Assembler connects the wire to the NO terminal on the microswitch instead of the NC terminal.',
    risk_prevention:
      "Explicit recommendation in the manual: '...it is safer to wire in the NC configuration...' (p. 134).",
    risk_occurrence: 6,
    risk_detection:
      "Checking the endstop status in the printer's software interface before attempting to home.",
    risk_detScore: 6,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Source microswitches that only have NC and C terminals, or provide a pre-wired harness.',
    opt_detection:
      "Add to the Klipper Config checklist (p. 135) a step to query the endstop status and verify it shows 'triggered' when not pressed and 'open' when pressed.",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 134, No evidence'
  },
  {
    id: 'FC_079',
    history: '',
    structure_processItem: 'Software and Firmware',
    structure_processStep: '[Firmware] Flashing Controller Board',
    structure_workElement: 'Man',
    func_processItem: "Install and configure the printer's control software.",
    func_processStep:
      'Load the Klipper firmware onto the main controller board (SKR).',
    func_workElement:
      'Use the correct firmware binary that matches the specific hardware version of the controller board.',
    fail_effect:
      '1. Your Plant: Board is non-responsive. 2. Ship-to Plant: N\/A. 3. End User: The board does not boot or connect to the Raspberry Pi. The printer is inoperable. User may mistakenly believe the board is defective.',
    fail_severity: 7,
    fail_mode: 'Incorrect firmware flashed to controller board.',
    fail_cause:
      'The user downloads or compiles a firmware binary for the wrong microcontroller (e.g., for an SKR 1.3 board but they have a 1.4 board), resulting in a non-functional board.',
    risk_prevention: 'Klipper documentation and configuration guides.',
    risk_occurrence: 6,
    risk_detection:
      'Verifying the board model number printed on the PCB before selecting the firmware file.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Provide a pre-compiled, known-good firmware.bin file for each of the most common controller boards in the Voron GitHub repository.',
    opt_detection:
      "Add a troubleshooting step: 'If the board will not connect, double-check that you have selected the correct microcontroller model in your Klipper configuration.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 135, No evidence'
  },
  {
    id: 'FC_085',
    history: '',
    structure_processItem: 'Voron 2.4 Printer',
    structure_processStep: '[Pre-Flight Checklist] Klipper Config (p. 135)',
    structure_workElement: 'Man',
    func_processItem: 'Final commissioning of the assembled printer.',
    func_processStep:
      'Configure the Klipper firmware and verify all components are working correctly.',
    func_workElement:
      'Verify that stepper motors are turning in the correct direction.',
    fail_effect:
      '1. Your Plant: N\/A. 2. Ship-to Plant: N\/A. 3. End User: A motor moves in the wrong direction. During the first homing attempt, instead of moving towards the endstop, the axis moves away from it and crashes into the opposite side of the frame, causing damage.',
    fail_severity: 7,
    fail_mode: 'Motor direction is reversed.',
    fail_cause:
      'The motor was wired incorrectly (one coil reversed), or the direction pin in the Klipper configuration file is set incorrectly.',
    risk_prevention: 'Reference to the Klipper configuration guide (p. 135).',
    risk_occurrence: 7,
    risk_detection:
      'Manually commanding a small, slow move from the software interface and visually verifying it moves in the correct direction before ever attempting to home.',
    risk_detScore: 5,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Provide a pre-configured, known-good Klipper configuration file for the specific electronics combination.',
    opt_detection:
      "Add a bolded, critical step to the Pre-Flight Checklist: 'WARNING: Before homing for the first time, command a small +10mm move on each axis (X, Y, Z) and verify it moves in the correct direction. If not, invert the direction pin in your config.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 135, No evidence'
  },
  {
    id: 'FC_090',
    history: '',
    structure_processItem: 'Build Plate Assembly',
    structure_processStep: '[Build Plate Install] Mount Build Plate (p. 35)',
    structure_workElement: 'Man',
    func_processItem: 'Provide a heated, flat surface for 3D printing.',
    func_processStep:
      'Mount the build plate to the bed extrusions using a 3-point mounting system.',
    func_workElement:
      'Tighten the M4 knurled nuts to secure the bed without inducing stress or warping.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: Overtightening the mounting nuts induces a warp or bow in the build plate. It is impossible to get a good first layer across the entire surface, as the nozzle will be too close in some areas and too far in others. Constant failed prints.',
    fail_severity: 7,
    fail_mode: 'Build plate warped by mounting hardware.',
    fail_cause:
      'The assembler excessively tightens the M4 knurled nuts, bending the aluminum build plate.',
    risk_prevention:
      'The design uses a 3-point mount, which helps prevent warping compared to a 4-point mount (as noted on p. 35).',
    risk_occurrence: 6,
    risk_detection:
      'Using a straight edge across the build plate after installation to check for flatness.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Incorporate springs into the bed mounting system to provide consistent tension and make overtightening less likely to cause warping.',
    opt_detection:
      'Instruct the user to run the bed leveling probe routine and check the resulting bed mesh visualization. A warped bed will be clearly visible in the software.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 35, No evidence'
  },
  {
    id: 'FC_095',
    history: '',
    structure_processItem: 'Skirts',
    structure_processStep: '[Electronics Cooling Assembly] Secure Fans (p. 96)',
    structure_workElement: 'Man',
    func_processItem: 'Provide cooling for the electronics.',
    func_processStep: 'Assemble the electronics cooling fan module.',
    func_workElement: 'Use VHB tape to secure the fans to the printed bracket.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The fan detaches from the bracket and falls into the electronics bay. It may jam into another fan or short out exposed contacts on a circuit board, causing damage.',
    fail_severity: 7,
    fail_mode: 'Fan detaches from bracket.',
    fail_cause:
      'The assembler does not clean the surfaces before applying the VHB tape, leading to poor adhesion.',
    risk_prevention: 'Instruction to use VHB tape (p. 96).',
    risk_occurrence: 6,
    risk_detection: 'No detection method other than failure in service.',
    risk_detScore: 10,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Add instruction to clean fan and bracket with isopropyl alcohol before applying tape. Alternatively, redesign the bracket to secure the fans with screws instead of tape.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 96, No evidence'
  },
  {
    id: 'FC_096',
    history: '',
    structure_processItem: 'Skirts',
    structure_processStep:
      '[Mounting Electronics Cooling] Install Fan Module (p. 97)',
    structure_workElement: 'Man',
    func_processItem: 'Provide cooling for the electronics.',
    func_processStep:
      'Mount the electronics cooling fan module into the frame.',
    func_workElement: 'Orient the fans to blow air onto the electronics.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The fans are installed backwards and are attempting to suck air away from the electronics instead of blowing on them. The stepper motor drivers on the controller board will overheat during a print, causing them to shut down temporarily. This results in layer shifts and failed prints.',
    fail_severity: 7,
    fail_mode: 'Cooling fans installed backwards.',
    fail_cause:
      'The assembler does not check the airflow direction arrows on the fan housing and installs the entire module backwards.',
    risk_prevention: 'Diagram on page 97 shows the correct orientation.',
    risk_occurrence: 7,
    risk_detection:
      'Feeling for airflow direction after the fans are powered on.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Add a note to the manual: 'Check the arrows on the side of the fans to ensure they are pointing towards the electronics before mounting.'",
    opt_detection:
      "Add to the Pre-Flight Checklist: 'Power on electronics fans. Verify air is blowing ONTO the controller boards.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 97, No evidence'
  },
  {
    id: 'FC_099',
    history: '',
    structure_processItem: 'Voron 2.4 Frame',
    structure_processStep: '[Frame Assembly] Building Square (p. 13)',
    structure_workElement: 'Environment',
    func_processItem:
      "Assembly of a rigid and square foundational structure for the printer's motion system.",
    func_processStep:
      'Assemble the frame extrusions into a square and rigid cube.',
    func_workElement:
      'Assemble the frame on a flat and level reference surface.',
    fail_effect:
      '1. Your Plant: Difficult to diagnose squareness issues. 2. Ship-to Plant: N\/A. 3. End User: The frame is assembled with a built-in twist because the work surface was not flat. This causes binding in the Z-axis and makes gantry alignment impossible, leading to poor print quality.',
    fail_severity: 7,
    fail_mode: 'Frame assembled with a twist.',
    fail_cause:
      'The assembler builds the frame on an uneven surface (e.g., a warped workbench), and the frame conforms to the twist of the surface as it is tightened.',
    risk_prevention:
      "Recommendation in the manual to 'build this frame on a glass surface' (p. 13).",
    risk_occurrence: 6,
    risk_detection:
      'Checking for wobble by pressing on opposite corners of the completed frame after placing it on a known flat surface (like a granite countertop).',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Emphasize the importance of a flat surface by adding a warning icon next to the instruction.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 13, No evidence'
  },
  {
    id: 'FC_103',
    history: '',
    structure_processItem: 'Gantry Assembly',
    structure_processStep: '[XY Joints] Attach XY Joints to Gantry (p. 56)',
    structure_workElement: 'Man',
    func_processItem: 'Connect the X and Y gantry extrusions.',
    func_processStep:
      'Secure the XY joint blocks to the ends of the gantry extrusions.',
    func_workElement:
      'Ensure the extrusions are fully seated in the joints before tightening fasteners.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The gantry is too wide or too narrow because an extrusion was not fully seated. This will cause the gantry to bind on the Z-axis linear rails, leading to poor Z motion and failed prints.',
    fail_severity: 7,
    fail_mode: 'Gantry assembled to incorrect width\/depth.',
    fail_cause:
      'An extrusion is not fully inserted into the pocket of the XY joint when the assembler tightens the screws, leaving a small gap.',
    risk_prevention: 'Diagrams show the assembled state (p. 56).',
    risk_occurrence: 6,
    risk_detection:
      'Visual inspection for gaps between the extrusion end and the joint pocket.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Add a note: 'Ensure the extrusion is pressed firmly into the joint and there is no gap before you tighten the screws.'",
    opt_detection:
      'After gantry assembly, instruct user to measure the overall width and depth and compare against nominal dimensions provided in the manual.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 56, No evidence'
  },
  {
    id: 'FC_106',
    history: '',
    structure_processItem: 'Belting Z Drive',
    structure_processStep:
      '[Mounting Z Blocks to Carriages] Attach Belt to Gantry (p. 87)',
    structure_workElement: 'Material',
    func_processItem:
      'Synchronize the four Z-drives using a single continuous belt.',
    func_processStep:
      'Attach the Z-belt to the gantry at four points using Z-joint blocks.',
    func_workElement:
      'The GT2 belt must have consistent tooth pitch and width.',
    fail_effect:
      '1. Your Plant: N\/A. 2. Ship-to Plant: N\/A. 3. End User: The Z-axis motion is inconsistent. The gantry may move slightly different distances at each corner per motor revolution, leading to the gantry going out of level over time. This causes print failures, especially on tall prints.',
    fail_severity: 7,
    fail_mode: 'Inconsistent Z-motion.',
    fail_cause:
      'The Z-drive belt is of poor quality, with inconsistent tooth spacing. Even though the pulleys are synchronized, the linear travel produced is not.',
    risk_prevention:
      'Sourcing quality components (e.g., Gates belts) as recommended in the bill of materials.',
    risk_occurrence: 4,
    risk_detection: 'No simple detection method.',
    risk_detScore: 10,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Emphasize in the sourcing guide that high-quality, brand-name belts are critical for the Z-axis.',
    opt_detection:
      'Implement a periodic re-leveling of the gantry (e.g., Quad Gantry Leveling routine in Klipper) to compensate for minor belt inconsistencies.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_109',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep: '[Wiring] Connecting Stepper Motors',
    structure_workElement: 'Man',
    func_processItem:
      'Connect all electronic components according to wiring diagrams.',
    func_processStep:
      'Connect the stepper motor wires to the controller board.',
    func_workElement:
      'Connect the two phases (A and B) of the motor to the correct pins (1A, 1B, 2A, 2B).',
    fail_effect:
      '1. Your Plant: Motor vibrates but does not turn. 2. Ship-to Plant: N\/A. 3. End User: The motor will vibrate, buzz, or move erratically, but will not rotate correctly. The axis is non-functional.',
    fail_severity: 7,
    fail_mode: 'Motor phase wires crossed.',
    fail_cause:
      'The assembler crosses the wires for one phase with the wires for the other phase (e.g., wires A and B are swapped).',
    risk_prevention: 'Wiring diagrams for motors (p. 132-133).',
    risk_occurrence: 6,
    risk_detection:
      "The motor's behavior upon the first move command is the detection.",
    risk_detScore: 5,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Provide pre-made, keyed wiring harnesses for the motors that prevent incorrect connection at the controller board.',
    opt_detection:
      "Add a diagnostic step: 'If a motor buzzes but doesn't turn, the two middle wires on its connector may need to be swapped.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 132-133, No evidence'
  },
  {
    id: 'FC_110',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Hot End Install 2] Install Fans (p. 82)',
    structure_workElement: 'Man',
    func_processItem:
      'Melt and extrude filament, and cool the printed plastic.',
    func_processStep:
      'Install the hotend cooling fan and the part cooling fan.',
    func_workElement:
      'Orient the fans to blow in the correct direction (hotend fan blows ONTO heatsink, part fan blows ONTO print).',
    fail_effect:
      "1. Your Plant: Failed test prints. 2. Ship-to Plant: N\/A. 3. End User: The hotend cooling fan is installed backwards. It does not cool the heatsink, leading to 'heat creep'. Filament melts too high up in the hotend, causing it to swell and jam. The printer will constantly jam after a few minutes of printing.",
    fail_severity: 7,
    fail_mode: 'Hotend cooling fan installed backwards.',
    fail_cause:
      'The assembler does not check the airflow direction arrow on the fan and installs it blowing away from the heatsink instead of towards it.',
    risk_prevention: 'General knowledge of 3D printer assembly.',
    risk_occurrence: 7,
    risk_detection: 'Feeling for airflow after powering on the fan.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Add a specific callout in the diagram on page 82 showing the direction of airflow for both fans.',
    opt_detection:
      "Add a checklist item: 'Turn on the hotend fan. Verify air is blowing through the heatsink fins, not being sucked out.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_112',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Wiring] Hotend Heater and Thermistor',
    structure_workElement: 'Man',
    func_processItem: 'Melt and extrude filament.',
    func_processStep: 'Wire the hotend heater cartridge and thermistor.',
    func_workElement:
      'Secure the thermistor in the heater block with its retaining screw.',
    fail_effect:
      "1. Your Plant: Temperature reading errors. 2. Ship-to Plant: N\/A. 3. End User: The thermistor retaining screw is overtightened, crushing the delicate glass bead or damaging the wires. This causes an open circuit. The printer will report a 'Thermal Runaway' error and shut down, as it cannot read the hotend temperature.",
    fail_severity: 7,
    fail_mode: 'Thermistor wire damaged.',
    fail_cause:
      'The assembler overtightens the small screw used to hold the thermistor in place, severing the wire or crushing the sensor.',
    risk_prevention: 'General caution when handling delicate components.',
    risk_occurrence: 6,
    risk_detection:
      'Checking the temperature reading in the software interface after assembly.',
    risk_detScore: 5,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Use a cartridge-style thermistor which is more robust and less prone to damage during installation. Add a note: 'Gently tighten the thermistor screw until it just touches the wires. Do not crush.'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_116',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Wiring] Thermistor Wiring',
    structure_workElement: 'Man',
    func_processItem: 'Melt and extrude filament.',
    func_processStep: 'Wire the hotend heater cartridge and thermistor.',
    func_workElement:
      'Route the delicate thermistor wires without sharp bends or pinching.',
    fail_effect:
      "1. Your Plant: Intermittent temperature readings. 2. Ship-to Plant: N\/A. 3. End User: The thermistor wire has an internal break from being pinched or bent too sharply during assembly. This causes intermittent connection, leading to erratic temperature readings and 'Thermal Runaway' errors mid-print. Very difficult to diagnose.",
    fail_severity: 7,
    fail_mode: 'Intermittent open circuit in thermistor wire.',
    fail_cause:
      'The assembler pinches the thermistor wire under a screw head or bends it at a very sharp angle, causing an internal fracture of the conductor.',
    risk_prevention: 'General care in assembly.',
    risk_occurrence: 5,
    risk_detection:
      'Wiggling the thermistor wire while observing the temperature reading in the software to check for fluctuations.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Use thermistors with more robust, silicone-insulated wires. Redesign printed parts to provide a clear, rounded channel for the thermistor wire to prevent pinching.',
    opt_detection:
      "Add a troubleshooting step: 'If you get random thermal errors, gently wiggle the thermistor wires at the hotend. If the temperature reading jumps around, the wire is damaged.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_129',
    history: '',
    structure_processItem: 'Build Plate Assembly',
    structure_processStep: '[Z Endstop Pin] Solder Connector (p. 34)',
    structure_workElement: 'Man',
    func_processItem:
      'Provide a physical trigger mechanism for the Z-axis endstop switch.',
    func_processStep: 'Attach a JST connector to the microswitch.',
    func_workElement:
      'Create a solid, reliable solder joint between the wire and the switch terminal.',
    fail_effect:
      "1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: A 'cold' solder joint fails due to vibration. The Z-endstop circuit becomes open. The printer cannot home the Z-axis and may report an error, or crash the nozzle into the bed if wired NO.",
    fail_severity: 7,
    fail_mode: 'Cold solder joint on microswitch.',
    fail_cause:
      'Assembler has poor soldering skills, using insufficient heat or failing to clean the surfaces, resulting in a mechanically weak and high-resistance solder joint.',
    risk_prevention: 'Option to solder is provided (p. 34).',
    risk_occurrence: 5,
    risk_detection:
      'Visual inspection of the solder joint (should be shiny and concave). Tugging on the wire to check mechanical strength.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Provide a pre-wired microswitch with a JST connector already attached to eliminate the need for soldering.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 34, No evidence'
  },
  {
    id: 'FC_138',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep:
      '[Belt Drive Modules] Assembling all four modules (p. 21)',
    structure_workElement: 'Man',
    func_processItem:
      'Assembly of four identical Z-axis belt drive modules to lift the gantry.',
    func_processStep: 'Assemble all four Z drive modules.',
    func_workElement:
      'Follow the same assembly procedure for all four identical modules.',
    fail_effect:
      '1. Your Plant: Extensive rework. 2. Ship-to Plant: N\/A. 3. End User: The user makes a mistake on the first module (e.g., forgets a shim) and then repeats the exact same mistake on the other three modules. All four Z-drives are faulty and require simultaneous disassembly and rework.',
    fail_severity: 7,
    fail_mode: 'Mistake is replicated across all four identical assemblies.',
    fail_cause:
      "The assembler gets into a rhythm of repetitive work and doesn't notice a mistake on the first part, then 'batch processes' the remaining parts with the same error.",
    risk_prevention: "Instruction 'All four go together the same way' (p. 21).",
    risk_occurrence: 5,
    risk_detection:
      'Comparing a completed module to the diagram, or discovering the error at a later integration step.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Add a process control instruction: 'Assemble one Z-drive module completely. Then, use your first completed module as a template to assemble the remaining three.'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 21, No evidence'
  },
  {
    id: 'FC_146',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep: '[Low Voltage Power] GPIO Direct Power (p. 126)',
    structure_workElement: 'Man',
    func_processItem: 'Power the Raspberry Pi.',
    func_processStep: 'Power the Raspberry Pi directly from the GPIO pins.',
    func_workElement:
      'Connect 5V power to the correct GPIO pins (pin 4 for 5V, pin 6 for Ground).',
    fail_effect:
      '1. Your Plant: Scrapped component. 2. Ship-to Plant: N\/A. 3. End User: The user connects the 5V power to the wrong GPIO pin (e.g., a 3.3V pin or a data pin). This instantly and permanently destroys the Raspberry Pi.',
    fail_severity: 7,
    fail_mode: '5V power connected to wrong GPIO pin, destroying Raspberry Pi.',
    fail_cause:
      'The assembler miscounts the pins and connects the power supply to the wrong location on the GPIO header.',
    risk_prevention:
      'The diagram on page 126 shows the correct pins, but does not explicitly label them. The manual also notes the risks.',
    risk_occurrence: 5,
    risk_detection:
      'Double-checking the pinout diagram for the Raspberry Pi before applying power.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Update the diagram on page 126 to include the pin numbers (e.g., 'Pin 4', 'Pin 6') and a larger, clearer view of the GPIO header.",
    opt_detection:
      'Advise against direct GPIO power and strongly recommend the safer alternative of using a modified USB cable, as mentioned in the text.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 126, No evidence'
  },
  {
    id: 'FC_149',
    history: '',
    structure_processItem: 'Gantry Assembly',
    structure_processStep:
      '[Left\/Right XY Joint Assembly] Bearing Stacks (p. 48-49)',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the gantry, which carries the toolhead.',
    func_processStep:
      'Assemble the left and right XY joints which hold the gantry extrusions together.',
    func_workElement:
      'Tighten the M5 fasteners for the bearing stacks without overtightening.',
    fail_effect:
      '1. Your Plant: Damaged bearings. 2. Ship-to Plant: N\/A. 3. End User: The M5 fastener is overtightened, which puts excessive axial load on the F695 bearings. This causes the bearings to feel rough or seize, adding significant friction to the belt path and leading to layer shifting.',
    fail_severity: 7,
    fail_mode: 'Bearing stack overtightened, causing bearings to bind.',
    fail_cause:
      'The assembler uses excessive torque on the M5x40 SHCS, crushing the bearing stack.',
    risk_prevention: 'Standard assembly practice.',
    risk_occurrence: 6,
    risk_detection:
      'Checking that each idler\/bearing spins freely after its fastener has been tightened.',
    risk_detScore: 6,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Incorporate a shoulder bolt or precision spacer into the design that acts as a hard stop, making it impossible to overtighten and apply axial load to the bearings.',
    opt_detection:
      "Add a check: 'After tightening each M5 screw, spin the corresponding idler. It must spin freely. If not, loosen the screw slightly.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_152',
    history: '',
    structure_processItem: 'Voron 2.4 Frame',
    structure_processStep: '[Frame Assembly] Assemble First Corner (p. 12)',
    structure_workElement: 'Material',
    func_processItem:
      "Assembly of a rigid and square foundational structure for the printer's motion system.",
    func_processStep:
      'Secure three aluminum extrusions at a 90-degree corner using an M5x16 BHCS fastener.',
    func_workElement:
      'Use low-strength (e.g., Loctite 222 or 242) thread lock compound.',
    fail_effect:
      '1. Your Plant: Rework requires heat, potential part damage. 2. Ship-to Plant: N\/A. 3. End User: Future disassembly for maintenance or upgrades is impossible without stripping the fastener head or damaging the extrusion threads. May require cutting the frame apart.',
    fail_severity: 7,
    fail_mode: 'High-strength (permanent) thread locker used by mistake.',
    fail_cause:
      'The assembler uses a high-strength, permanent thread lock compound (e.g., Loctite 262\/271, often red) instead of the specified low-strength compound.',
    risk_prevention:
      "Instruction specifies 'low strength thread lock compound' (p. 12).",
    risk_occurrence: 5,
    risk_detection:
      'Visual check of the thread lock bottle (blue is typically removable, red is permanent) before application.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Include a small, single-use packet of the correct (blue, low-strength) thread locker in the fastener kit.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 12, No evidence'
  },
  {
    id: 'FC_153',
    history: '',
    structure_processItem: 'Z Axis Linear Rails',
    structure_processStep:
      '[Z Axis Linear Rails] Handling and Installation (p. 16)',
    structure_workElement: 'Environment',
    func_processItem:
      'Provide a smooth, precise, and parallel guide system for the Z-axis motion.',
    func_processStep: 'Install clean, well-lubricated linear rails.',
    func_workElement:
      'Keep rails and carriages free from contaminants (dust, metal chips, oils) during assembly.',
    fail_effect:
      '1. Your Plant: Rework to clean and re-lube rails. 2. Ship-to Plant: N\/A. 3. End User: The Z-axis motion feels gritty or rough. This causes visible Z-banding artifacts in prints and leads to premature wear of the bearing surfaces in the carriages.',
    fail_severity: 7,
    fail_mode: 'Linear rail contaminated with debris.',
    fail_cause:
      'The assembler handles the rails with dirty hands, or places them on a workbench with metal filings or other debris, which then gets into the bearing carriage.',
    risk_prevention: 'General good assembly practice.',
    risk_occurrence: 6,
    risk_detection:
      'Sliding the carriage on the rail before installation to feel for grittiness.',
    risk_detScore: 5,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Add an instruction in the manual: 'Handle linear rails with clean hands or gloves. Before installing, wipe the rail with a lint-free cloth and verify the carriage moves smoothly.'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_154',
    history: '',
    structure_processItem: 'Gantry Assembly',
    structure_processStep: '[A\/B Belt Tensioning] Tension Belts',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the gantry, which carries the toolhead.',
    func_processStep: 'Apply correct tension to the CoreXY A and B belts.',
    func_workElement:
      'Apply sufficient tension to prevent backlash without over-stretching the belts.',
    fail_effect:
      '1. Your Plant: Poor test print quality. 2. Ship-to Plant: N\/A. 3. End User: Belts are too loose, causing backlash. This appears as ringing\/ghosting artifacts in prints, and circles may not be perfectly round. Print quality is poor.',
    fail_severity: 7,
    fail_mode: 'CoreXY belts are too loose.',
    fail_cause:
      'The assembler does not pull the belts taut enough before securing them in the carriage clamps, fearing they might break something.',
    risk_prevention: 'General community knowledge and tuning guides.',
    risk_occurrence: 7,
    risk_detection:
      "Plucking the belt like a guitar string to check for a low, dull thud instead of a crisp 'twang'. Software-based resonance testing.",
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Add a section on belt tensioning to the manual. Recommend a target frequency (e.g., 110Hz) and suggest using a guitar tuner app to measure it.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_155',
    history: '',
    structure_processItem: 'Gantry Assembly',
    structure_processStep: '[A\/B Belt Tensioning] Tension Belts',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the gantry, which carries the toolhead.',
    func_processStep: 'Apply correct tension to the CoreXY A and B belts.',
    func_workElement:
      'Apply sufficient tension to prevent backlash without over-stretching the belts or overloading components.',
    fail_effect:
      '1. Your Plant: Premature component wear. 2. Ship-to Plant: N\/A. 3. End User: Belts are too tight. This puts excessive radial load on the motor and idler bearings, causing premature wear and failure. It can also cause the printed plastic idler mounts to deform or crack over time.',
    fail_severity: 7,
    fail_mode: 'CoreXY belts are too tight.',
    fail_cause:
      'The assembler uses excessive force, possibly with pliers, to tension the belts far beyond what is necessary.',
    risk_prevention: 'General community knowledge and tuning guides.',
    risk_occurrence: 6,
    risk_detection:
      'Feeling for excessive resistance when moving the gantry by hand. It should move smoothly, not feel stiff or notchy. Software-based resonance testing.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Add a section on belt tensioning to the manual, including a warning about the dangers of over-tensioning. Recommend a target frequency (e.g., 110Hz).',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_156',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep: '[PSU Setup] Set Voltage Selector',
    structure_workElement: 'Man',
    func_processItem: 'Provide correct DC power to the printer.',
    func_processStep: 'Configure the main 24V Power Supply Unit (PSU).',
    func_workElement:
      'Set the mains voltage selector switch to the correct local voltage (115V or 230V).',
    fail_effect:
      '1. Your Plant: Destruction of PSU. 2. Ship-to Plant: N\/A. 3. End User: The PSU is set to 115V but is plugged into a 230V outlet. The PSU will be instantly and permanently destroyed, often with a loud pop and the release of smoke. Assembly is halted.',
    fail_severity: 7,
    fail_mode: 'PSU voltage selector set incorrectly (115V in 230V region).',
    fail_cause:
      'The assembler does not check the position of the recessed voltage selector switch before applying power.',
    risk_prevention: "The PSU is marked with the switch's function.",
    risk_occurrence: 5,
    risk_detection:
      'Visual inspection of the voltage selector switch as part of the pre-power-on checklist.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Add a large, red warning box in the Mains Wiring section (p. 124): 'DANGER: Before plugging in your printer, verify the red voltage switch on your power supply is set correctly for your country (115V or 230V).'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_159',
    history: '',
    structure_processItem: 'Electronics Sub-Assembly',
    structure_processStep: '[Electronics Cooling] Fan Failure',
    structure_workElement: 'Material',
    func_processItem: 'Provide cooling for the electronics.',
    func_processStep: 'Cool the stepper motor drivers on the controller board.',
    func_workElement: 'The electronics cooling fans must operate reliably.',
    fail_effect:
      '1. Your Plant: N\/A. 2. Ship-to Plant: N\/A. 3. End User: The electronics cooling fan fails (seized bearing). The stepper motor drivers overheat during a print and enter thermal shutdown. This causes the motors to stop moving for a moment, resulting in a severe layer shift and a failed print.',
    fail_severity: 7,
    fail_mode: 'Electronics cooling fan fails.',
    fail_cause:
      'The fan is a low-quality unit with poor bearings that fails prematurely.',
    risk_prevention: 'Sourcing quality components.',
    risk_occurrence: 4,
    risk_detection:
      'Periodically checking that the fans are spinning, especially before a long print.',
    risk_detScore: 9,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Specify high-quality, dual-ball-bearing fans in the Bill of Materials. Configure the firmware to monitor fan RPM (if supported) and halt the print if a fan fails.',
    opt_detection:
      "Add 'Check electronics fans are spinning' to the pre-print checklist.",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_162',
    history: '',
    structure_processItem: 'Initial Calibration',
    structure_processStep: '[First Print] Bed Preparation',
    structure_workElement: 'Man',
    func_processItem:
      'Calibrate all printer subsystems for optimal performance.',
    func_processStep:
      'Ensure the build surface is clean for optimal print adhesion.',
    func_workElement: 'Clean the PEI build surface with isopropyl alcohol.',
    fail_effect:
      "1. Your Plant: Failed prints. 2. Ship-to Plant: N\/A. 3. End User: The print detaches from the build surface mid-print ('warping' or 'letting go'), causing a failed print. This is especially common with ABS.",
    fail_severity: 7,
    fail_mode: 'Print detaches from bed due to poor adhesion.',
    fail_cause:
      'The user touched the build surface, leaving oils from their skin on the PEI sheet, which acts as a release agent and prevents the plastic from adhering properly.',
    risk_prevention: 'General community knowledge.',
    risk_occurrence: 8,
    risk_detection: 'No detection method other than print failure.',
    risk_detScore: 10,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Add a 'Preparing for your First Print' section in the manual that explicitly states: 'Before every print, wipe the cool build surface with 90%+ isopropyl alcohol. Do not touch the surface after cleaning.'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_163',
    history: '',
    structure_processItem: 'Initial Calibration',
    structure_processStep: '[Calibration] Extruder E-Steps',
    structure_workElement: 'Man',
    func_processItem:
      'Calibrate all printer subsystems for optimal performance.',
    func_processStep:
      'Calibrate the extruder to ensure it feeds the correct amount of filament.',
    func_workElement:
      'Measure and set the `rotation_distance` (E-steps) value in the firmware.',
    fail_effect:
      '1. Your Plant: Poor print quality. 2. Ship-to Plant: N\/A. 3. End User: Prints are dimensionally inaccurate, have gaps between lines (under-extrusion), or have blobs and poor surface finish (over-extrusion). The printer is not producing quality parts.',
    fail_severity: 7,
    fail_mode: 'Incorrect amount of filament is extruded.',
    fail_cause:
      'The user skips the extruder calibration step and uses a default value in the configuration file, which does not perfectly match their specific extruder mechanics.',
    risk_prevention: 'Klipper documentation and general 3D printing guides.',
    risk_occurrence: 7,
    risk_detection:
      'Printing a calibration cube and measuring its wall thickness with calipers.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Add a simplified extruder calibration guide to the manual, with a link to a more detailed Klipper guide. Explain why this step is critical for print quality.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_165',
    history: '',
    structure_processItem: 'Software and Firmware',
    structure_processStep: '[Firmware] Edit `printer.cfg` file',
    structure_workElement: 'Man',
    func_processItem: "Install and configure the printer's control software.",
    func_processStep:
      'Configure all printer hardware parameters in the Klipper `printer.cfg` text file.',
    func_workElement: 'Set the correct current for the stepper motors.',
    fail_effect:
      '1. Your Plant: Motor overheating or layer shifting. 2. Ship-to Plant: N\/A. 3. End User: Motor current is too high, causing motors to run extremely hot, potentially deforming their plastic mounts. Motor current is too low, causing motors to skip steps under load, resulting in layer shifts.',
    fail_severity: 7,
    fail_mode: 'Incorrect stepper motor current.',
    fail_cause:
      'User copies a configuration file from another user with different motors, or guesses at the `run_current` value, without checking the datasheet for their specific motors.',
    risk_prevention: 'Klipper documentation and motor datasheets.',
    risk_occurrence: 6,
    risk_detection:
      'Feeling the motors during a print to check their temperature (should be warm, not too hot to touch). Observing for layer shifts.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Add a section in the manual explaining how to set motor current, typically 50-70% of the motor's rated current. Provide sample values for common motors used in Voron builds.",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_177',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Hot End Install] Install Bowden Tube (p. 81)',
    structure_workElement: 'Man',
    func_processItem:
      'Assembly of the Afterburner toolhead, which holds the hotend and extruder.',
    func_processStep: 'Install the hot end and part cooling fan.',
    func_workElement:
      'Cut the Bowden (PTFE) tube to the correct length with a square end.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: A gap is left between the end of the Bowden tube and the top of the hotend heatbreak. Molten filament fills this gap, creating a plug that causes a jam. This is a very common failure mode on direct drive extruders.',
    fail_severity: 7,
    fail_mode: 'Gap in filament path inside the extruder.',
    fail_cause:
      'The user cuts the PTFE tube too short, or the end is not cut perfectly square, preventing it from seating properly against the heatbreak.',
    risk_prevention: 'Diagram on page 81 shows the tube.',
    risk_occurrence: 7,
    risk_detection: 'No easy detection method until a jam occurs.',
    risk_detScore: 9,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Add a specific instruction for cutting the PTFE tube: 'Use a sharp razor or PTFE cutter to make a perfectly square cut. Provide a 3D printable cutting jig. Specify the exact required length.",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 81, No evidence'
  },
  {
    id: 'FC_185',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep: '[Final Wiring] Strain Relief',
    structure_workElement: 'Man',
    func_processItem:
      'Connect all electronic components according to wiring diagrams.',
    func_processStep: 'Ensure long-term reliability of wiring connections.',
    func_workElement:
      'Provide strain relief for all wires, especially those that move.',
    fail_effect:
      '1. Your Plant: Intermittent faults. 2. Ship-to Plant: N\/A. 3. End User: A wire fatigues and breaks at a connector or solder joint due to repeated bending. This causes an intermittent or total failure of a component (e.g., hotend heater, thermistor, fan), leading to failed prints.',
    fail_severity: 7,
    fail_mode: 'Wire breaks at connector due to fatigue.',
    fail_cause:
      'The assembler does not provide any strain relief. All the stress from the moving cable chain is concentrated on the fragile solder joint or crimp terminal.',
    risk_prevention:
      'The cable chain anchor points provide some strain relief.',
    risk_occurrence: 6,
    risk_detection: 'No detection method other than failure.',
    risk_detScore: 10,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Add a section on wiring best practices, instructing the user to use zip ties to secure the wiring loom to the cable chain anchors, so that the stress is on the cable jacket, not the individual solder\/crimp joints.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_187',
    history: '',
    structure_processItem: 'Electronics Sub-Assembly',
    structure_processStep: '[Controller Board] Jumper Settings',
    structure_workElement: 'Man',
    func_processItem: 'Provide control signals to printer components.',
    func_processStep: 'Configure the main controller board for use.',
    func_workElement:
      'Set the physical jumpers on the controller board correctly for the chosen stepper driver mode (e.g., UART mode).',
    fail_effect:
      "1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The printer firmware cannot communicate with the stepper drivers. The motors will not move, and the printer will report a 'TMC communication error'. The printer is non-functional.",
    fail_severity: 7,
    fail_mode: 'Incorrect jumper settings on controller board.',
    fail_cause:
      'The assembler does not install the jumpers on the controller board as required for the specific type of stepper driver being used.',
    risk_prevention: "The controller board manufacturer's documentation.",
    risk_occurrence: 6,
    risk_detection:
      'The error message in the Klipper console is the detection.',
    risk_detScore: 5,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Add a board-specific setup section to the manual or an appendix, showing the correct jumper settings for the most common controller boards used in Voron builds.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_193',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep: '[Low Voltage Power] 5V Power Supply',
    structure_workElement: 'Material',
    func_processItem: 'Provide correct DC power to the printer.',
    func_processStep: 'Provide 5V power for the Raspberry Pi.',
    func_workElement:
      'The 5V power supply must provide stable voltage under load.',
    fail_effect:
      "1. Your Plant: N\/A. 2. Ship-to Plant: N\/A. 3. End User: The Raspberry Pi randomly reboots or displays a 'lightning bolt' under-voltage warning. This can corrupt the SD card or cause print failures if it happens mid-print.",
    fail_severity: 7,
    fail_mode: 'Raspberry Pi experiences under-voltage.',
    fail_cause:
      "The user is powering the Pi with a low-quality, under-spec'd 5V power supply that cannot provide sufficient current, causing the voltage to drop.",
    risk_prevention:
      'The sourcing guide recommends a specific, adequate power supply.',
    risk_occurrence: 5,
    risk_detection:
      'Observing the screen for the under-voltage icon, or checking system logs.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Emphasize in the manual that a high-quality 5V 3A power supply is required for the Raspberry Pi and warn against using cheap phone chargers.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_196',
    history: '',
    structure_processItem: 'Gantry Assembly',
    structure_processStep: '[Microswitch Pod] Install Microswitch (p. 50)',
    structure_workElement: 'Man',
    func_processItem: 'Provide endstop signaling for the X\/Y axes.',
    func_processStep:
      'Assemble the X\/Y endstop microswitch into its printed pod.',
    func_workElement: 'Orient the microswitch correctly in its housing.',
    fail_effect:
      "1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The microswitch is installed upside-down. The switch's actuation pin is not in the correct position to be triggered by the gantry. The printer crashes during homing.",
    fail_severity: 7,
    fail_mode: 'Microswitch installed upside-down.',
    fail_cause:
      'The assembler does not pay attention to the orientation of the switch in the diagram and installs it inverted in the printed pod.',
    risk_prevention:
      'Assembly diagram on page 50 shows the correct orientation.',
    risk_occurrence: 5,
    risk_detection:
      'Visual inspection of the assembled pod before installation.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Redesign the printed pod with an asymmetric feature (e.g., a small pin and corresponding hole) that only allows the microswitch to be installed in the correct orientation.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 50, No evidence'
  },
  {
    id: 'FC_198',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Final Assembly] Toolhead Movement Check',
    structure_workElement: 'Man',
    func_processItem: 'Reliably produce high-quality 3D prints.',
    func_processStep:
      'Ensure the fully assembled toolhead does not have any wobble.',
    func_workElement:
      'All components of the gantry and toolhead are properly tightened.',
    fail_effect:
      '1. Your Plant: Poor print quality. 2. Ship-to Plant: N\/A. 3. End User: The prints have inconsistent extrusion and Z-banding artifacts. The nozzle tip is not stable, leading to poor quality.',
    fail_severity: 7,
    fail_mode: 'Nozzle tip is wobbly.',
    fail_cause:
      'A fastener in the toolhead assembly (e.g., securing the hotend mount to the carriage) was not fully tightened. The entire hotend assembly has a slight wobble.',
    risk_prevention: 'Multiple assembly steps contribute to a rigid assembly.',
    risk_occurrence: 6,
    risk_detection:
      'Gently trying to wiggle the nozzle by hand after the printer is fully assembled. There should be no perceptible play.',
    risk_detScore: 7,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Add a step to the Pre-Flight Checklist (p. 135): 'Final Mechanical Check: Gently try to wiggle the hotend nozzle. There should be zero play. If it moves, re-check all fasteners on the toolhead and X-carriage.'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_200',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep: '[Final Wiring] Cable Management',
    structure_workElement: 'Man',
    func_processItem:
      'Connect all electronic components according to wiring diagrams.',
    func_processStep: 'Route all wires neatly and secure them.',
    func_workElement:
      'Ensure wires do not block airflow from the electronics cooling fans.',
    fail_effect:
      '1. Your Plant: Overheating during test. 2. Ship-to Plant: N\/A. 3. End User: Stepper drivers overheat, causing layer shifts and failed prints.',
    fail_severity: 7,
    fail_mode: 'Poor airflow in electronics bay causes overheating.',
    fail_cause:
      "The assembler creates a 'rat's nest' of wiring that physically blocks the cooling fans, preventing air from reaching the heatsinks on the controller board.",
    risk_prevention:
      'The use of DIN rails and cable chains encourages some level of neatness.',
    risk_occurrence: 6,
    risk_detection:
      'Visual inspection of the electronics bay after wiring, specifically checking for clear paths between the fans and the controller boards.',
    risk_detScore: 8,
    risk_ap: 'H',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Provide a recommended cable routing diagram for the electronics bay, showing how to bundle and secure wires to keep critical airflow paths clear.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_168',
    history: '',
    structure_processItem: 'Maintenance',
    structure_processStep: '[Periodic Maintenance] Belt Tension',
    structure_workElement: 'Material',
    func_processItem: 'Reliably produce high-quality 3D prints.',
    func_processStep:
      'Maintain correct belt tension over the life of the printer.',
    func_workElement:
      'GT2 belts exhibit a small amount of permanent stretch after initial tensioning and use.',
    fail_effect:
      '1. Your Plant: N\/A. 2. Ship-to Plant: N\/A. 3. End User: Print quality degrades over time. Ringing and ghosting artifacts appear as the belts lose their initial tension.',
    fail_severity: 6,
    fail_mode: 'Belts lose tension over time.',
    fail_cause:
      'Normal material creep and settling of the fiberglass cores in the GT2 belts causes a drop in tension after the first 50-100 hours of printing.',
    risk_prevention: 'None specified.',
    risk_occurrence: 8,
    risk_detection:
      'Periodic re-checking of belt tension using a frequency app or by observing print quality.',
    risk_detScore: 9,
    risk_ap: 'H',
    opt_preventive:
      "Add a 'Periodic Maintenance' section to the manual recommending that users re-tension their X, Y, and Z belts after the first 50 hours of use, and then check every 500 hours.",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_199',
    history: '',
    structure_processItem: 'Initial Prep',
    structure_processStep: '[Initial Prep] Read the Manual',
    structure_workElement: 'Man',
    func_processItem: 'Ensure a successful and safe assembly process.',
    func_processStep: 'Understand the entire assembly process before starting.',
    func_workElement:
      'Read the entire assembly manual from start to finish before opening any bags.',
    fail_effect:
      '1. Your Plant: Extensive rework, safety hazards. 2. Ship-to Plant: N\/A. 3. End User: The user makes numerous mistakes, such as forgetting to pre-load T-nuts or installing parts in the wrong order, because they did not have a full picture of the process. This leads to frustration and significant rework.',
    fail_severity: 6,
    fail_mode: 'Critical step missed due to not reading ahead.',
    fail_cause:
      "The user starts building immediately, only reading one page at a time, and misses critical warnings or instructions about future steps (e.g., 'don't tighten this yet').",
    risk_prevention:
      "Explicit instruction: 'Please, read the entire manual before you start assembly.' (p. 3).",
    risk_occurrence: 8,
    risk_detection:
      'Self-discovery of the mistake at a later, more difficult-to-fix stage.',
    risk_detScore: 9,
    risk_ap: 'H',
    opt_preventive:
      "Add a 'Why you should read this first' section that highlights 3-4 examples of critical steps that are easily missed if not read in advance (e.g., pre-loading nuts, not-tightening bolts, etc.).",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 3, No evidence'
  },
  {
    id: 'FC_078',
    history: '',
    structure_processItem: 'Electronics Sub-Assembly',
    structure_processStep: '[Test] Check Heater Function',
    structure_workElement: 'Material',
    func_processItem: 'Verify the integrity of the electronics assembly.',
    func_processStep: 'Verify the function of the bed and hotend heaters.',
    func_workElement:
      'The Solid State Relay (SSR) for the bed heater must fail in an open state.',
    fail_effect:
      "1. Your Plant: Fire hazard during testing. 2. Ship-to Plant: N\/A. 3. End User: The SSR fails in a 'shorted' or 'closed' state. The bed heater receives uncontrolled, continuous mains power, even when commanded off. This will cause the bed to overheat, potentially melting printed parts, damaging the bed, and creating a severe fire hazard. This is a thermal runaway condition.",
    fail_severity: 10,
    fail_mode: 'Bed heater runaway condition.',
    fail_cause:
      "The SSR is a low-quality counterfeit or defective unit and fails 'short'.",
    risk_prevention:
      'Sourcing electronics from reputable vendors. Thermal fuse on the heated bed is a secondary safety device.',
    risk_occurrence: 3,
    risk_detection:
      'Observing the bed temperature in the web interface. If it continues to rise after being commanded to 0°C, a runaway is in progress.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_specialChar: 'CC',
    risk_filter: '',
    opt_preventive:
      'Specify only high-quality, brand-name SSRs in the Bill of Materials and warn against using cheap, uncertified alternatives.',
    opt_detection:
      "Add a mandatory first-time heater check: 'Command the bed to heat to 40°C. Once it reaches temperature, command it to 0°C. Verify the indicator LED on the SSR turns off and the temperature begins to fall.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_040',
    history: '',
    structure_processItem: 'Gantry Assembly',
    structure_processStep: '[Dual Rail Install] Install Gantry Rails (p. 47)',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the gantry, which carries the toolhead.',
    func_processStep: 'Mount two linear rails to the X-axis extrusion.',
    func_workElement:
      "Use the 'Centered Rail Installation Guide' tool to ensure both rails are centered and, more importantly, parallel to each other.",
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The two rails are not parallel. The toolhead carriage, which rides on both rails, will bind. This causes jerky motion, high motor load, skipped steps, and very poor print quality.',
    fail_severity: 8,
    fail_mode: 'Dual linear rails are not parallel.',
    fail_cause:
      'Assembler does not use the installation guide tool, or tightens the rails down in a sequence that causes them to shift out of parallel.',
    risk_prevention:
      "Provision of the 'Centered Rail Installation Guide' tool (p. 47).",
    risk_occurrence: 5,
    risk_detection:
      'Sliding the carriage along the rails after installation to feel for any binding.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Instruct a specific tightening sequence: 'Lightly snug all fasteners. Slide the carriage to one end and tighten the fasteners there. Slide to the other end and tighten. Then tighten the middle.' This uses the carriage itself as an alignment tool.",
    opt_detection:
      'Use a dial indicator mounted on one carriage to measure the distance to the other rail along its full length.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 47, No evidence'
  },
  {
    id: 'FC_058',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Latch Install] Install Tension Knob (p. 77)',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the Clockwork extruder mechanism.',
    func_processStep: 'Install the extruder latch and tensioning knob.',
    func_workElement:
      'Ensure the tension knob is correctly threaded and applies pressure to the idler arm.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: No tension can be applied to the filament drive. The drive gear will slip on the filament, resulting in no extrusion or very weak extrusion. Print will fail immediately.',
    fail_severity: 8,
    fail_mode: 'Tension knob does not engage with idler arm.',
    fail_cause:
      'The screw is cross-threaded, the spring is missing, or the idler arm was installed incorrectly, preventing the tensioning system from functioning.',
    risk_prevention: 'Diagram showing assembly of the latch and knob (p. 77).',
    risk_occurrence: 5,
    risk_detection:
      'Turning the knob and observing that the idler arm moves and becomes spring-loaded.',
    risk_detScore: 3,
    risk_ap: 'M',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Redesign to use a simpler, pre-set tensioning spring system instead of an adjustable knob.',
    opt_detection:
      "Add an instruction: 'After assembly, turn the tension knob and verify that the idler arm moves in and out.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 77, No evidence'
  },
  {
    id: 'FC_100',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep:
      '[Z Belt Drive & Stepper] Assemble Pulley to Stepper (p. 19)',
    structure_workElement: 'Machine',
    func_processItem:
      'Assembly of four identical Z-axis belt drive modules to lift the gantry.',
    func_processStep:
      'Secure a GT2 16T pulley onto the Z-axis stepper motor shaft.',
    func_workElement:
      'The hex key used to tighten the grub screw must be the correct size and in good condition.',
    fail_effect:
      '1. Your Plant: Rework, potentially damaged grub screw. 2. Ship-to Plant: N\/A. 3. End User: The grub screw cannot be properly tightened because the hex key slips and strips the head of the screw. The pulley will eventually slip on the shaft, causing a tilted gantry.',
    fail_severity: 8,
    fail_mode: 'Grub screw head stripped.',
    fail_cause:
      'The assembler uses a worn-out or wrong-sized hex key (e.g., an imperial key in a metric screw), which rounds out the hexagonal socket before proper torque can be applied.',
    risk_prevention: 'Standard tool sets.',
    risk_occurrence: 5,
    risk_detection: 'The tool slipping is the detection.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Include a set of new, correctly sized hex keys for all fasteners in the kit. Switch to grub screws that use a larger hex key or a Torx drive, which are more resistant to stripping.',
    opt_detection:
      "Add a note: 'Use a high-quality hex key. If it feels loose or slips, stop and get a different key.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_117',
    history: '',
    structure_processItem: 'Voron 2.4 Frame',
    structure_processStep:
      '[Frame Assembly] Assemble Frame Top & Check Squareness (p. 14)',
    structure_workElement: 'Machine',
    func_processItem:
      "Assembly of a rigid and square foundational structure for the printer's motion system.",
    func_processStep:
      'Assemble the top four extrusions and ensure all eight corners of the frame cube are as square as possible (90 degrees).',
    func_workElement:
      'Framing square provides an accurate 90-degree reference.',
    fail_effect:
      '1. Your Plant: Inaccurate assembly. 2. Ship-to Plant: N\/A. 3. End User: The frame is not square because the tool used for checking was inaccurate. This leads to skewed prints and potential binding of the motion system.',
    fail_severity: 8,
    fail_mode: 'Frame assembled non-square due to inaccurate tool.',
    fail_cause:
      'Assembler uses a cheap, inaccurate, or damaged framing square as their reference, building the error directly into the frame.',
    risk_prevention: 'Instruction to use a framing square (p. 14).',
    risk_occurrence: 4,
    risk_detection:
      'Comparing diagonal measurements of the frame faces. If the square was inaccurate, the diagonals will not be equal.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Recommend a specific brand or class of framing square. Explain how to check a square for accuracy (the flip test).',
    opt_detection:
      'Make the diagonal measurement check a mandatory verification step, as it validates the squareness regardless of tool accuracy.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 14, No evidence'
  },
  {
    id: 'FC_127',
    history: '',
    structure_processItem: 'Frame Assembly',
    structure_processStep: '[Frame Assembly] General',
    structure_workElement: 'Material',
    func_processItem:
      "Assembly of a rigid and square foundational structure for the printer's motion system.",
    func_processStep: 'Assemble the frame from 2020 aluminum extrusions.',
    func_workElement:
      'The aluminum extrusions must be cut square and to the correct length.',
    fail_effect:
      '1. Your Plant: Assembly issues. 2. Ship-to Plant: N\/A. 3. End User: An extrusion is too short. The frame will be impossible to assemble squarely, as tightening the corners will bend other extrusions. The final frame will be skewed or twisted.',
    fail_severity: 8,
    fail_mode: 'Aluminum extrusion is too short.',
    fail_cause: 'The supplier cut the extrusion out of tolerance (too short).',
    risk_prevention: 'Sourcing from a reputable kit vendor or supplier.',
    risk_occurrence: 3,
    risk_detection:
      'Measuring all extrusions with a tape measure or calipers before starting assembly.',
    risk_detScore: 8,
    risk_ap: 'M',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Add a pre-assembly inventory and check step: 'Gather all extrusions. Measure and verify their lengths against the cutting guide. Check that ends are cut square.'",
    opt_detection: 'N\/A, pre-check is the detection.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_128',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep: '[Z Idlers] Assemble Z Idlers (p. 28)',
    structure_workElement: 'Material',
    func_processItem: 'Guide the Z-axis belts at the top of the frame.',
    func_processStep:
      'Assemble four Z idler modules, each containing an idler pulley, a bolt, and a nut.',
    func_workElement: 'The GT2 20T 9mm idler must have teeth and flanges.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The belt is not properly guided and can walk off the idler, causing a complete loss of Z motion on one or more corners and catastrophic gantry tilting.',
    fail_severity: 8,
    fail_mode: 'Idler is smooth instead of toothed, or missing flanges.',
    fail_cause:
      'The supplier sent the wrong component: a smooth idler instead of a toothed one, or a flangeless pulley instead of a flanged idler.',
    risk_prevention:
      'Visual matching of parts from the kit to the diagrams in the manual.',
    risk_occurrence: 4,
    risk_detection: 'Visual inspection of the component before assembly.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Create a detailed visual hardware identification guide at the beginning of the manual so users can verify all their small components before they start building.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 28, No evidence'
  },
  {
    id: 'FC_046',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep:
      '[Carriage Mounting] Mount Carriage to Rails (p. 62)',
    structure_workElement: 'Material',
    func_processItem:
      'Assembly of the Afterburner toolhead, which holds the hotend and extruder.',
    func_processStep:
      'Mount the assembled X-carriage onto the dual linear rails of the gantry.',
    func_workElement:
      'The spacing of the bearing blocks on the X-carriage matches the spacing of the parallel linear rails.',
    fail_effect:
      '1. Your Plant: Cannot assemble carriage, or it binds severely. 2. Ship-to Plant: N\/A. 3. End User: The carriage cannot be mounted, or it is extremely tight and binds on the rails. This halts assembly or causes very poor, jerky X-axis motion.',
    fail_severity: 7,
    fail_mode: 'Carriage does not fit or binds on linear rails.',
    fail_cause:
      'The 3D printed carriage part is warped or has shrunk incorrectly, causing the distance between the integrated bearing blocks to be wrong.',
    risk_prevention:
      'Using correct print settings (material, temperature, etc.) as recommended on page 5.',
    risk_occurrence: 4,
    risk_detection:
      'The failure is detected during the attempt to mount the carriage.',
    risk_detScore: 3,
    risk_ap: 'M',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Provide a 3D printable gauge to check the critical spacing on the carriage part before attempting to mount it.',
    opt_detection: 'N\/A, failure is self-evident during assembly.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 5, No evidence'
  },
  {
    id: 'FC_050',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Hot End Retention] Test Fit Housing (p. 67)',
    structure_workElement: 'Material',
    func_processItem:
      'Assembly of the Afterburner toolhead, which holds the hotend and extruder.',
    func_processStep: 'Assemble the hot end and fan housing.',
    func_workElement:
      'The printed hot end housing should be a firm slide-in fit, not loose enough to wobble.',
    fail_effect:
      '1. Your Plant: Rework\/reprint part. 2. Ship-to Plant: N\/A. 3. End User: A loose and wobbly hotend will lead to very poor print quality, with artifacts, ringing, and inconsistent extrusion. The nozzle tip position is not stable.',
    fail_severity: 7,
    fail_mode: 'Hot end housing is a loose fit and wobbles.',
    fail_cause:
      'The 3D printed parts (carriage or housing) are out of spec, likely undersized due to printer miscalibration or incorrect print settings.',
    risk_prevention: "Instruction to 'TEST FIT HOUSING' (p. 67).",
    risk_occurrence: 4,
    risk_detection: 'The test fit itself is the detection control.',
    risk_detScore: 3,
    risk_ap: 'M',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Provide more detailed print guidelines on page 5 to achieve dimensionally accurate parts, perhaps including a calibration test print.',
    opt_detection:
      'Instruct user to add layers of kapton tape to shim the connection if the fit is slightly loose.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 67, Assembly Manual, p. 67'
  },
  {
    id: 'FC_083',
    history: '',
    structure_processItem: 'Initial Calibration',
    structure_processStep: '[Calibration] Bed Mesh Leveling',
    structure_workElement: 'Machine',
    func_processItem:
      'Calibrate all printer subsystems for optimal performance.',
    func_processStep:
      'Create a 3D map of the build surface to compensate for minor warping.',
    func_workElement:
      'The inductive probe must trigger reliably and consistently at the same distance from the metal build plate.',
    fail_effect:
      '1. Your Plant: Inconsistent calibration. 2. Ship-to Plant: N\/A. 3. End User: The generated bed mesh is noisy and inaccurate. The first layer is still uneven, with the nozzle being too close in some spots and too far in others. Prints fail to adhere.',
    fail_severity: 7,
    fail_mode: 'Bed mesh is inconsistent.',
    fail_cause:
      "The inductive probe's wiring is routed alongside the stepper motor wires, and electrical noise from the motor is interfering with the probe signal, causing inconsistent trigger heights.",
    risk_prevention: 'General wiring practices.',
    risk_occurrence: 5,
    risk_detection:
      'Running the PROBE_ACCURACY command in Klipper to measure the standard deviation of probe readings.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Recommend using shielded cable for the probe wiring. Update wiring diagrams to show probe and motor wires routed in separate bundles.',
    opt_detection:
      "Add a check to the manual: 'Run the PROBE_ACCURACY test. The standard deviation should be less than 0.005mm. If higher, check probe mounting and wiring for noise.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_087',
    history: '',
    structure_processItem: 'Voron 2.4 Frame',
    structure_processStep:
      '[Z Axis Linear Rails] Install Z-Axis Linear Rails (p. 16)',
    structure_workElement: 'Material',
    func_processItem:
      'Provide a smooth, precise, and parallel guide system for the Z-axis motion.',
    func_processStep:
      'Secure four linear rails to the four vertical frame extrusions using M3x8 SHCS fasteners.',
    func_workElement:
      'The linear rail carriage is pre-lubricated and moves smoothly on the rail.',
    fail_effect:
      '1. Your Plant: Assembly delay, requires cleaning or replacement of rail. 2. Ship-to Plant: N\/A. 3. End User: Z-axis motion is gritty or sticks in some places. This causes visible artifacts (Z-banding) in prints and can lead to premature wear of the carriage.',
    fail_severity: 7,
    fail_mode: 'Linear rail motion is not smooth (gritty or binding).',
    fail_cause:
      'The linear rail was shipped with insufficient lubrication or was contaminated with dirt\/debris during shipping or handling.',
    risk_prevention: 'Sourcing from reputable suppliers.',
    risk_occurrence: 5,
    risk_detection:
      'Manually sliding the carriage along the rail before installation to check for smoothness.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Add a step in the manual: 'Before installing linear rails, slide the carriage back and forth. It should move smoothly. If it feels gritty, clean the rail and re-lubricate with a recommended grease (e.g., Mobilux EP2).'",
    opt_detection: 'N\/A, the pre-check is the detection.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_104',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Probe & Pivot Block] Assemble Probe (p. 60)',
    structure_workElement: 'Material',
    func_processItem: 'Provide bed leveling functionality.',
    func_processStep: 'Assemble the inductive probe into its mount.',
    func_workElement:
      'The inductive probe is a sensitive electronic component.',
    fail_effect:
      '1. Your Plant: Scrapped component. 2. Ship-to Plant: N\/A. 3. End User: The inductive probe is non-functional. The printer cannot perform bed leveling routines, making it very difficult to get a good first layer. The build is effectively halted until a new probe is acquired.',
    fail_severity: 7,
    fail_mode:
      'Inductive probe is dead on arrival (DOA) or damaged during assembly.',
    fail_cause:
      'The probe was faulty from the supplier, or the assembler overtightened the mounting screw, cracking the fragile probe housing and damaging the internal electronics.',
    risk_prevention: 'Sourcing from reputable suppliers.',
    risk_occurrence: 4,
    risk_detection:
      "Testing the probe with the printer's electronics before final installation into the toolhead.",
    risk_detScore: 6,
    risk_ap: 'M',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Add a note in the manual: 'The probe body is fragile. Tighten the mounting screw just enough to hold it. Do not crush.'",
    opt_detection:
      'Add a step in the electronics section to temporarily wire up the probe and test its functionality (e.g., by bringing a piece of metal near it and checking the status light) before it is installed.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_111',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Hot End Install 2] Install Fans (p. 82)',
    structure_workElement: 'Man',
    func_processItem:
      'Melt and extrude filament, and cool the printed plastic.',
    func_processStep:
      'Install the hotend cooling fan and the part cooling fan.',
    func_workElement: 'Wire fans with correct polarity.',
    fail_effect:
      '1. Your Plant: Fan does not spin. 2. Ship-to Plant: N\/A. 3. End User: The fan is wired with reverse polarity. DC fans will not spin, or may be damaged. Lack of cooling will cause heat creep and jams (hotend fan) or poor print quality (part fan).',
    fail_severity: 7,
    fail_mode: 'Fan does not operate.',
    fail_cause:
      'The assembler reverses the positive and negative wires when connecting the fan to the controller board.',
    risk_prevention: 'Red\/black wires indicate polarity.',
    risk_occurrence: 5,
    risk_detection:
      'Testing each fan from the software interface after wiring is complete.',
    risk_detScore: 4,
    risk_ap: 'M',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Use keyed JST connectors for fans to make reverse polarity connection impossible.',
    opt_detection:
      "Add to checklist: 'Individually turn on Hotend Fan and Part Cooling Fan from the interface. Verify both spin.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_120',
    history: '',
    structure_processItem: 'AB Drive Modules',
    structure_processStep:
      '[Front Idler Assembly] Assemble Bearing Stack (p. 40)',
    structure_workElement: 'Material',
    func_processItem:
      'Assembly of the A and B motor drive modules for the gantry.',
    func_processStep:
      'Assemble the front idler bearing stack, which includes F695 bearings and M5 shims.',
    func_workElement:
      'F695 bearings must have smooth, free-spinning rolling elements.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The bearing is seized or gritty. This adds a significant amount of friction to the belt path, which can cause the stepper motor to lose steps (layer shifting). It also leads to rapid belt wear.',
    fail_severity: 7,
    fail_mode: 'Idler bearing does not spin freely.',
    fail_cause:
      'The bearing is defective from the supplier (e.g., missing balls, bad race) or was contaminated with debris.',
    risk_prevention: 'Sourcing from reputable suppliers.',
    risk_occurrence: 4,
    risk_detection: 'Spinning each bearing by hand before installing it.',
    risk_detScore: 5,
    risk_ap: 'M',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Add a pre-assembly check: 'Before installing any bearings, spin them on your finger. They should be smooth and quiet. Discard any that feel gritty or rough.'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_131',
    history: '',
    structure_processItem: 'Gantry Assembly',
    structure_processStep: '[Endstop Module] Install Endstop Module (p. 57)',
    structure_workElement: 'Man',
    func_processItem: 'Provide endstop signaling for the X\/Y axes.',
    func_processStep: 'Install the Y-axis endstop module.',
    func_workElement:
      'Mount the module so the microswitch can be physically actuated by the XY joint.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The endstop switch is positioned too far away and is never triggered. The printer will crash the gantry into the frame during Y-axis homing.',
    fail_severity: 7,
    fail_mode: 'Y-endstop switch cannot be actuated.',
    fail_cause:
      'The assembler installs the endstop module in the wrong location or orientation, preventing the XY joint from making contact with the switch lever.',
    risk_prevention: 'Diagram on page 57 shows the correct installation.',
    risk_occurrence: 5,
    risk_detection:
      'Manually moving the gantry to the home position and verifying that the switch clicks before the gantry hits a hard stop.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Design the mounting bracket with keyed features or pins that only allow it to be installed in the single, correct position.',
    opt_detection:
      "Add a check to the pre-flight list: 'Manually move gantry to trigger X and Y endstops. Do they click?'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 57, No evidence'
  },
  {
    id: 'FC_144',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Chain Mount] Remove Screws (p. 78)',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the Clockwork extruder mechanism.',
    func_processStep: 'Prepare the extruder motor for the chain mount.',
    func_workElement: 'Carefully remove two screws from the extruder motor.',
    fail_effect:
      '1. Your Plant: Damaged motor. 2. Ship-to Plant: N\/A. 3. End User: The user removes the wrong screws, specifically the long screws that hold the motor case together. The motor falls apart, potentially demagnetizing the rotor. The motor is now damaged or destroyed.',
    fail_severity: 7,
    fail_mode: 'Incorrect screws removed, motor disassembled.',
    fail_cause:
      'The assembler removes the four long case bolts instead of the two small screws on the front face of the motor.',
    risk_prevention:
      'The diagram on page 78 clearly indicates which two screws to remove.',
    risk_occurrence: 4,
    risk_detection: 'The motor falling apart is the detection.',
    risk_detScore: 2,
    risk_ap: 'M',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      "Add a large warning: 'CAUTION: Remove only the two small screws indicated. Do NOT remove the four long bolts that hold the motor together.'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 78, No evidence'
  },
  {
    id: 'FC_173',
    history: '',
    structure_processItem: 'Software and Firmware',
    structure_processStep: '[Firmware] Edit `printer.cfg` file',
    structure_workElement: 'Man',
    func_processItem: "Install and configure the printer's control software.",
    func_processStep:
      'Configure all printer hardware parameters in the Klipper `printer.cfg` text file.',
    func_workElement:
      'Set the correct stepper motor `rotation_distance` for the motion system.',
    fail_effect:
      '1. Your Plant: Incorrect part dimensions. 2. Ship-to Plant: N\/A. 3. End User: Printed parts are the wrong size (e.g., a 20mm cube prints as 40mm wide, or 10mm wide). The printer is not dimensionally accurate.',
    fail_severity: 7,
    fail_mode: 'Dimensional inaccuracy in X, Y, or Z.',
    fail_cause:
      'The user has the wrong `rotation_distance` for the motors, typically by a factor of 2, because their stepper drivers are set to a different microstepping level (e.g., 16) than the configuration file assumes (e.g., 32).',
    risk_prevention:
      'Using the sample configuration files which match the standard build.',
    risk_occurrence: 5,
    risk_detection:
      'Printing a calibration object of a known size and measuring it with calipers.',
    risk_detScore: 6,
    risk_ap: 'M',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Add an explanation in the configuration section of the relationship between microstepping, pulleys, and `rotation_distance` so users can calculate the correct value if they deviate from the standard build.',
    opt_detection:
      'Make printing and measuring a 20mm calibration cube a mandatory part of the initial calibration routine.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_180',
    history: '',
    structure_processItem: 'Electronics Sub-Assembly',
    structure_processStep: '[Test] Stepper Motor Function',
    structure_workElement: 'Material',
    func_processItem: 'Verify the integrity of the electronics assembly.',
    func_processStep: 'Verify all stepper motors function correctly.',
    func_workElement: 'The stepper motor is free of manufacturing defects.',
    fail_effect:
      '1. Your Plant: Rework, component replacement. 2. Ship-to Plant: N\/A. 3. End User: One stepper motor is defective (e.g., has a bad internal winding or a seized bearing). The corresponding axis will not move correctly or at all. The printer is non-functional until the motor is replaced.',
    fail_severity: 7,
    fail_mode: 'Stepper motor is dead on arrival (DOA).',
    fail_cause: 'The stepper motor has an internal manufacturing defect.',
    risk_prevention: 'Sourcing motors from reputable suppliers.',
    risk_occurrence: 3,
    risk_detection:
      'Testing each motor individually by connecting it to a known good driver channel before installing it in the printer.',
    risk_detScore: 8,
    risk_ap: 'M',
    risk_specialChar: 'SC',
    risk_filter: '',
    opt_preventive:
      'Kit suppliers to perform a basic functional check on motors before shipping.',
    opt_detection:
      "Add a diagnostic step to the manual: 'If an axis doesn't move, swap its motor connection with a known working axis at the controller board. If the problem moves with the motor, the motor is faulty.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_001',
    history: '',
    structure_processItem: 'Voron 2.4 Printer',
    structure_processStep: '[Initial Prep] Inventory Check of Kit',
    structure_workElement: 'Material',
    func_processItem:
      'Ensure all required components are available for the build.',
    func_processStep:
      'Verify that all components received in the kit match the Bill of Materials (BOM).',
    func_workElement:
      'Kit supplier provides the correct quantity and type of fasteners, bearings, and electronics.',
    fail_effect:
      '1. Your Plant: Assembly halted mid-process. 2. Ship-to Plant: N\/A. 3. End User: User discovers a critical part is missing or wrong halfway through the build, causing a multi-day delay while a replacement is sourced.',
    fail_severity: 6,
    fail_mode:
      'Incorrect component provided in kit (e.g., wrong bearing size, wrong screw length).',
    fail_cause:
      'Supplier kitting error; human or automated process picks the wrong part bin.',
    risk_prevention: "Supplier's internal quality control.",
    risk_occurrence: 5,
    risk_detection:
      'User manually inventories all received parts against the official Voron BOM before starting the build.',
    risk_detScore: 7,
    risk_ap: 'M',
    opt_preventive:
      'Kit supplier to implement barcode scanning for all components during the kitting process to verify parts.',
    opt_detection:
      'Provide a detailed, illustrated component identification guide in the manual to make inventory checks easier for the user.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_002',
    history: '',
    structure_processItem: 'Voron 2.4 Printer',
    structure_processStep: '[Initial Prep] Workspace Preparation',
    structure_workElement: 'Environment',
    func_processItem:
      'Ensure all required components are available for the build.',
    func_processStep:
      'Establish a suitable workspace for a multi-day precision assembly project.',
    func_workElement:
      'Workspace provides adequate, even lighting to see small components and features.',
    fail_effect:
      '1. Your Plant: Rework due to mis-assembly. 2. Ship-to Plant: N\/A. 3. End User: Poor lighting leads to assembler misreading a diagram, installing a part backwards, or missing a small component like a shim, causing functional failures later.',
    fail_severity: 6,
    fail_mode: 'Component misassembled due to poor visibility.',
    fail_cause:
      'Inadequate ambient lighting in the workspace, combined with shadows, obscures details on parts or in the manual.',
    risk_prevention: 'General user knowledge.',
    risk_occurrence: 7,
    risk_detection: 'Visual inspection of subassemblies.',
    risk_detScore: 8,
    risk_ap: 'M',
    opt_preventive:
      "Add a 'Workspace Requirements' section to the introduction, recommending a well-lit area and the use of a headlamp or task light.",
    opt_detection:
      'Recommend taking photos of complex sub-assemblies and zooming in to verify correctness against the manual.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_006',
    history: '',
    structure_processItem: 'Printed Parts',
    structure_processStep: '[Part Printing] Printing the parts',
    structure_workElement: 'Machine',
    func_processItem: 'Provide the structural components for the printer.',
    func_processStep: 'Fabricate all non-metal components using a 3D printer.',
    func_workElement:
      "The printer's extruder and motion system operate reliably for the duration of long prints.",
    fail_effect:
      "1. Your Plant: Scrapped part, failed print. 2. Ship-to Plant: N\/A. 3. End User: A mechanical failure on the user's current printer (e.g., clogged nozzle, loose belt) causes a print to fail hours into the process. The user wastes significant time and material.",
    fail_severity: 6,
    fail_mode: 'Print fails mid-way due to existing printer fault.',
    fail_cause:
      'The printer being used to create the Voron parts has a pre-existing, undiagnosed mechanical issue (e.g., heat creep causing a nozzle clog after 2 hours of printing).',
    risk_prevention: "User's own maintenance of their printing equipment.",
    risk_occurrence: 6,
    risk_detection:
      'Monitoring the print for signs of failure (e.g., spaghetti detection software, visual checks).',
    risk_detScore: 8,
    risk_ap: 'M',
    opt_preventive:
      'Recommend that the user prints a series of calibration and torture-test models on their machine to verify its reliability before starting the multi-day Voron part prints.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_017',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep:
      '[Z Drive Assembly] Install Heat Set Inserts (p. 19)',
    structure_workElement: 'Man',
    func_processItem:
      'Assembly of four identical Z-axis belt drive modules to lift the gantry.',
    func_processStep:
      'Install threaded inserts into the 3D printed Z drive housings using a heated soldering iron.',
    func_workElement:
      'Apply heat and pressure vertically to melt the plastic and seat the insert flush and perpendicular to the part surface.',
    fail_effect:
      '1. Your Plant: Subsequent assembly with screws is difficult, potential for scrapping the printed part. 2. Ship-to Plant: N\/A. 3. End User: Screws are crooked, leading to misalignment of assembled parts (e.g., motor mounts), causing binding or uneven belt tension.',
    fail_severity: 6,
    fail_mode: 'Heat set insert installed crooked.',
    fail_cause:
      'Assembler applies uneven or sideways pressure with the soldering iron during installation, causing the insert to tilt as the plastic melts.',
    risk_prevention:
      'Instructional diagram showing the location of inserts. Community support (Discord) is recommended for procedure.',
    risk_occurrence: 7,
    risk_detection: 'Visual inspection of the installed insert.',
    risk_detScore: 8,
    risk_ap: 'M',
    opt_preventive:
      'Provide a 3D printable jig that holds the insert and guides the soldering iron tip to ensure vertical insertion.',
    opt_detection:
      'Create a go\/no-go gauge using a long M3 screw to visually check for perpendicularity against a square.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 19, No evidence for detection'
  },
  {
    id: 'FC_019',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep:
      '[Z Drive Assembly] Install Heat Set Inserts (p. 19)',
    structure_workElement: 'Machine',
    func_processItem:
      'Assembly of four identical Z-axis belt drive modules to lift the gantry.',
    func_processStep:
      'Install threaded inserts into the 3D printed Z drive housings using a heated soldering iron.',
    func_workElement:
      'Soldering iron maintains a temperature high enough to melt ABS plastic smoothly without burning it.',
    fail_effect:
      '1. Your Plant: Damaged, melted, or burnt printed part (scrap). 2. Ship-to Plant: N\/A. 3. End User: Weakened part structure around the insert, leading to stress cracks and eventual failure of the component.',
    fail_severity: 6,
    fail_mode: 'Plastic around insert is melted, deformed, or burnt.',
    fail_cause:
      'Soldering iron temperature is too high, causing excessive melting and degradation of the ABS plastic.',
    risk_prevention:
      'General knowledge and community support regarding soldering iron use.',
    risk_occurrence: 6,
    risk_detection: 'Visual inspection of the part after installation.',
    risk_detScore: 8,
    risk_ap: 'M',
    opt_preventive:
      'Add a section to the manual specifying a recommended temperature range for installing heat-set inserts into ABS (e.g., 240-260°C).',
    opt_detection:
      'Improve visual work instructions to show what a good vs. a bad (overheated) insert installation looks like.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_027',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep:
      '[Deck Panel & Z Drives] Install Z Drive Modules (p. 25-26)',
    structure_workElement: 'Man',
    func_processItem: 'Mount the four Z-drive assemblies to the frame.',
    func_processStep:
      'Attach the four Z-drive\/motor assemblies to the Z-axis linear rail carriages.',
    func_workElement:
      'Tape the linear rail carriages in place before flipping the frame to prevent them from sliding off and getting damaged.',
    fail_effect:
      '1. Your Plant: Damaged linear rail carriage (ball bearings fall out), requiring replacement. Lost time. 2. Ship-to Plant: N\/A. 3. End User: Carriage slides off the rail, ball bearings are lost\/contaminated, carriage is damaged. Printer build is halted until a replacement rail or carriage is sourced.',
    fail_severity: 6,
    fail_mode: 'Linear rail carriage slides off rail and is damaged.',
    fail_cause:
      "Assembler does not heed the advice to 'tape the carriages in place so they don’t fall off the ends of the rails when you flip the machine!'.",
    risk_prevention: 'Preventative advice\/warning in the manual (p. 25).',
    risk_occurrence: 5,
    risk_detection: 'N\/A - this is a sudden event.',
    risk_detScore: 10,
    risk_ap: 'M',
    opt_preventive:
      'Provide 3D printable end-stops that can be temporarily clipped onto the ends of the linear rails to physically prevent the carriages from sliding off.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 25, No evidence'
  },
  {
    id: 'FC_061',
    history: '',
    structure_processItem: 'Belting Z Drive',
    structure_processStep: '[Belt Routing] Route Z-Belts (p. 86)',
    structure_workElement: 'Man',
    func_processItem:
      'Synchronize the four Z-drives using a single continuous belt.',
    func_processStep:
      'Route the Z-drive belt around all four Z-drive modules and the upper Z-idlers.',
    func_workElement: 'Ensure the belt is routed correctly without any twists.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: A twisted belt will wear very quickly and may cause vibrations in the Z-axis, leading to print quality issues (Z-banding).',
    fail_severity: 6,
    fail_mode: 'Z-belt is twisted.',
    fail_cause:
      'During the long and complex routing process, the assembler inadvertently flips the belt over, introducing a 180-degree twist.',
    risk_prevention: 'Diagrams on pages 86-87 show the belt path.',
    risk_occurrence: 7,
    risk_detection:
      'Careful visual inspection of the entire belt path before it is joined and tensioned.',
    risk_detScore: 8,
    risk_ap: 'M',
    opt_preventive:
      'Use a belt that has markings on one side to make twists more obvious.',
    opt_detection:
      "Add a specific check: 'Run your finger along the entire top surface of the belt. It should feel smooth all the way around. If you encounter the toothed side, you have a twist.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 86-87, No evidence'
  },
  {
    id: 'FC_067',
    history: '',
    structure_processItem: 'Panels',
    structure_processStep: '[Top Panel] Install Top Panel (p. 103)',
    structure_workElement: 'Man',
    func_processItem: 'Enclose the build chamber with panels.',
    func_processStep: 'Install the top panel with foam tape to create a seal.',
    func_workElement: 'Use correctly sized panel clips to secure the panel.',
    fail_effect:
      '1. Your Plant: N\/A. 2. Ship-to Plant: N\/A. 3. End User: The top panel is not sealed. Heat escapes from the chamber, preventing the printer from maintaining the high ambient temperatures needed to print materials like ABS without warping.',
    fail_severity: 6,
    fail_mode: 'Poor seal around top panel.',
    fail_cause:
      'The assembler uses foam tape that is too thin, or uses the standard panel clips which do not provide enough clamping force for the added thickness of the tape.',
    risk_prevention:
      "Note in manual: 'Depending on the height of the foam tape...you will likely have to use larger sized clips...' (p. 103).",
    risk_occurrence: 7,
    risk_detection: 'Visual inspection for gaps around the panel.',
    risk_detScore: 8,
    risk_ap: 'M',
    opt_preventive:
      "Specify a recommended foam tape thickness and provide the STL files for the corresponding 'larger sized clips' directly in the main repository.",
    opt_detection:
      'Instruct the user to use a smoke pen or incense stick around the perimeter of the panel (with exhaust fan on) to check for leaks.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 103, No evidence'
  },
  {
    id: 'FC_075',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep: '[Cable Chain Z Axis] Install Cable Chain (p. 130)',
    structure_workElement: 'Man',
    func_processItem: 'Manage and protect wiring during printer motion.',
    func_processStep:
      'Assemble and install the cable chains for X, Y, and Z axes.',
    func_workElement:
      'Install the Z-axis cable chain so that it has enough slack and correct curvature to move through the full range of motion without binding.',
    fail_effect:
      "1. Your Plant: Restricted motion during testing. 2. Ship-to Plant: N\/A. 3. End User: The cable chain binds or pulls tight at the extremes of Z travel, physically restricting the gantry's movement. This can cause skipped motor steps or put strain on the wires inside.",
    fail_severity: 6,
    fail_mode: 'Z-axis cable chain binds.',
    fail_cause:
      'The assembler installs the chain with the incorrect orientation or does not leave enough slack, causing it to bend improperly.',
    risk_prevention:
      'Diagram on page 130 shows the correct installation shape.',
    risk_occurrence: 6,
    risk_detection:
      'Manually moving the gantry through its full range of Z travel after installation to check for binding.',
    risk_detScore: 5,
    risk_ap: 'M',
    opt_preventive:
      'Provide a 3D printable jig to hold the cable chain in the correct curve while it is being mounted.',
    opt_detection:
      "Add an explicit instruction: 'After installing the chain, manually move the gantry from the very bottom to the very top of the frame. The chain should move smoothly without catching or pulling tight.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 130, No evidence'
  },
  {
    id: 'FC_080',
    history: '',
    structure_processItem: 'Software and Firmware',
    structure_processStep: '[Firmware] Edit `printer.cfg` file',
    structure_workElement: 'Man',
    func_processItem: "Install and configure the printer's control software.",
    func_processStep:
      'Configure all printer hardware parameters in the Klipper `printer.cfg` text file.',
    func_workElement: 'Ensure the configuration file has no syntax errors.',
    fail_effect:
      '1. Your Plant: Software errors. 2. Ship-to Plant: N\/A. 3. End User: The Klipper firmware service fails to start, reporting a syntax error. The user, who may be unfamiliar with the format, cannot find the error (e.g., a typo, incorrect indentation, a missing colon). The printer is non-functional.',
    fail_severity: 6,
    fail_mode: 'Syntax error in `printer.cfg` prevents firmware from starting.',
    fail_cause:
      'User makes a typographical error while editing the text-based configuration file.',
    risk_prevention: 'Using the sample configuration files as a template.',
    risk_occurrence: 7,
    risk_detection:
      'The error message provided by Klipper upon startup, which usually indicates the line number of the error.',
    risk_detScore: 6,
    risk_ap: 'M',
    opt_preventive:
      'Provide a web-based configuration tool that generates a valid `printer.cfg` file based on user selections, eliminating manual text editing.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 135, No evidence'
  },
  {
    id: 'FC_082',
    history: '',
    structure_processItem: 'Initial Calibration',
    structure_processStep: '[Calibration] PID Tune Heaters',
    structure_workElement: 'Machine',
    func_processItem:
      'Calibrate all printer subsystems for optimal performance.',
    func_processStep:
      'Perform a PID autotune for the hotend and heated bed for stable temperatures.',
    func_workElement:
      'The PID tuning algorithm requires stable power and a responsive heater\/thermistor to converge on correct values.',
    fail_effect:
      '1. Your Plant: Calibration failure. 2. Ship-to Plant: N\/A. 3. End User: The heater temperature overshoots the target significantly and then oscillates wildly. This can trigger thermal runaway errors or cause inconsistent extrusion, leading to banding in prints.',
    fail_severity: 6,
    fail_mode: 'Heater temperature is unstable after PID tuning.',
    fail_cause:
      'The PID tune was performed with the part cooling fan on, which artificially cooled the heater block. When printing with the fan off, the learned PID values are incorrect and cause overshoot.',
    risk_prevention: 'Klipper documentation on PID tuning.',
    risk_occurrence: 7,
    risk_detection:
      'Observing the temperature graph in the web interface after tuning to check for stability.',
    risk_detScore: 7,
    risk_ap: 'M',
    opt_preventive:
      "Add a dedicated 'PID Tuning' section to the manual, explicitly instructing the user to perform the hotend tune with the part cooling fan OFF.",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 135, No evidence'
  },
  {
    id: 'FC_091',
    history: '',
    structure_processItem: 'Gantry Assembly',
    structure_processStep: '[Microswitch Pod] Assemble Endstop Switch (p. 50)',
    structure_workElement: 'Man',
    func_processItem: 'Provide endstop signaling for the X\/Y axes.',
    func_processStep:
      'Assemble the X\/Y endstop microswitch into its printed pod.',
    func_workElement:
      'Use M2x10 self-tapping screws to secure the microswitch.',
    fail_effect:
      '1. Your Plant: Stripped hole in printed part, requiring reprint or repair. 2. Ship-to Plant: N\/A. 3. End User: The microswitch is loose in its housing. The homing position will be inconsistent, leading to registration errors in prints or the nozzle crashing into the side of the bed.',
    fail_severity: 6,
    fail_mode: 'Microswitch loose in pod.',
    fail_cause:
      'The assembler overtightens the M2 self-tapping screws, stripping the threads formed in the plastic.',
    risk_prevention: 'General assembly skill.',
    risk_occurrence: 7,
    risk_detection:
      'Wiggling the microswitch by hand after installation to check for tightness.',
    risk_detScore: 5,
    risk_ap: 'M',
    opt_preventive:
      'Redesign the pod to use heat-set inserts and machine screws (M2x8) instead of self-tapping screws, which is a more robust and repairable method.',
    opt_detection:
      "Add a note: 'Tighten self-tapping screws until snug. Do not overtighten or the plastic will strip.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_093',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[B Belt Routing] Secure Belts (p. 65)',
    structure_workElement: 'Man',
    func_processItem: 'Securely anchor the belts to the toolhead carriage.',
    func_processStep: 'Secure the belts into the carriage clamps.',
    func_workElement:
      'Tighten one side of the carriage clamps down flush first to provide an anchor point for tensioning from the other side.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: It is difficult to get equal tension on both belts, and the process can pull the gantry out of square. Prints may be skewed.',
    fail_severity: 6,
    fail_mode: 'Gantry pulled out of square during belt tensioning.',
    fail_cause:
      'The assembler attempts to tension both sides simultaneously instead of following the recommended procedure of anchoring one side first.',
    risk_prevention: 'Instructional note on page 65 recommends the procedure.',
    risk_occurrence: 7,
    risk_detection: 'Measuring gantry squareness after tensioning.',
    risk_detScore: 8,
    risk_ap: 'M',
    opt_preventive:
      'Provide a 3D printable tool that temporarily locks the gantry in a square position while the belts are tensioned.',
    opt_detection:
      'Add a check after tensioning to measure the distance from the Y-joints to the frame on both sides to ensure they are equal.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 65, No evidence'
  },
  {
    id: 'FC_094',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep:
      '[Clockwork Mounting] Mount Extruder to Carriage (p. 80)',
    structure_workElement: 'Man',
    func_processItem: 'Mount the extruder assembly to the toolhead.',
    func_processStep:
      'Attach the Clockwork extruder assembly to the hotend housing\/carriage assembly.',
    func_workElement:
      'Use the correct length screws (M3x16, M3x30, M3x20) in their specified locations.',
    fail_effect:
      '1. Your Plant: Damaged parts, rework. 2. Ship-to Plant: N\/A. 3. End User: Using a screw that is too long can bottom out in the hole, cracking the printed part or preventing it from being fully tightened. Using a screw that is too short will result in insufficient thread engagement, leading to a loose assembly that can fall apart.',
    fail_severity: 6,
    fail_mode: 'Incorrect length mounting screw used.',
    fail_cause:
      'The assembler mixes up the various M3 screws and uses, for example, an M3x30 where an M3x20 is specified.',
    risk_prevention:
      'Diagram on page 80 clearly labels the different screw lengths and their locations.',
    risk_occurrence: 7,
    risk_detection:
      'Measuring screws before installation or noticing that a screw is too long\/short during tightening.',
    risk_detScore: 7,
    risk_ap: 'M',
    opt_preventive:
      'Package the screws for this step in separate, labeled bags to reduce the chance of mixing them up.',
    opt_detection:
      "Add a note: 'If a screw becomes very tight before the parts are flush, it is too long. Stop and check the screw length.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 80, No evidence'
  },
  {
    id: 'FC_097',
    history: '',
    structure_processItem: 'Spool Holder',
    structure_processStep:
      '[Spool Holder Assembly] Insert PTFE tubing (p. 109)',
    structure_workElement: 'Man',
    func_processItem: 'Hold and guide the filament spool.',
    func_processStep: 'Assemble the spool holder.',
    func_workElement:
      'Insert two pieces of PTFE tubing for the spool to roll on.',
    fail_effect:
      '1. Your Plant: N\/A. 2. Ship-to Plant: N\/A. 3. End User: The spool does not rotate freely, as it is rubbing plastic-on-plastic. The extruder motor has to pull much harder to unwind the filament, which can lead to under-extrusion, extruder skipping, and failed prints.',
    fail_severity: 6,
    fail_mode: 'PTFE inserts for spool holder forgotten.',
    fail_cause:
      'Assembler thinks the spool holder is complete without the tubes and overlooks the instruction to install them.',
    risk_prevention: 'Diagram on page 109 shows the PTFE inserts.',
    risk_occurrence: 7,
    risk_detection:
      'Test spinning a filament spool on the holder after assembly.',
    risk_detScore: 5,
    risk_ap: 'M',
    opt_preventive:
      'Use a different color for the PTFE tubes in the diagram to make them stand out more from the printed part.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 109, No evidence'
  },
  {
    id: 'FC_115',
    history: '',
    structure_processItem: 'Printed Parts',
    structure_processStep: '[Introduction] Finishing Printed Parts (p. 7)',
    structure_workElement: 'Man',
    func_processItem: 'Provide the structural components for the printer.',
    func_processStep: 'Prepare printed parts for assembly.',
    func_workElement:
      'Perform light sanding or finishing to ensure parts sit flush with each other.',
    fail_effect:
      "1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: Mating parts do not sit flush due to printing artifacts like an 'elephant's foot'. This creates unintended gaps and misalignments in critical assemblies like the XY joints or motor mounts, leading to a non-square gantry or binding motion.",
    fail_severity: 6,
    fail_mode: 'Parts do not mate flush.',
    fail_cause:
      'The assembler does not perform any post-processing on the printed parts to remove imperfections from the mating surfaces.',
    risk_prevention:
      "Instructional note: 'You may find that you need to do some light sanding to get some parts to sit flush with each other.' (p. 7).",
    risk_occurrence: 7,
    risk_detection:
      'Visual and tactile check of part fitment before adding fasteners.',
    risk_detScore: 7,
    risk_ap: 'M',
    opt_preventive:
      'Provide a deburring tool in the kit. Add pictures showing common areas that require sanding (e.g., the first layer of a print).',
    opt_detection:
      'Instruct the user to hold the mating parts together up to a light source to check for gaps.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 7, No evidence'
  },
  {
    id: 'FC_122',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Main Body] Drive Shaft Clearance (p. 73)',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the Clockwork extruder mechanism.',
    func_processStep: 'Install the drive gear assembly into the main body.',
    func_workElement:
      'Sand the face of the drive shaft if required to provide clearance.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The drive shaft rubs on the extruder motor, causing friction. The user sands the shaft face, but does not keep it flat and square. The shaft now wobbles as it rotates, causing inconsistent filament grip and extrusion pulsing.',
    fail_severity: 6,
    fail_mode: 'Drive shaft face sanded non-square.',
    fail_cause:
      'Assembler sands the shaft by hand without a guide, removing material unevenly.',
    risk_prevention: 'Instruction to sand if required (p. 73).',
    risk_occurrence: 5,
    risk_detection:
      'Visual inspection while rotating the shaft to look for wobble (runout).',
    risk_detScore: 7,
    risk_ap: 'M',
    opt_preventive:
      "Instruct the user on a proper sanding technique: 'Place a sheet of sandpaper on a flat surface (like glass) and rub the shaft face against it in a figure-8 pattern to keep it flat.'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 73, No evidence'
  },
  {
    id: 'FC_125',
    history: '',
    structure_processItem: 'Electronics Mounting',
    structure_processStep:
      '[DIN Mounting Electronics] Mount Components (p. 123)',
    structure_workElement: 'Man',
    func_processItem:
      'Mount all electronic components securely to the DIN rails.',
    func_processStep: 'Mount all component brackets onto the DIN rails.',
    func_workElement: 'Space components to allow for airflow and wire routing.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: Components are packed too tightly together. Airflow from the cooling fans is blocked, leading to overheating of the controller or PSU. It is also extremely difficult to route wires neatly and safely.',
    fail_severity: 6,
    fail_mode: 'Poor component layout on DIN rails.',
    fail_cause:
      'The assembler does not plan the layout in advance and simply starts mounting components at one end, leaving no room for wiring or airflow at the other end.',
    risk_prevention: 'Diagram on p. 118 shows a recommended layout.',
    risk_occurrence: 7,
    risk_detection: 'Visual review of the layout before starting to wire.',
    risk_detScore: 8,
    risk_ap: 'M',
    opt_preventive:
      'Provide a 1:1 scale printable template for the deck panel that shows the optimal locations for all the electronic components.',
    opt_detection:
      'Instruct the user to place all components on the rails without fastening them first to check the layout and spacing.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 118, No evidence'
  },
  {
    id: 'FC_132',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep:
      '[Carriage Mounting] Using Button Head Option (p. 62)',
    structure_workElement: 'Man',
    func_processItem:
      'Assembly of the Afterburner toolhead, which holds the hotend and extruder.',
    func_processStep:
      'Mount the assembled X-carriage onto the dual linear rails of the gantry.',
    func_workElement:
      'Use M3x8 SHCS (Socket Head Cap Screws) to secure the carriage.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The head of the socket head cap screw interferes with the path of the timing belt. The belt will rub on the screw head, quickly becoming damaged and eventually failing.',
    fail_severity: 6,
    fail_mode: 'Belt rubs on carriage mounting screw.',
    fail_cause:
      'The assembler uses standard M3x8 SHCS as instructed, but does not notice the interference. The optional M3x8 BHCS (Button Head) with a lower profile head is not used.',
    risk_prevention:
      "Note about the button head option is provided: 'It can make belting the gantry in later steps a little easier' (p. 62).",
    risk_occurrence: 6,
    risk_detection:
      'Visual inspection of the belt path after belt installation, looking for clearance issues.',
    risk_detScore: 8,
    risk_ap: 'M',
    opt_preventive:
      "Change the primary instruction to *require* M3x8 BHCS in this location, and make SHCS the 'if you don't have them' option. This prioritizes the better-fitting part.",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 62, No evidence'
  },
  {
    id: 'FC_137',
    history: '',
    structure_processItem: 'Voron 2.4 Frame',
    structure_processStep: '[Frame Assembly] General',
    structure_workElement: 'Man',
    func_processItem:
      "Assembly of a rigid and square foundational structure for the printer's motion system.",
    func_processStep: 'Assemble the frame from 2020 aluminum extrusions.',
    func_workElement: 'Use correct fasteners as specified in the diagrams.',
    fail_effect:
      '1. Your Plant: Rework, damaged parts. 2. Ship-to Plant: N\/A. 3. End User: Incorrect fastener length used. Too long: screw bottoms out, damages threads, or prevents proper tightening. Too short: insufficient thread engagement, joint comes loose.',
    fail_severity: 6,
    fail_mode: 'Incorrect fastener used in frame assembly.',
    fail_cause:
      'Assembler uses an M5x10 screw where an M5x16 is required, or vice-versa, due to mixing up parts.',
    risk_prevention:
      'Diagrams specify the correct fastener for each step (e.g., p. 12, p. 15).',
    risk_occurrence: 7,
    risk_detection:
      'Visual comparison of screw length against diagram before use.',
    risk_detScore: 8,
    risk_ap: 'M',
    opt_preventive:
      'Package hardware for each major assembly section in separate, clearly labeled bags.',
    opt_detection:
      'Add a 1:1 scale diagram of all required fasteners to the first page of each section, so the user can visually verify they have the correct one.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 12, 15, No evidence'
  },
  {
    id: 'FC_139',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep: '[Z Drive Motor Mounts] Attach Motor Mounts (p. 23)',
    structure_workElement: 'Man',
    func_processItem:
      'Assembly of four identical Z-axis belt drive modules to lift the gantry.',
    func_processStep:
      'Attach the printed motor mount to the stepper motor using four M3x8 SHCS.',
    func_workElement:
      'Tighten the four M3 screws in a star pattern to ensure the motor sits flush against the mount.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The motor is mounted at a slight angle relative to the printed part. This causes the motor shaft and pulley to be misaligned with the rest of the Z-drive assembly, leading to belt wear and potential binding.',
    fail_severity: 6,
    fail_mode: 'Motor mounted crooked on printed mount.',
    fail_cause:
      "The assembler tightens one screw fully before starting the others, which can 'pull' the motor into a tilted position.",
    risk_prevention: 'Standard assembly practice.',
    risk_occurrence: 7,
    risk_detection:
      'Visually checking for a gap between the motor face and the mount after tightening.',
    risk_detScore: 8,
    risk_ap: 'M',
    opt_preventive:
      "Add an instruction: 'Lightly tighten all four screws first, then tighten them fully in a crossing or star pattern to ensure the motor mounts flat.'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_141',
    history: '',
    structure_processItem: 'AB Drive Modules',
    structure_processStep:
      '[Completed AB Drive Units] Heat Set Inserts (p. 45)',
    structure_workElement: 'Man',
    func_processItem:
      'Assembly of the A and B motor drive modules for the gantry.',
    func_processStep: 'Complete the assembly of the A drive and B drive units.',
    func_workElement:
      'Install heat set inserts into the top of the drive modules.',
    fail_effect:
      '1. Your Plant: Rework required, may damage part. 2. Ship-to Plant: N\/A. 3. End User: The heat set insert is installed too deep into the plastic part. The mounting screw for the gantry extrusion will not have enough thread engagement, or the extrusion will not sit flush, causing gantry misalignment.',
    fail_severity: 6,
    fail_mode: 'Heat set insert installed too deep.',
    fail_cause:
      'The assembler applies too much heat or pressure, pushing the insert past the surface of the printed part.',
    risk_prevention: 'Assembly diagram shows the inserts (p. 45).',
    risk_occurrence: 6,
    risk_detection:
      'Visual inspection to ensure the top of the insert is flush with the plastic surface.',
    risk_detScore: 8,
    risk_ap: 'M',
    opt_preventive:
      'Provide a 3D printable tool that fits over the soldering iron tip and acts as a depth stop, preventing over-insertion.',
    opt_detection:
      'Instruct the user to use a straight edge across the surface to verify the insert is flush.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 45, No evidence'
  },
  {
    id: 'FC_150',
    history: '',
    structure_processItem: 'Printed Parts',
    structure_processStep: '[Part Printing] Post-Processing',
    structure_workElement: 'Man',
    func_processItem: 'Provide dimensionally accurate structural components.',
    func_processStep: 'Clean and prepare printed parts for assembly.',
    func_workElement:
      'Use a drill bit or reamer to clean out holes to the correct diameter for shafts or bearings.',
    fail_effect:
      "1. Your Plant: Damaged printed part or bearing. 2. Ship-to Plant: N\/A. 3. End User: A bearing is forced into an undersized hole, cracking the printed part. Or, the bearing's outer race is deformed, causing it to run rough, leading to motion artifacts.",
    fail_severity: 6,
    fail_mode: 'Hole for bearing\/shaft is reamed oversized or crooked.',
    fail_cause:
      'The assembler uses a hand drill to clean out a hole, but does so at an angle or with an oversized bit, resulting in a loose or misaligned fit.',
    risk_prevention: 'General recommendation for finishing work (p. 7).',
    risk_occurrence: 7,
    risk_detection:
      'Test fitting the bearing or shaft. A loose fit is a clear indicator of an oversized hole.',
    risk_detScore: 6,
    risk_ap: 'M',
    opt_preventive:
      'Recommend using a drill press for reaming operations to ensure perpendicularity. Provide a set of go\/no-go printed gauges to check hole sizes before installing components.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 7, No evidence'
  },
  {
    id: 'FC_151',
    history: '',
    structure_processItem: 'Gantry Assembly',
    structure_processStep:
      '[Left\/Right XY Joint Assembly] Part Identification',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the gantry, which carries the toolhead.',
    func_processStep:
      'Assemble the left and right XY joints which hold the gantry extrusions together.',
    func_workElement:
      'Correctly identify and use the mirrored left-hand and right-hand printed parts.',
    fail_effect:
      '1. Your Plant: Significant rework. 2. Ship-to Plant: N\/A. 3. End User: The user assembles two left-hand XY joints instead of a left and a right. The gantry cannot be assembled correctly, belt paths are wrong, and the entire gantry sub-assembly must be taken apart and rebuilt.',
    fail_severity: 6,
    fail_mode: 'Mirrored parts (left\/right XY joints) are mixed up.',
    fail_cause:
      'The assembler does not notice the subtle differences between the left and right versions of the parts and assembles them incorrectly.',
    risk_prevention:
      'Separate STL files for left and right parts. Diagrams on p. 48-49 show both versions.',
    risk_occurrence: 6,
    risk_detection:
      'Comparing the assembled parts to the diagrams before installing them on the gantry.',
    risk_detScore: 8,
    risk_ap: 'M',
    opt_preventive:
      "Add an 'L' and 'R' embossed feature onto the 3D models of the XY joints for easy identification.",
    opt_detection:
      "Create a pre-gantry assembly checklist: 'Have you identified the LEFT and RIGHT XY Joints? They are not identical.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 48-49, No evidence'
  },
  {
    id: 'FC_160',
    history: '',
    structure_processItem: 'Initial Calibration',
    structure_processStep: '[First Print] Z-Offset Calibration',
    structure_workElement: 'Man',
    func_processItem:
      'Calibrate all printer subsystems for optimal performance.',
    func_processStep:
      'Set the correct distance between the nozzle and the build plate for the first layer.',
    func_workElement: 'Accurately set the Z-offset value in the firmware.',
    fail_effect:
      "1. Your Plant: Failed test prints. 2. Ship-to Plant: N\/A. 3. End User: The Z-offset is set too high. The first layer does not adhere to the build plate, leading to a tangled mess of filament ('spaghetti') and a failed print.",
    fail_severity: 6,
    fail_mode: 'First layer does not adhere (Z-offset too high).',
    fail_cause:
      'The user performs the Z-offset calibration incorrectly, leaving too large a gap between the nozzle and the bed.',
    risk_prevention: 'Klipper documentation on probe calibration.',
    risk_occurrence: 7,
    risk_detection:
      'Closely observing the first layer of a test print. The extruded lines should be slightly squished, not round beads.',
    risk_detScore: 6,
    risk_ap: 'M',
    opt_preventive:
      'Include a dedicated, illustrated guide in the manual for setting the Z-offset, showing pictures of what a good, too-high, and too-low first layer looks like.',
    opt_detection:
      "Recommend 'live tuning' the Z-offset during the skirt portion of the first print to dial it in perfectly.",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 135, No evidence'
  },
  {
    id: 'FC_161',
    history: '',
    structure_processItem: 'Initial Calibration',
    structure_processStep: '[First Print] Z-Offset Calibration',
    structure_workElement: 'Man',
    func_processItem:
      'Calibrate all printer subsystems for optimal performance.',
    func_processStep:
      'Set the correct distance between the nozzle and the build plate for the first layer.',
    func_workElement: 'Accurately set the Z-offset value in the firmware.',
    fail_effect:
      '1. Your Plant: Damage to build surface or nozzle. 2. Ship-to Plant: N\/A. 3. End User: The nozzle grinds into the PEI or other build surface, causing permanent damage. The extruder may start clicking as it cannot push out filament. Print fails.',
    fail_severity: 6,
    fail_mode: 'Nozzle grinds into build plate (Z-offset too low).',
    fail_cause:
      'The user performs the Z-offset calibration incorrectly, setting the nozzle too close to the bed.',
    risk_prevention: 'Klipper documentation on probe calibration.',
    risk_occurrence: 7,
    risk_detection:
      'Observing the first layer. The filament looks extremely thin and translucent, or no filament is extruded at all. The extruder motor may be skipping.',
    risk_detScore: 6,
    risk_ap: 'M',
    opt_preventive:
      'Include a dedicated, illustrated guide in the manual for setting the Z-offset, showing pictures of what a good, too-high, and too-low first layer looks like.',
    opt_detection:
      "Advise the user to start with a known-high Z-offset and slowly lower it during a test print until it's correct.",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 135, No evidence'
  },
  {
    id: 'FC_164',
    history: '',
    structure_processItem: 'Spool Holder',
    structure_processStep: '[Filament Path] Filament Routing',
    structure_workElement: 'Man',
    func_processItem: 'Hold and guide the filament spool.',
    func_processStep:
      'Provide a smooth, unconstrained path for the filament from the spool to the extruder.',
    func_workElement:
      'Route the Bowden tube filament guide to avoid sharp bends or snag points.',
    fail_effect:
      '1. Your Plant: Failed test prints. 2. Ship-to Plant: N\/A. 3. End User: The filament has too much friction in its path. The extruder motor skips, unable to pull the filament, resulting in under-extrusion and failed prints.',
    fail_severity: 6,
    fail_mode: 'Excessive friction in filament path.',
    fail_cause:
      'The assembler routes the reverse-Bowden tube with too sharp a bend, or the filament spool is binding on the holder, causing high drag on the filament.',
    risk_prevention:
      'Diagrams for spool holder and PTFE routing (p. 110, 117).',
    risk_occurrence: 6,
    risk_detection:
      'Manually pulling filament through the entire path by hand to feel for resistance.',
    risk_detScore: 7,
    risk_ap: 'M',
    opt_preventive:
      'Provide recommendations for optimal placement of the spool holder and routing of the guide tube to minimize bends.',
    opt_detection:
      "Add a check: 'Pull filament through the guide tube by hand. It should move with very little effort. If it feels tight, check for sharp bends or debris in the tube.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 110, 117, No evidence'
  },
  {
    id: 'FC_169',
    history: '',
    structure_processItem: 'Maintenance',
    structure_processStep: '[Periodic Maintenance] Nozzle Wear',
    structure_workElement: 'Machine',
    func_processItem: 'Reliably produce high-quality 3D prints.',
    func_processStep: 'Maintain a consistent extrusion diameter.',
    func_workElement:
      'The nozzle orifice must remain round and at its specified diameter (e.g., 0.4mm).',
    fail_effect:
      '1. Your Plant: N\/A. 2. Ship-to Plant: N\/A. 3. End User: Print quality degrades, with poor bridging, stringing, and inaccurate dimensions. The user may chase software settings for hours without realizing the hardware has worn out.',
    fail_severity: 6,
    fail_mode: 'Nozzle orifice worn out.',
    fail_cause:
      'Printing with abrasive filaments (e.g., carbon fiber-filled, glow-in-the-dark) rapidly erodes the inside of a standard brass nozzle, widening the orifice.',
    risk_prevention: 'General community knowledge.',
    risk_occurrence: 5,
    risk_detection:
      'Visual inspection of the nozzle tip with a magnifying glass. Comparing a new extrusion to an old one.',
    risk_detScore: 9,
    risk_ap: 'M',
    opt_preventive:
      'Add a note to the manual recommending the use of a hardened steel or other wear-resistant nozzle if printing abrasive materials, and to treat nozzles as consumable items.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_170',
    history: '',
    structure_processItem: 'Software and Firmware',
    structure_processStep: '[Software Update] Klipper Update',
    structure_workElement: 'Man',
    func_processItem: "Install and configure the printer's control software.",
    func_processStep: 'Keep the Klipper firmware and host software up to date.',
    func_workElement:
      'Follow correct procedure for updating, including re-flashing the microcontroller if required.',
    fail_effect:
      '1. Your Plant: Software incompatibility. 2. Ship-to Plant: N\/A. 3. End User: The printer stops working after a software update, reporting a version mismatch error. The printer is non-functional until the microcontroller is re-flashed with the new firmware version.',
    fail_severity: 6,
    fail_mode: 'Firmware\/software version mismatch after update.',
    fail_cause:
      'The user updates the Klipper host software on the Raspberry Pi, but does not recompile and re-flash the firmware on the main controller board. The new host software is incompatible with the old firmware.',
    risk_prevention: 'Klipper documentation.',
    risk_occurrence: 7,
    risk_detection:
      'The error message displayed in the software interface is the detection.',
    risk_detScore: 5,
    risk_ap: 'M',
    opt_preventive:
      "Add a note in the manual's software section about the update process, warning that MCU firmware must be re-flashed if there are breaking changes in the host software.",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_172',
    history: '',
    structure_processItem: 'Panels',
    structure_processStep: '[Panel Installation] Panel Material',
    structure_workElement: 'Material',
    func_processItem: 'Enclose the build chamber with panels.',
    func_processStep:
      'Install polycarbonate or acrylic panels to enclose the printer.',
    func_workElement:
      'The panel material must be able to withstand the chamber temperatures without deforming.',
    fail_effect:
      '1. Your Plant: N\/A. 2. Ship-to Plant: N\/A. 3. End User: The panels warp or sag when the chamber heats up, creating gaps that allow heat to escape and preventing a stable, high chamber temperature. The printer cannot reliably print large ABS parts.',
    fail_severity: 6,
    fail_mode: 'Enclosure panels warp from heat.',
    fail_cause:
      'The user substitutes the recommended polycarbonate panels with a lower-cost, lower-temperature material like standard acrylic, which has a much lower glass transition temperature.',
    risk_prevention: 'Sourcing guide recommends polycarbonate.',
    risk_occurrence: 5,
    risk_detection:
      'Visual inspection of the panels after the chamber has been heated for a long period.',
    risk_detScore: 9,
    risk_ap: 'M',
    opt_preventive:
      "Add a note in the 'Panels' section (p. 100) explaining that polycarbonate is required for its heat resistance and that acrylic will warp.",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_174',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Hot End & Fan Housing] Assembly',
    structure_workElement: 'Material',
    func_processItem:
      'Melt and extrude filament, and cool the printed plastic.',
    func_processStep: 'Provide a ducted airflow path to cool the printed part.',
    func_workElement:
      'The 3D printed part cooling duct must be printed in a high-temperature material like ABS.',
    fail_effect:
      '1. Your Plant: N\/A. 2. Ship-to Plant: N\/A. 3. End User: The tip of the part cooling duct, which is very close to the heater block, sags and melts. The airflow is no longer directed at the print, resulting in poor print quality, especially on overhangs and bridges.',
    fail_severity: 6,
    fail_mode: 'Part cooling duct deforms\/melts.',
    fail_cause:
      'The user printed the Afterburner parts in a lower-temperature material like PLA or PETG. The radiant heat from the heater block is enough to cause the duct to deform.',
    risk_prevention:
      'Manual strongly recommends printing all parts in ABS (p. 5).',
    risk_occurrence: 5,
    risk_detection: 'Visual inspection of the duct after a few prints.',
    risk_detScore: 9,
    risk_ap: 'M',
    opt_preventive:
      "Add a specific warning note in the Afterburner section: 'It is critical that the toolhead parts are printed in ABS. PLA or PETG will melt from proximity to the hotend.'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 5, No evidence'
  },
  {
    id: 'FC_175',
    history: '',
    structure_processItem: 'Software and Firmware',
    structure_processStep: '[Backup] System Backup',
    structure_workElement: 'Man',
    func_processItem: 'Maintain a functional printer configuration.',
    func_processStep:
      'Backup the Raspberry Pi SD card and Klipper configuration files.',
    func_workElement:
      'Periodically save a copy of the working `printer.cfg` and a disk image of the SD card.',
    fail_effect:
      '1. Your Plant: Loss of configuration, rework. 2. Ship-to Plant: N\/A. 3. End User: The SD card in the Raspberry Pi becomes corrupted. The user has no backup and loses all their tuned settings (PID, Z-offset, Pressure Advance, etc.). The printer is non-functional until the entire software stack is reinstalled and re-calibrated from scratch, which can take hours.',
    fail_severity: 6,
    fail_mode: 'Loss of configuration due to SD card failure with no backup.',
    fail_cause:
      'The user never backs up their configuration, and the SD card fails due to power cycles or age.',
    risk_prevention: 'General computer best practices.',
    risk_occurrence: 6,
    risk_detection: 'N\/A',
    risk_detScore: 10,
    risk_ap: 'M',
    opt_preventive:
      "Add a 'Backing up your Configuration' section to the manual, strongly recommending the user save their `printer.cfg` to a cloud service and create a disk image of their SD card after initial calibration is complete.",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_176',
    history: '',
    structure_processItem: 'Belting Z Drive',
    structure_processStep: '[Belt Joining] Create Belt Loop',
    structure_workElement: 'Man',
    func_processItem:
      'Synchronize the four Z-drives using a single continuous belt.',
    func_processStep:
      'Join the two ends of the Z-belt to form a continuous loop.',
    func_workElement:
      'Ensure the belt teeth are correctly meshed at the joint to maintain consistent pitch.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The belt pitch is wrong at the joint. Every time this section of the belt passes over a pulley, it will cause a small jump in Z-position. This creates a consistent, visible line or artifact in the Z-axis of every print.',
    fail_severity: 6,
    fail_mode: 'Incorrect tooth pitch at Z-belt joint.',
    fail_cause:
      "When joining the belt ends in the printed clamp, the assembler misaligns the teeth, creating one 'tooth' that is wider or narrower than the others.",
    risk_prevention:
      'This joining method is not explicitly shown in the manual.',
    risk_occurrence: 7,
    risk_detection:
      'Careful visual inspection of the joint before fully tightening the clamp.',
    risk_detScore: 8,
    risk_ap: 'M',
    opt_preventive:
      "Add a detailed diagram showing how to correctly mesh the belt ends in the clamp. Suggest using a section of open belt as a temporary 'splint' to hold the ends in alignment during clamping.",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_181',
    history: '',
    structure_processItem: 'Initial Calibration',
    structure_processStep: '[Calibration] Inductive Probe Height',
    structure_workElement: 'Man',
    func_processItem:
      'Calibrate all printer subsystems for optimal performance.',
    func_processStep: 'Correctly position the Z-axis inductive probe.',
    func_workElement:
      'Set the probe height so its bottom is slightly above the nozzle tip.',
    fail_effect:
      '1. Your Plant: Damage to probe. 2. Ship-to Plant: N\/A. 3. End User: The probe is mounted too low. A piece of curled plastic from a previous print on the bed can catch on the probe and rip it from its mount, damaging the probe or wiring.',
    fail_severity: 6,
    fail_mode: 'Inductive probe crashes into print.',
    fail_cause:
      'The assembler sets the physical height of the inductive probe too low, below the level of the nozzle tip.',
    risk_prevention: 'General community knowledge and build guides.',
    risk_occurrence: 6,
    risk_detection:
      'Visually checking the relative height of the nozzle tip and the probe body.',
    risk_detScore: 7,
    risk_ap: 'M',
    opt_preventive:
      "Add a dedicated step for setting probe height: 'Adjust the probe so its tip is approximately 1-2mm ABOVE the tip of the nozzle. Use a credit card or printed gauge for spacing.'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_184',
    history: '',
    structure_processItem: 'Maintenance',
    structure_processStep: '[Periodic Maintenance] Debris Cleaning',
    structure_workElement: 'Environment',
    func_processItem: 'Reliably produce high-quality 3D prints.',
    func_processStep: 'Keep the motion system free of debris.',
    func_workElement:
      'The area around the linear rails and belts must be kept clean.',
    fail_effect:
      "1. Your Plant: N\/A. 2. Ship-to Plant: N\/A. 3. End User: A small piece of stray plastic or other debris falls onto a linear rail or gets into a belt path. This causes a 'bump' in the motion, which shows up as a visible line or layer shift in the print.",
    fail_severity: 6,
    fail_mode: 'Debris in motion system causes print artifact.',
    fail_cause:
      'Small strands of plastic, dust, or other debris accumulate in the printer over time and contaminate the motion system.',
    risk_prevention:
      'The enclosed nature of the printer helps keep some dust out.',
    risk_occurrence: 6,
    risk_detection:
      'Periodic visual inspection and cleaning of the motion system.',
    risk_detScore: 9,
    risk_ap: 'M',
    opt_preventive:
      "Add to the 'Periodic Maintenance' section instructions to periodically wipe down the linear rails with a lint-free cloth and vacuum out any plastic debris from the inside of the printer.",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_186',
    history: '',
    structure_processItem: 'Build Plate Assembly',
    structure_processStep: '[Heated Bed] Magnetic Sheet Application',
    structure_workElement: 'Man',
    func_processItem: 'Provide a heated, flat surface for 3D printing.',
    func_processStep:
      'Apply the magnetic base sheet to the aluminum build plate.',
    func_workElement: 'Apply the sheet smoothly with no trapped air bubbles.',
    fail_effect:
      '1. Your Plant: Rework is difficult. 2. Ship-to Plant: N\/A. 3. End User: Air bubbles under the magnetic sheet create insulated spots. The top spring steel sheet does not sit flat, and the bed temperature is uneven. This leads to first layer adhesion problems and inconsistent probing.',
    fail_severity: 6,
    fail_mode: 'Air bubbles trapped under magnetic base sheet.',
    fail_cause:
      'The assembler applies the adhesive-backed magnetic sheet quickly and unevenly, without using a roller or squeegee to force out air.',
    risk_prevention: 'General assembly skill.',
    risk_occurrence: 7,
    risk_detection: 'Visual and tactile inspection after application.',
    risk_detScore: 7,
    risk_ap: 'M',
    opt_preventive:
      "Add instructions similar to the heater application: 'Clean the plate with alcohol. Start from one edge and use a plastic card or roller to apply the magnetic sheet slowly, pushing out any air bubbles as you go.'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_188',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep: '[Motor Tension] Tension Z-Drive Belts (p. 27)',
    structure_workElement: 'Material',
    func_processItem: 'Mount the four Z-drive assemblies to the frame.',
    func_processStep:
      'Secure the motor assemblies and apply tension to the Z-drive belts by closing a tensioner latch.',
    func_workElement:
      'The 3D printed tensioner latch must be strong enough to withstand the tensioning force.',
    fail_effect:
      '1. Your Plant: Rework, reprint part. 2. Ship-to Plant: N\/A. 3. End User: The printed tensioner latch breaks while being closed. The Z-belt for that corner cannot be tensioned. The printer is non-functional until a new part is printed.',
    fail_severity: 6,
    fail_mode: 'Printed Z-belt tensioner latch breaks.',
    fail_cause:
      'The part was printed with poor layer adhesion or insufficient walls\/infill, making it too weak for the mechanical load.',
    risk_prevention: 'Recommended print settings on page 5.',
    risk_occurrence: 4,
    risk_detection: 'Part breaking is the detection.',
    risk_detScore: 10,
    risk_ap: 'M',
    opt_preventive:
      'Increase the recommended wall count or infill for this specific high-stress part in the print guide. Consider redesigning the part to be less reliant on layer adhesion for strength.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 5, No evidence'
  },
  {
    id: 'FC_011',
    history: '',
    structure_processItem: 'Voron 2.4 Frame',
    structure_processStep: '[Frame Assembly] Assemble Bed Extrusions (p. 15)',
    structure_workElement: 'Man',
    func_processItem:
      "Assembly of a rigid and square foundational structure for the printer's motion system.",
    func_processStep:
      'Attach two bed support extrusions to the lower frame extrusions, leaving them loose for later adjustment.',
    func_workElement:
      'Correctly pre-load fasteners (M5x10 BHCS and M5x16 BHCS with M5 Shim) into the extrusion T-slots before attaching to the frame.',
    fail_effect:
      '1. Your Plant: Inability to attach bed extrusions without disassembling part of the frame; significant rework and lost time. 2. Ship-to Plant: N\/A. 3. End User: Process stops, user is frustrated and must undo previous work.',
    fail_severity: 5,
    fail_mode: 'Fasteners not pre-inserted into bed extrusions.',
    fail_cause:
      "Assembler misses the instruction 'Insert fasteners before you start' and attaches the bed extrusions, only to find the fasteners cannot be installed afterward.",
    risk_prevention:
      'Explicit instruction in the manual with a clear diagram showing fastener pre-insertion (p. 15).',
    risk_occurrence: 7,
    risk_detection:
      'Self-evident when the assembler attempts to install the fasteners and finds it impossible.',
    risk_detScore: 3,
    risk_ap: 'M',
    opt_preventive:
      "Change the assembly sequence to have the fasteners pre-loaded into all relevant extrusions in a dedicated 'kitting' step at the very beginning.",
    opt_detection:
      "Improve the visibility of the warning in the manual with a large 'STOP' icon and bold text.",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 15, Assembly Manual, p. 15'
  },
  {
    id: 'FC_024',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep: '[Belt Drive Modules] Assemble Belt Drive (p. 21)',
    structure_workElement: 'Man',
    func_processItem:
      'Assembly of four identical Z-axis belt drive modules to lift the gantry.',
    func_processStep:
      'Assemble the shaft assembly into the Z-drive housing and install the looped belt.',
    func_workElement:
      'Place the looped belt over the 20T pulley and inside the housing before installing the shaft assembly.',
    fail_effect:
      '1. Your Plant: Rework; the entire module must be disassembled to install the belt. 2. Ship-to Plant: N\/A. 3. End User: User realizes the belt is missing and must perform significant disassembly to correct the error.',
    fail_severity: 5,
    fail_mode: 'Belt loop forgotten during assembly.',
    fail_cause:
      "Assembler focuses on installing the shaft and fasteners and misses the instruction 'Don’t forget to put the belt loop on!'.",
    risk_prevention:
      'Explicit instruction with a diagram highlighting the belt loop (p. 21).',
    risk_occurrence: 6,
    risk_detection:
      'Visual inspection of the module after assembly, noticing the absence of the belt.',
    risk_detScore: 4,
    risk_ap: 'M',
    opt_preventive:
      'Structure the assembly steps so the belt is the very first component placed into the housing, making it harder to forget.',
    opt_detection:
      "Create a post-assembly checklist for the module, with 'Belt installed' as a required item.",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 21, Assembly Manual, p. 21'
  },
  {
    id: 'FC_026',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep:
      '[Deck Sandwich] Assemble DIN Rails and Deck Panel (p. 24)',
    structure_workElement: 'Man',
    func_processItem: 'Create a mounting platform for the electronics.',
    func_processStep:
      'Sandwich the bottom deck panel between two DIN rails and the bed extrusions using M5 fasteners.',
    func_workElement:
      'Orient the deck panel correctly, with the cable-pass-through notch located at the back of the frame.',
    fail_effect:
      '1. Your Plant: Rework required to re-orient the panel. 2. Ship-to Plant: N\/A. 3. End User: Wires cannot be routed correctly from the electronics bay to the rest of the printer at a much later stage, requiring significant disassembly to fix.',
    fail_severity: 5,
    fail_mode: 'Deck panel installed backwards (notch at the front).',
    fail_cause:
      "Assembler misses the instruction 'Also check your orientation! The notch is in the back.'",
    risk_prevention: 'Explicit instruction in the manual (p. 24).',
    risk_occurrence: 7,
    risk_detection: 'Discovered during wiring when cables cannot be routed.',
    risk_detScore: 9,
    risk_ap: 'M',
    opt_preventive:
      'Make the notch or panel asymmetrical so it physically cannot be installed incorrectly.',
    opt_detection:
      'Add a verification step immediately after installation, showing a photo of the correctly oriented panel and asking the user to confirm.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 24, No evidence'
  },
  {
    id: 'FC_030',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep: '[Z Idlers] Assemble Z Idlers (p. 28)',
    structure_workElement: 'Man',
    func_processItem: 'Guide the Z-axis belts at the top of the frame.',
    func_processStep:
      'Assemble four Z idler modules, each containing an idler pulley, a bolt, and a nut.',
    func_workElement:
      'Insert the M3 hex nut into its hexagonal pocket in the printed part before installing the screw.',
    fail_effect:
      '1. Your Plant: Rework required to disassemble and insert the nut. 2. Ship-to Plant: N\/A. 3. End User: The M3x16 screw cannot be tightened as there is no nut to engage with. The idler pulley is loose, preventing proper belt path and tension.',
    fail_severity: 5,
    fail_mode: 'M3 hex nut is forgotten.',
    fail_cause:
      'The nut is a small component and is captured inside the print. The assembler overlooks installing it before inserting the screw and idler.',
    risk_prevention:
      'Exploded diagram on page 28 clearly shows the M3 Hex Nut as a separate component.',
    risk_occurrence: 7,
    risk_detection: 'The screw will not tighten and will spin freely.',
    risk_detScore: 2,
    risk_ap: 'M',
    opt_preventive:
      'Redesign the part to use a heat-set insert instead of a captured nut, which is a more robust assembly method.',
    opt_detection: 'N\/A, failure is self-evident.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 28, No evidence'
  },
  {
    id: 'FC_044',
    history: '',
    structure_processItem: 'Gantry Assembly',
    structure_processStep: '[Rear Brace] Install Rear Brace Extrusion (p. 55)',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the gantry, which carries the toolhead.',
    func_processStep:
      'Install the rear brace extrusion between the two Y-extrusions.',
    func_workElement:
      'Leave the fasteners slightly loose to allow for later adjustment when squaring the gantry.',
    fail_effect:
      '1. Your Plant: Rework required to loosen fasteners. 2. Ship-to Plant: N\/A. 3. End User: Inability to properly square the gantry in a later step because the rear brace is rigidly holding it in a potentially non-square position.',
    fail_severity: 5,
    fail_mode: 'Rear brace fasteners tightened prematurely.',
    fail_cause:
      "Assembler tightens the fasteners by habit, missing the instruction to 'leave the back brace slightly loose'.",
    risk_prevention: 'Explicit instruction in the manual (p. 55).',
    risk_occurrence: 6,
    risk_detection: 'Discovered at a later stage when gantry squaring fails.',
    risk_detScore: 9,
    risk_ap: 'M',
    opt_preventive:
      "Use a visual cue in the CAD drawing, like a 'loose' icon next to the fasteners.",
    opt_detection:
      'Add a verification step to check that the brace can be wiggled slightly after fastener installation.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 55, No evidence'
  },
  {
    id: 'FC_045',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Carriage] Assemble Carriage (p. 59)',
    structure_workElement: 'Man',
    func_processItem:
      'Assembly of the Afterburner toolhead, which holds the hotend and extruder.',
    func_processStep: 'Assemble the two halves of the X-carriage.',
    func_workElement:
      'Install two M3 hex nuts into their captured slots before joining the halves.',
    fail_effect:
      '1. Your Plant: Rework required to disassemble and install nuts. 2. Ship-to Plant: N\/A. 3. End User: Later components (like the hotend mount) cannot be attached to the carriage. Requires partial disassembly of the Afterburner.',
    fail_severity: 5,
    fail_mode: 'Captured M3 nuts for later steps are forgotten.',
    fail_cause:
      'Assembler focuses on the main assembly screws and overlooks the small, captured nuts that will be used later.',
    risk_prevention: 'Exploded view diagram on page 59 shows the nuts.',
    risk_occurrence: 7,
    risk_detection:
      'Visual inspection of the nut slots before closing the carriage halves.',
    risk_detScore: 8,
    risk_ap: 'M',
    opt_preventive:
      'Redesign the carriage to use heat-set inserts installed from the outside, which is a more mistake-proof process.',
    opt_detection:
      "Add a specific callout box in the instructions: 'STOP: Install the two M3 nuts now. They will be used later.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 59, No evidence'
  },
  {
    id: 'FC_057',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Idler Assembly] Lubricate Idler (p. 75)',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the Clockwork extruder mechanism.',
    func_processStep: 'Assemble the idler gear mechanism.',
    func_workElement:
      'Apply lubricant to the idler assembly to ensure smooth operation.',
    fail_effect:
      '1. Your Plant: N\/A. 2. Ship-to Plant: N\/A. 3. End User: The idler does not rotate smoothly, causing excess friction on the filament. This can lead to under-extrusion or filament grinding, especially with flexible materials.',
    fail_severity: 5,
    fail_mode: 'Idler assembly not lubricated.',
    fail_cause:
      'Assembler skips the lubrication step, as they may not have the specified lubricant on hand.',
    risk_prevention:
      "Instruction in manual: 'The idler assembly requires lubrication...' (p. 75).",
    risk_occurrence: 6,
    risk_detection:
      'No detection method besides observing poor performance later.',
    risk_detScore: 10,
    risk_ap: 'M',
    opt_preventive:
      'Include a small packet of suitable lubricant in the hardware kit.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 75, No evidence'
  },
  {
    id: 'FC_066',
    history: '',
    structure_processItem: 'Panels',
    structure_processStep: '[Front Doors] Attach Latches (p. 102)',
    structure_workElement: 'Material',
    func_processItem: 'Enclose the build chamber with panels.',
    func_processStep:
      'Attach the assembled latches to the polycarbonate door panels.',
    func_workElement:
      'VHB (Very High Bond) tape provides a strong, permanent bond between the printed latch and the panel.',
    fail_effect:
      '1. Your Plant: Rework is difficult. 2. Ship-to Plant: N\/A. 3. End User: The latch detaches from the door panel, making the door unusable.',
    fail_severity: 5,
    fail_mode: 'Poor adhesion of VHB tape.',
    fail_cause:
      'The surface of the polycarbonate panel is contaminated with oils or residue, preventing the VHB tape from forming a strong bond.',
    risk_prevention: 'Instruction to use VHB tape (p. 102).',
    risk_occurrence: 6,
    risk_detection: 'No detection method other than failure in service.',
    risk_detScore: 10,
    risk_ap: 'M',
    opt_preventive:
      "Add a critical instruction: 'Before applying the VHB tape, thoroughly clean the polycarbonate panel surface with isopropyl alcohol to remove any oils or residue.'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 102, No evidence'
  },
  {
    id: 'FC_084',
    history: '',
    structure_processItem: 'Initial Calibration',
    structure_processStep: '[Calibration] Input Shaper Tuning',
    structure_workElement: 'Man',
    func_processItem:
      'Calibrate all printer subsystems for optimal performance.',
    func_processStep:
      'Measure the resonant frequencies of the X and Y axes to enable faster printing without ringing artifacts.',
    func_workElement:
      'The ADXL345 accelerometer must be mounted rigidly to the toolhead.',
    fail_effect:
      '1. Your Plant: Inaccurate calibration data. 2. Ship-to Plant: N\/A. 3. End User: The measured frequencies are incorrect. The resulting input shaper profile either fails to cancel ringing, or over-damps motion and rounds off sharp corners on prints.',
    fail_severity: 5,
    fail_mode: 'Input shaper calibration is inaccurate.',
    fail_cause:
      "The user mounts the accelerometer to the toolhead loosely. The vibration of the accelerometer on its own mount contaminates the measurement of the gantry's resonance.",
    risk_prevention: 'Community guides on input shaper tuning.',
    risk_occurrence: 6,
    risk_detection:
      'Observing the frequency graph generated by the test. A loose mount often creates multiple, noisy peaks.',
    risk_detScore: 7,
    risk_ap: 'M',
    opt_preventive:
      'Design and provide an official, robust 3D printable mount for the ADXL345 that bolts securely to the toolhead.',
    opt_detection:
      'Instruct the user to physically check the accelerometer for any wiggle before starting the measurement process.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_123',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep:
      '[Drive Shaft & Adjustment] Check Drive Shaft Movement (p. 74)',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the Clockwork extruder mechanism.',
    func_processStep: 'Check the function of the drive shaft assembly.',
    func_workElement:
      'Verify the drive shaft can move forward and back slightly to aid in filament alignment.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The drive shaft is seized and cannot self-align. This makes loading filament difficult and can cause grinding if the filament path is not perfect.',
    fail_severity: 5,
    fail_mode: 'Drive shaft does not have axial play.',
    fail_cause:
      'The fasteners (M3x30 SHCS) are overtightened, or the printed parts have too much friction, preventing the required slight axial movement of the drive shaft.',
    risk_prevention: 'Explicit instruction to check for this movement (p. 74).',
    risk_occurrence: 6,
    risk_detection: 'The check itself is the detection method.',
    risk_detScore: 4,
    risk_ap: 'M',
    opt_preventive:
      'Incorporate small springs into the design to positively control the axial play instead of relying on loose tolerances.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 74, Assembly Manual, p. 74'
  },
  {
    id: 'FC_126',
    history: '',
    structure_processItem: 'Wiring',
    structure_processStep: '[Cable Chain] Assemble Cable Chain',
    structure_workElement: 'Man',
    func_processItem: 'Manage and protect wiring during printer motion.',
    func_processStep: 'Assemble the individual links of the cable chain.',
    func_workElement:
      'Snap the links together in the correct orientation so they can only bend in one direction.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: One or more links are installed backwards. The chain will have a stiff spot where it cannot bend correctly, causing it to bind, jam, or break during motion.',
    fail_severity: 5,
    fail_mode: 'Cable chain link installed backwards.',
    fail_cause:
      'The assembler is not paying attention and snaps a link on backwards. The links are small and the orientation feature can be subtle.',
    risk_prevention: 'General assembly diagrams (p. 128-130).',
    risk_occurrence: 6,
    risk_detection:
      'Flexing the chain after assembly to check for smooth, unidirectional bending.',
    risk_detScore: 5,
    risk_ap: 'M',
    opt_preventive:
      'Source cable chains that are pre-assembled to the required length.',
    opt_detection:
      "Add a check: 'After assembling the chain, lay it on a table and verify it can curl smoothly in one direction and is rigid in the other.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 128-130, No evidence'
  },
  {
    id: 'FC_130',
    history: '',
    structure_processItem: 'AB Drive Modules',
    structure_processStep:
      '[A Drive Module + Chain Anchor] Install Chain Anchor (p. 43)',
    structure_workElement: 'Man',
    func_processItem:
      'Assembly of the A and B motor drive modules for the gantry.',
    func_processStep:
      'Assemble the A drive module, which includes a cable chain anchor.',
    func_workElement: 'Install the M3 nut for the chain anchor.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The M3 nut for the cable chain anchor is forgotten. At a much later stage, the user cannot attach the cable chain to the A drive module. Requires significant disassembly to install the nut.',
    fail_severity: 5,
    fail_mode: 'Cable chain anchor nut forgotten.',
    fail_cause:
      "The user decides to 'skip this step until you’re ready to add the cable chains' as suggested, but then forgets to come back and add the nut before completing the module assembly.",
    risk_prevention: 'Diagram shows the M3 nut (p. 43).',
    risk_occurrence: 7,
    risk_detection: 'Self-discovered when trying to attach the cable chain.',
    risk_detScore: 9,
    risk_ap: 'M',
    opt_preventive:
      "Remove the suggestion to skip the step. Change it to: 'Install the nut now, even if you are not installing the cable chain anchor yet.'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 43, No evidence'
  },
  {
    id: 'FC_135',
    history: '',
    structure_processItem: 'Exhaust Filter',
    structure_processStep: '[Filter Install] Install Filter Media (p. 115)',
    structure_workElement: 'Man',
    func_processItem:
      'Assemble an exhaust filter to remove VOCs from the build chamber.',
    func_processStep: 'Install the carbon filter media into the housing.',
    func_workElement:
      'Ensure the filter media creates a good seal around the edges of the housing.',
    fail_effect:
      '1. Your Plant: N\/A. 2. Ship-to Plant: N\/A. 3. End User: Air bypasses the carbon filter through gaps around the edges. Volatile Organic Compounds (VOCs) and odors from printing ABS are not effectively filtered and are exhausted into the room.',
    fail_severity: 5,
    fail_mode: 'Filter media is bypassed.',
    fail_cause:
      'The assembler cuts the carbon pellet filter material too small, or does not pack it tightly, leaving air gaps.',
    risk_prevention:
      'Diagram shows the location for the filter media (p. 115).',
    risk_occurrence: 6,
    risk_detection:
      'Visual inspection of the filter media before closing the housing.',
    risk_detScore: 8,
    risk_ap: 'M',
    opt_preventive:
      'Provide a pre-made, sealed carbon filter cartridge that drops into the housing, eliminating the need to handle loose carbon pellets and ensuring a perfect seal.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 115, No evidence'
  },
  {
    id: 'FC_142',
    history: '',
    structure_processItem: 'Gantry Assembly',
    structure_processStep: '[A Belt Routing] Cutting Belts (p. 64)',
    structure_workElement: 'Machine',
    func_processItem: 'Route the CoreXY belts.',
    func_processStep: 'Cut the GT2 belts to length.',
    func_workElement: 'The cutting tool must make a clean, square cut.',
    fail_effect:
      '1. Your Plant: Assembly difficulty. 2. Ship-to Plant: N\/A. 3. End User: The end of the belt is frayed. It is difficult to insert into the toothed clamps on the carriage, and the frayed end does not grip well, making it more likely to slip under tension.',
    fail_severity: 5,
    fail_mode: 'Belt end is frayed.',
    fail_cause:
      'The assembler uses a dull pair of scissors or wire cutters, which crushes and frays the belt instead of shearing it cleanly.',
    risk_prevention: 'No specific tool recommended.',
    risk_occurrence: 7,
    risk_detection: 'Visual inspection of the cut belt end.',
    risk_detScore: 6,
    risk_ap: 'M',
    opt_preventive:
      'Recommend a specific tool for cutting belts, such as a sharp razor blade or a dedicated belt cutter.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_167',
    history: '',
    structure_processItem: 'Voron 2.4 Printer',
    structure_processStep: '[Operation] Environmental Placement',
    structure_workElement: 'Environment',
    func_processItem: 'Reliably produce high-quality 3D prints.',
    func_processStep: 'Operate the printer on a stable, level surface.',
    func_workElement:
      'The surface must be heavy and rigid enough to not vibrate or wobble during rapid print movements.',
    fail_effect:
      '1. Your Plant: N\/A. 2. Ship-to Plant: N\/A. 3. End User: The printer wobbles during operation, which translates into print artifacts like ringing and ghosting. Input shaper calibration may also be ineffective.',
    fail_severity: 5,
    fail_mode: 'Printer placed on an unstable surface.',
    fail_cause:
      'The user places the heavy, fast-moving printer on a flimsy table or wobbly stand.',
    risk_prevention:
      'The printer is equipped with vibration-damping feet (p. 22).',
    risk_occurrence: 7,
    risk_detection:
      'Observing the printer for wobble during fast travel moves.',
    risk_detScore: 8,
    risk_ap: 'M',
    opt_preventive:
      "Add a 'Siting your Printer' section to the manual, recommending a sturdy workbench or concrete paver stone as a base to provide stability.",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 22, No evidence'
  },
  {
    id: 'FC_195',
    history: '',
    structure_processItem: 'Belting Z Drive',
    structure_processStep: '[Gantry Leveling] Quad Gantry Level',
    structure_workElement: 'Machine',
    func_processItem:
      'Synchronize the four Z-drives using a single continuous belt.',
    func_processStep:
      'Automatically level the gantry by independently adjusting the four Z motors.',
    func_workElement:
      'The Klipper `QUAD_GANTRY_LEVEL` routine must have a sufficient `max_adjust` value set.',
    fail_effect:
      "1. Your Plant: Calibration fails. 2. Ship-to Plant: N\/A. 3. End User: The gantry is significantly out of level, but the leveling routine fails with a 'variance' error because the required correction is larger than the maximum allowed adjustment. The user may not know how to fix this.",
    fail_severity: 5,
    fail_mode: 'Quad Gantry Level routine fails to converge.',
    fail_cause:
      'The initial mechanical leveling of the gantry was poor, and the default `max_adjust` value in the firmware is too small to compensate for the large initial error.',
    risk_prevention: 'Klipper documentation.',
    risk_occurrence: 6,
    risk_detection: 'The error message in the Klipper console.',
    risk_detScore: 4,
    risk_ap: 'M',
    opt_preventive:
      'Add a troubleshooting section for Quad Gantry Leveling, explaining that a variance error means the initial mechanical setup needs to be improved, or `max_adjust` can be temporarily increased.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_197',
    history: '',
    structure_processItem: 'Initial Calibration',
    structure_processStep: '[First Print] Slicer Settings',
    structure_workElement: 'Man',
    func_processItem: 'Reliably produce high-quality 3D prints.',
    func_processStep: 'Use correct slicer settings for the Voron printer.',
    func_workElement:
      'Set the retraction distance appropriate for a direct drive extruder.',
    fail_effect:
      '1. Your Plant: Poor print quality. 2. Ship-to Plant: N\/A. 3. End User: Prints are very stringy and have blobs on the surface. The print quality is poor.',
    fail_severity: 5,
    fail_mode: 'Excessive stringing and blobbing on prints.',
    fail_cause:
      'The user is coming from a Bowden-style printer and uses their old slicer profile, which has a long retraction distance (e.g., 5mm). For a direct drive extruder like Clockwork, this is far too long and causes poor performance.',
    risk_prevention: 'Voron community provides sample slicer profiles.',
    risk_occurrence: 7,
    risk_detection: 'Observing the first few test prints for quality issues.',
    risk_detScore: 8,
    risk_ap: 'M',
    opt_preventive:
      "Add a 'Recommended Slicer Settings' section to the manual, explicitly stating key parameters like 'Retraction: 0.5-1.0mm' and explaining why they are different from Bowden printers.",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_012',
    history: '',
    structure_processItem: 'Voron 2.4 Frame',
    structure_processStep: '[Frame Assembly] Assemble Bed Extrusions (p. 15)',
    structure_workElement: 'Man',
    func_processItem:
      "Assembly of a rigid and square foundational structure for the printer's motion system.",
    func_processStep:
      'Attach two bed support extrusions to the lower frame extrusions, leaving them loose for later adjustment.',
    func_workElement:
      'Follow instruction to not fully tighten the fasteners at this stage, allowing for future movement.',
    fail_effect:
      '1. Your Plant: Rework required to loosen fasteners during heated bed assembly. 2. Ship-to Plant: N\/A. 3. End User: Inability to align and install the heated bed assembly, requiring partial disassembly to loosen the fasteners.',
    fail_severity: 4,
    fail_mode: 'Bed extrusion fasteners fully tightened prematurely.',
    fail_cause:
      "Assembler tightens all fasteners by habit, missing the explicit instruction 'Don’t tighten these down too hard at this stage.'",
    risk_prevention: 'Explicit warning in manual (p. 15).',
    risk_occurrence: 6,
    risk_detection:
      'Discovered at a later stage when the heated bed cannot be installed.',
    risk_detScore: 9,
    risk_ap: 'M',
    opt_preventive:
      'Use shoulder bolts or another fastener type that prevents full tightening by design until a later component is installed.',
    opt_detection:
      'Add a verification step immediately after this one to check that the extrusions can still slide freely.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 15, No evidence for detection'
  },
  {
    id: 'FC_016',
    history: '',
    structure_processItem: 'Voron 2.4 Frame',
    structure_processStep:
      '[Z Axis Linear Rails] Install Z-Axis Linear Rails (p. 16)',
    structure_workElement: 'Man',
    func_processItem:
      'Provide a smooth, precise, and parallel guide system for the Z-axis motion.',
    func_processStep:
      'Secure four linear rails to the four vertical frame extrusions using M3x8 SHCS fasteners.',
    func_workElement:
      'Position the rail with a 3mm gap from the bottom extrusion to leave room for belt covers.',
    fail_effect:
      '1. Your Plant: Rework required to reposition all four rails. 2. Ship-to Plant: N\/A. 3. End User: Inability to install the Z belt covers at a later stage, or covers interfere with Z motion.',
    fail_severity: 4,
    fail_mode:
      'Rail installed flush with bottom extrusion (incorrect vertical spacing).',
    fail_cause:
      "Assembler misses the 'RAIL SPACING' instruction and installs the rail flush with the bottom of the vertical extrusion.",
    risk_prevention:
      "Instruction in manual: 'Make sure to space the rails 3mm off the bottom extrusions.' (p. 16).",
    risk_occurrence: 7,
    risk_detection: 'Measurement with a ruler or caliper after installation.',
    risk_detScore: 8,
    risk_ap: 'M',
    opt_preventive:
      'Provide a 3D printable 3mm spacer tool to set the gap consistently and easily.',
    opt_detection:
      'Add a quality checkpoint with a picture showing how to use a ruler to verify the 3mm gap before moving on.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 16, No evidence for detection'
  },
  {
    id: 'FC_051',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Clockwork] Install Heat Set Inserts (p. 68)',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the Clockwork extruder mechanism.',
    func_processStep:
      'Install heat set inserts into the printed Clockwork body.',
    func_workElement:
      'Correctly identify the different cable chain mounts (IGUS vs Generic) and install inserts only in the one being used.',
    fail_effect:
      '1. Your Plant: Wasted time installing unnecessary inserts. 2. Ship-to Plant: N\/A. 3. End User: User installs inserts in the wrong cable chain mount, then discovers they need the other one. They may not have enough spare inserts to complete the build, halting progress.',
    fail_severity: 4,
    fail_mode:
      'Heat set inserts installed into the wrong cable chain mount part.',
    fail_cause:
      "Assembler does not read the note to 'Take note of the different cable chain mounts and use the one that best fits your build' and installs inserts in both or the wrong one.",
    risk_prevention:
      'Instruction in manual with pictures distinguishing the two mount types (p. 68).',
    risk_occurrence: 6,
    risk_detection:
      'Self-discovered when the chosen cable chain does not fit the prepared part.',
    risk_detScore: 5,
    risk_ap: 'M',
    opt_preventive:
      'Place the instructions for the two mount types on separate pages to make it clearer that a choice must be made.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 68, No evidence'
  },
  {
    id: 'FC_053',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Motor Plate] Orient Stepper Motor (p. 70)',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the Clockwork extruder mechanism.',
    func_processStep: 'Install the extruder motor and drive pinion.',
    func_workElement:
      'Orient the stepper motor so that the wire exit is on the left side.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The motor wires cannot be routed through the cable cover correctly in a later step. Requires disassembly of the extruder to re-orient the motor.',
    fail_severity: 4,
    fail_mode: 'Stepper motor oriented incorrectly.',
    fail_cause:
      'Assembler misses the instruction about motor orientation and installs it with the wires facing the wrong direction.',
    risk_prevention:
      "Explicit instruction: '...orient the motor on the drive plate so that the wires are on the left side.' (p. 70).",
    risk_occurrence: 7,
    risk_detection:
      'Discovered when trying to install the cable cover (p. 79).',
    risk_detScore: 9,
    risk_ap: 'M',
    opt_preventive:
      'Design the motor plate with an asymmetrical feature that only allows the motor to be installed in the correct orientation.',
    opt_detection:
      'Add a verification photo on the same page showing the correctly oriented motor from the back.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 70, No evidence'
  },
  {
    id: 'FC_065',
    history: '',
    structure_processItem: 'Panels',
    structure_processStep: '[Front Door Latches] Assemble Latches (p. 101)',
    structure_workElement: 'Man',
    func_processItem: 'Enclose the build chamber with panels.',
    func_processStep: 'Assemble the magnetic front door latches.',
    func_workElement:
      'Install the small cylindrical magnets with the correct polarity so they attract, not repel, each other.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The door latches repel each other and will not stay closed. The enclosure cannot be sealed.',
    fail_severity: 4,
    fail_mode: 'Magnets installed with incorrect polarity.',
    fail_cause:
      'The assembler does not check the polarity of the magnets before pressing them into the printed parts.',
    risk_prevention: 'No specific instruction to check polarity.',
    risk_occurrence: 8,
    risk_detection:
      'Testing the two latch halves against each other after installing the magnets.',
    risk_detScore: 4,
    risk_ap: 'M',
    opt_preventive:
      "Add an instruction: 'Check that the magnets attract each other before pressing them into the parts. Use a marker to indicate the polarity on all magnets before you begin.'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_068',
    history: '',
    structure_processItem: 'Exhaust Filter',
    structure_processStep: '[BSP & Fan Mounting] Drill Adapter (p. 114)',
    structure_workElement: 'Man',
    func_processItem:
      'Assemble an exhaust filter to remove VOCs from the build chamber.',
    func_processStep: 'Assemble the exhaust filter housing.',
    func_workElement:
      'Drill out the BSP adapter to allow a Bowden tube to fit through it.',
    fail_effect:
      '1. Your Plant: Scrapped component. 2. Ship-to Plant: N\/A. 3. End User: The adapter is cracked or damaged during drilling, making it unusable. Assembly is halted.',
    fail_severity: 4,
    fail_mode: 'BSP adapter cracked during drilling.',
    fail_cause:
      'The assembler uses excessive force, an incorrect drill size, or fails to properly secure the small part in a vise while drilling, causing it to shatter.',
    risk_prevention: "Instruction to 'drill these out' (p. 114).",
    risk_occurrence: 6,
    risk_detection: 'Visual inspection of the part after drilling.',
    risk_detScore: 2,
    risk_ap: 'M',
    opt_preventive:
      'Source a BSP adapter that already has the correct inner diameter, eliminating the need for this risky manual modification step.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 114, No evidence'
  },
  {
    id: 'FC_089',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep: '[Compressor Feet] Assemble Compressor Feet (p. 22)',
    structure_workElement: 'Material',
    func_processItem: 'Provide vibration-damping feet for the printer.',
    func_processStep:
      'Assemble the compressor feet to the bottom of the four Z-drive modules.',
    func_workElement:
      'The compressor feet are made of a soft, vibration-absorbing material.',
    fail_effect:
      '1. Your Plant: N\/A. 2. Ship-to Plant: N\/A. 3. End User: Printer vibrates excessively during fast movements. This can cause print quality artifacts like ringing or ghosting, and makes the printer louder.',
    fail_severity: 4,
    fail_mode: 'Poor vibration damping.',
    fail_cause:
      'The material for the compressor feet is too hard (incorrect shore hardness) due to a supplier issue or the user printing them in a rigid material like PLA instead of a recommended flexible material.',
    risk_prevention: 'Bill of materials specifies the correct component.',
    risk_occurrence: 4,
    risk_detection:
      'Tactile check of the feet (squeezing them) to verify they are soft\/flexible.',
    risk_detScore: 7,
    risk_ap: 'M',
    opt_preventive:
      'Add a note in the manual specifying the recommended material and shore hardness if the user is printing the feet themselves.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence (BOM not provided), No evidence'
  },
  {
    id: 'FC_121',
    history: '',
    structure_processItem: 'Gantry Assembly',
    structure_processStep: '[Y Rail Install] Using Rail Center Guide (p. 52)',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the gantry, which carries the toolhead.',
    func_processStep: 'Install the Y-axis linear rails onto the Y-extrusions.',
    func_workElement: 'Use the provided rail center guide tool.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The Y-rails are not centered on the extrusions. This can cause slight misalignments in the belt paths, leading to uneven belt wear over time.',
    fail_severity: 4,
    fail_mode: 'Rail center guide not used.',
    fail_cause:
      "Assembler forgets or ignores the instruction 'Don’t forget to use your rail center guide!'.",
    risk_prevention: 'Explicit instruction in the manual (p. 52).',
    risk_occurrence: 6,
    risk_detection: 'Visual inspection of rail position.',
    risk_detScore: 8,
    risk_ap: 'M',
    opt_preventive:
      'Redesign the rail carriages or printed parts to have a feature that references the center slot of the extrusion, making alignment automatic.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 52, No evidence'
  },
  {
    id: 'FC_147',
    history: '',
    structure_processItem: 'Frame Assembly',
    structure_processStep: '[Bed Extrusions] Assemble Bed Extrusions (p. 15)',
    structure_workElement: 'Man',
    func_processItem:
      "Assembly of a rigid and square foundational structure for the printer's motion system.",
    func_processStep:
      'Attach two bed support extrusions to the lower frame extrusions, leaving them loose for later adjustment.',
    func_workElement: 'Use M5 Shim with M5x10 BHCS.',
    fail_effect:
      '1. Your Plant: Rework required. 2. Ship-to Plant: N\/A. 3. End User: The M5 shim is forgotten. The M5x10 screw may be too short for proper engagement, or the alignment of the bed extrusion might be slightly off, affecting build plate levelness.',
    fail_severity: 4,
    fail_mode: 'M5 shim forgotten in bed extrusion assembly.',
    fail_cause:
      'The shim is a small, thin part that can be easily missed by the assembler.',
    risk_prevention:
      'Clear exploded diagram showing the M5 shim in the stackup (p. 15).',
    risk_occurrence: 7,
    risk_detection: 'Visual inspection during assembly.',
    risk_detScore: 8,
    risk_ap: 'M',
    opt_preventive:
      'Pre-assemble the screw and shim together in the hardware bag, or use a fastener with an integrated flange\/washer that serves the same purpose.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 15, No evidence'
  },
  {
    id: 'FC_179',
    history: '',
    structure_processItem: 'Spool Holder',
    structure_processStep: '[Spool & Bowden Tube Holder] Mount Holder (p. 110)',
    structure_workElement: 'Man',
    func_processItem: 'Hold and guide the filament spool.',
    func_processStep: 'Mount the Bowden tube holder to the frame.',
    func_workElement: 'Use pre-loaded T-nuts to secure the holder.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The T-nut is not correctly oriented in the extrusion slot. When the screw is tightened, it does not engage and just spins. The holder is loose and cannot guide the filament properly.',
    fail_severity: 4,
    fail_mode: 'T-nut spins in extrusion slot.',
    fail_cause:
      'The assembler drops the T-nut into the slot and does not ensure it has rotated 90 degrees to engage the slot lips before tightening the screw.',
    risk_prevention: 'General assembly knowledge for T-slot extrusions.',
    risk_occurrence: 7,
    risk_detection: 'The screw failing to tighten is the detection.',
    risk_detScore: 3,
    risk_ap: 'M',
    opt_preventive:
      "Recommend using 'drop-in' or 'roll-in' style T-nuts which are spring-loaded and easier to position correctly. Add an illustration showing how a T-nut should be oriented.",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_183',
    history: '',
    structure_processItem: 'Voron 2.4 Frame',
    structure_processStep: '[Final Check] Leveling Feet',
    structure_workElement: 'Man',
    func_processItem: 'Provide a stable base for the printer.',
    func_processStep: 'Ensure the printer sits level and without wobble.',
    func_workElement:
      'Adjust the leveling feet so all four are in firm contact with the surface.',
    fail_effect:
      '1. Your Plant: N\/A. 2. Ship-to Plant: N\/A. 3. End User: The printer is wobbling on its feet. This introduces vibration into the frame during printing, causing artifacts like ghosting and ringing.',
    fail_severity: 4,
    fail_mode: 'Printer wobbles on feet.',
    fail_cause:
      'The assembler does not adjust the compressor feet after placing the printer, leaving one foot slightly off the surface.',
    risk_prevention: 'The feet are designed to be adjustable.',
    risk_occurrence: 7,
    risk_detection:
      'Pressing on opposite corners of the printer frame to check for rocking.',
    risk_detScore: 5,
    risk_ap: 'M',
    opt_preventive:
      "Add a final step to the manual: 'Place your printer in its final location. Press on the top corners diagonally. If it rocks, adjust the height of the feet until all four are firmly on the surface.'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_191',
    history: '',
    structure_processItem: 'Initial Calibration',
    structure_processStep: '[Operation] First Filament Load',
    structure_workElement: 'Man',
    func_processItem: 'Reliably produce high-quality 3D prints.',
    func_processStep: 'Load filament into the extruder and hotend.',
    func_workElement:
      'Cut a clean, angled tip on the filament before inserting.',
    fail_effect:
      '1. Your Plant: N\/A. 2. Ship-to Plant: N\/A. 3. End User: The filament will not load. It gets stuck at the entrance to the extruder or at the transition into the heatbreak because the blunt or messy end cannot navigate the path.',
    fail_severity: 4,
    fail_mode: 'Filament fails to load.',
    fail_cause:
      'The user tries to insert filament that has a blunt, bent, or blobbed end from a previous use, and it snags inside the extruder.',
    risk_prevention: 'General 3D printing knowledge.',
    risk_occurrence: 8,
    risk_detection: 'The filament stopping is the detection.',
    risk_detScore: 2,
    risk_ap: 'M',
    opt_preventive:
      "Add a 'Loading Filament' section to the manual that instructs the user to always cut a fresh 45-degree angle on the filament tip before inserting it.",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_025',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep: '[Z Drive Motor Mounts] Attach Motor Mounts (p. 23)',
    structure_workElement: 'Material',
    func_processItem:
      'Assembly of four identical Z-axis belt drive modules to lift the gantry.',
    func_processStep:
      'Attach the printed motor mount to the stepper motor using four M3x8 SHCS.',
    func_workElement:
      "The 3D printed motor mount has holes spaced correctly to align with the NEMA17 motor's mounting pattern.",
    fail_effect:
      '1. Your Plant: Inability to assemble the motor to the mount. Printed part is scrapped. 2. Ship-to Plant: N\/A. 3. End User: Assembly process stops. User must reprint the motor mount, causing significant delay.',
    fail_severity: 6,
    fail_mode: 'Motor mount holes do not align with motor.',
    fail_cause:
      'The 3D printed part is out of spec due to printer miscalibration, incorrect STL file, or excessive ABS shrinkage.',
    risk_prevention:
      'Using official STL files. Community guidance on printer calibration for printing Voron parts.',
    risk_occurrence: 4,
    risk_detection:
      'Detected during the attempt to fasten the motor to the mount.',
    risk_detScore: 3,
    risk_ap: 'L',
    opt_preventive:
      'Provide a go\/no-go gauge file to print and test the hole spacing on the printed parts before starting assembly.',
    opt_detection:
      'Add a note to the manual to test-fit the motor to the mount before proceeding with any other assembly of the module.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_055',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Drive Gear] Assemble Drive Gear (p. 72)',
    structure_workElement: 'Material',
    func_processItem: 'Assembly of the Clockwork extruder mechanism.',
    func_processStep: 'Assemble the main filament drive gear.',
    func_workElement: 'MR85 bearings should slip onto the drive shaft easily.',
    fail_effect:
      '1. Your Plant: Assembly halted. Part damage from forcing. 2. Ship-to Plant: N\/A. 3. End User: Bearings are too tight on the shaft, preventing the drive gear from self-centering with the filament. This leads to filament grinding and inconsistent extrusion.',
    fail_severity: 6,
    fail_mode: 'MR85 bearings are too tight on the drive shaft.',
    fail_cause:
      'The 3D printed drive shaft is oversized due to printer miscalibration (over-extrusion).',
    risk_prevention:
      "Instructional note: 'If you find that they are too tight, you can lightly sand the drive shaft.' (p. 72).",
    risk_occurrence: 5,
    risk_detection: 'Test fitting the bearings onto the shaft.',
    risk_detScore: 3,
    risk_ap: 'L',
    opt_preventive:
      'Provide a calibration part (e.g., a test shaft) in the STL files to allow users to tune their printer settings before printing the actual parts.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 72, Assembly Manual, p. 72'
  },
  {
    id: 'FC_056',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Main Body] Check Clearance (p. 73)',
    structure_workElement: 'Material',
    func_processItem: 'Assembly of the Clockwork extruder mechanism.',
    func_processStep: 'Install the drive gear assembly into the main body.',
    func_workElement:
      'Provide sufficient clearance between the drive shaft and the extruder motor body.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The drive shaft rubs on the motor body, causing friction, binding, and inconsistent extruder performance. May lead to skipped steps on the extruder motor.',
    fail_severity: 6,
    fail_mode: 'Drive shaft rubs on extruder motor.',
    fail_cause:
      'The 3D printed drive shaft is too long, or the main body is dimensionally incorrect, eliminating the designed clearance.',
    risk_prevention:
      "Instruction to 'CHECK CLEARANCE' and sand if required (p. 73).",
    risk_occurrence: 5,
    risk_detection:
      'Visual and tactile check for rubbing when rotating the gear.',
    risk_detScore: 4,
    risk_ap: 'L',
    opt_preventive:
      'Adjust the 3D model to increase the clearance slightly, making it more tolerant of printing variations.',
    opt_detection:
      'Instruct the user to use a feeler gauge or a piece of paper to verify a gap exists.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 73, Assembly Manual, p. 73'
  },
  {
    id: 'FC_086',
    history: '',
    structure_processItem: 'Voron 2.4 Frame',
    structure_processStep: '[Frame Assembly] Assemble First Corner (p. 12)',
    structure_workElement: 'Material',
    func_processItem:
      "Assembly of a rigid and square foundational structure for the printer's motion system.",
    func_processStep:
      'Secure three aluminum extrusions at a 90-degree corner using an M5x16 BHCS fastener, creating the first vertex of the frame.',
    func_workElement:
      'The tapped hole in the end of the aluminum extrusion must be clean and correctly formed.',
    fail_effect:
      '1. Your Plant: Assembly halted, requires re-tapping or scrapping extrusion. 2. Ship-to Plant: N\/A. 3. End User: Fastener cross-threads or seizes in the extrusion. Unable to tighten or remove the fastener. The joint is not secure, or the extrusion is damaged.',
    fail_severity: 6,
    fail_mode: 'Threads in extrusion are stripped or cross-threaded.',
    fail_cause:
      'The tapped hole in the extrusion has a burr or was poorly tapped by the supplier. The assembler forces the screw, causing it to cross-thread.',
    risk_prevention: 'Sourcing of extrusions from reputable suppliers.',
    risk_occurrence: 4,
    risk_detection:
      'Feeling for excessive resistance when starting the fastener by hand.',
    risk_detScore: 6,
    risk_ap: 'L',
    opt_preventive:
      'Implement incoming quality control to check a sample of tapped holes on each batch of extrusions. Add instruction to run M5 screw into each hole by hand before assembly to check threads.',
    opt_detection:
      "Add note to manual: 'Start all frame screws by hand for 2-3 turns. If you feel resistance, stop, back out, and check the threads for debris.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_133',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Idler Assembly] Idler Gear (p. 75)',
    structure_workElement: 'Material',
    func_processItem: 'Assembly of the Clockwork extruder mechanism.',
    func_processStep: 'Assemble the idler gear mechanism.',
    func_workElement:
      'The idler gear must be manufactured with teeth that correctly mesh with the drive gear.',
    fail_effect:
      '1. Your Plant: N\/A. 2. Ship-to Plant: N\/A. 3. End User: The gears do not mesh smoothly, causing a clicking noise and inconsistent filament motion. This can lead to extrusion artifacts (regular patterns) in the print surface.',
    fail_severity: 6,
    fail_mode: 'Extruder gears mesh poorly.',
    fail_cause:
      'The 3D printed idler gear has artifacts or dimensional inaccuracies (due to a poorly calibrated printer) that prevent it from meshing smoothly with the metal drive gear.',
    risk_prevention: 'Using a well-calibrated printer to produce the parts.',
    risk_occurrence: 5,
    risk_detection:
      'Feeling for roughness or clicking when rotating the gears by hand during assembly.',
    risk_detScore: 6,
    risk_ap: 'L',
    opt_preventive:
      'Recommend using injection-molded gears, which are available from third-party suppliers, for better consistency and performance.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_143',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Hot End Retention] Test Fit Housing (p. 67)',
    structure_workElement: 'Man',
    func_processItem:
      'Assembly of the Afterburner toolhead, which holds the hotend and extruder.',
    func_processStep: 'Assemble the hot end and fan housing.',
    func_workElement:
      'The printed hot end housing should be a firm slide-in fit, not too tight.',
    fail_effect:
      '1. Your Plant: Damaged parts from forcing assembly. 2. Ship-to Plant: N\/A. 3. End User: The fit is too tight. The user has to use excessive force to assemble the parts, which can crack or break the printed components. The assembly is now under high stress and may fail later.',
    fail_severity: 6,
    fail_mode: 'Hot end housing fit is too tight.',
    fail_cause:
      'The 3D printed parts are oversized due to printer miscalibration (over-extrusion). The user does not test fit and sand\/file the parts for a smooth fit.',
    risk_prevention: "Instruction to 'TEST FIT HOUSING' (p. 67).",
    risk_occurrence: 5,
    risk_detection: 'The test fit itself is the detection control.',
    risk_detScore: 3,
    risk_ap: 'L',
    opt_preventive:
      "Add a note to the test fit instruction: 'The parts should slide together with firm pressure. If you need to use excessive force, stop and sand the mating surfaces for a better fit.'",
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 67, Assembly Manual, p. 67'
  },
  {
    id: 'FC_148',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep:
      '[Belt Drive Shaft Assembly] Assemble Shaft Components (p. 20)',
    structure_workElement: 'Material',
    func_processItem:
      'Assembly of four identical Z-axis belt drive modules to lift the gantry.',
    func_processStep:
      'Assemble a drive shaft with two pulleys (80T and 20T), three bearings, and shims.',
    func_workElement:
      'The bore of the GT2 pulleys must match the shaft diameter.',
    fail_effect:
      '1. Your Plant: Rework, scrapped parts. 2. Ship-to Plant: N\/A. 3. End User: The pulley bore is undersized. The user attempts to force the pulley onto the shaft, damaging the pulley or the shaft. Assembly is halted until replacement parts are sourced.',
    fail_severity: 6,
    fail_mode: 'Pulley does not fit on shaft.',
    fail_cause:
      'Supplier sent a pulley with the incorrect bore size (e.g., 5mm bore for an 8mm shaft), or the bore has a large burr from manufacturing.',
    risk_prevention: 'Sourcing from a reputable kit vendor.',
    risk_occurrence: 3,
    risk_detection:
      'Test fitting the pulley on the shaft before assembling the entire stack.',
    risk_detScore: 4,
    risk_ap: 'L',
    opt_preventive:
      'Implement incoming quality control to check a sample of pulleys for correct bore diameter.',
    opt_detection:
      "Add a note: 'Test fit all pulleys and bearings on the shaft before assembling the stack.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_194',
    history: '',
    structure_processItem: 'Software and Firmware',
    structure_processStep: '[Firmware] Edit `printer.cfg` file',
    structure_workElement: 'Man',
    func_processItem: "Install and configure the printer's control software.",
    func_processStep:
      'Configure all printer hardware parameters in the Klipper `printer.cfg` text file.',
    func_workElement:
      'Correctly assign the pins for each motor, heater, and sensor.',
    fail_effect:
      '1. Your Plant: Unexpected behavior. 2. Ship-to Plant: N\/A. 3. End User: The wrong component activates. For example, commanding the hotend to heat turns on the part cooling fan instead. The printer is non-functional and the behavior is confusing.',
    fail_severity: 6,
    fail_mode: 'Incorrect pin assigned to a component in firmware.',
    fail_cause:
      'The user makes a copy-paste error while editing the `printer.cfg` file, assigning the pin for one component to another.',
    risk_prevention:
      'Using the correct sample configuration file for the controller board.',
    risk_occurrence: 5,
    risk_detection:
      'Systematically testing each component one by one from the software interface and verifying the correct physical part responds.',
    risk_detScore: 6,
    risk_ap: 'L',
    opt_preventive:
      'Provide pre-configured, known-good configuration files for the most common hardware combinations to minimize user editing.',
    opt_detection:
      'The Klipper configuration check guide (referenced on p. 135) provides a systematic procedure for this detection.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 135, No evidence'
  },
  {
    id: 'FC_063',
    history: '',
    structure_processItem: 'LCD Module',
    structure_processStep: '[Spacer and Mounting] Assemble LCD (p. 90)',
    structure_workElement: 'Material',
    func_processItem: 'Provide a user interface for the printer.',
    func_processStep: 'Assemble the LCD screen into its printed housing.',
    func_workElement:
      'The LCD screen is fragile and must be handled carefully to avoid damage.',
    fail_effect:
      '1. Your Plant: Scrapped component. 2. Ship-to Plant: N\/A. 3. End User: Cracked or non-functional LCD screen. The printer may still be operable via a web interface, but local control is lost.',
    fail_severity: 5,
    fail_mode: 'LCD screen cracked or damaged.',
    fail_cause:
      'The assembler applies too much pressure while seating the LCD in the housing, or overtightens the mounting screws, cracking the PCB or screen.',
    risk_prevention: 'General caution for handling electronics.',
    risk_occurrence: 4,
    risk_detection:
      'Visual inspection and functional test of the LCD after assembly.',
    risk_detScore: 3,
    risk_ap: 'L',
    opt_preventive:
      'Redesign the housing to include soft pads (e.g., foam) for the LCD to rest on, and use shoulder screws to prevent over-tightening.',
    opt_detection:
      "Add a note: 'CAUTION: LCD is fragile. Do not overtighten screws. Tighten until just snug.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_101',
    history: '',
    structure_processItem: 'Build Plate Assembly',
    structure_processStep: '[Z Endstop Pin] Deflange GT2 20T Pulley (p. 32)',
    structure_workElement: 'Man',
    func_processItem:
      'Provide a physical trigger mechanism for the Z-axis endstop switch.',
    func_processStep:
      'Prepare a GT2 20T pulley for use in the endstop pin assembly.',
    func_workElement: 'Remove the flange from the pulley.',
    fail_effect:
      '1. Your Plant: Scrapped pulley. 2. Ship-to Plant: N\/A. 3. End User: The pulley is damaged during the de-flanging process (e.g., bent or cracked). The endstop pin assembly will not rotate true, causing inconsistent Z-homing.',
    fail_severity: 5,
    fail_mode: 'Pulley damaged during de-flanging.',
    fail_cause:
      'The assembler uses an incorrect method or excessive force (e.g., trying to break it off with pliers) to remove the flange, damaging the pulley body.',
    risk_prevention:
      "Instruction to 'Check our help videos in discord' for the procedure (p. 32).",
    risk_occurrence: 5,
    risk_detection: 'Visual inspection of the pulley after the operation.',
    risk_detScore: 4,
    risk_ap: 'L',
    opt_preventive:
      'Source flange-less pulleys specifically for this component to eliminate the manual modification step.',
    opt_detection:
      'Instruct the user to roll the pulley on a flat surface after de-flanging to check for wobble.',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 32, No evidence'
  },
  {
    id: 'FC_192',
    history: '',
    structure_processItem: 'Exhaust Filter',
    structure_processStep: '[Wiring] Fan Wiring',
    structure_workElement: 'Man',
    func_processItem:
      'Assemble an exhaust filter to remove VOCs from the build chamber.',
    func_processStep: 'Wire the exhaust fan.',
    func_workElement: 'Wire the fan with the correct polarity.',
    fail_effect:
      "1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The fan is wired backwards. It either doesn't spin, or it spins in reverse, pressurizing the chamber instead of extracting air. VOCs are not removed and may be forced out of panel gaps.",
    fail_severity: 5,
    fail_mode: 'Exhaust fan wired with reverse polarity.',
    fail_cause:
      'The assembler reverses the positive and negative wires at the controller board.',
    risk_prevention: 'Red\/black wires indicate polarity.',
    risk_occurrence: 5,
    risk_detection:
      'Feeling for airflow at the filter outlet once the fan is powered on.',
    risk_detScore: 5,
    risk_ap: 'L',
    opt_preventive:
      'Use keyed JST connectors for fans to make reverse polarity connection impossible.',
    opt_detection:
      "Add a checklist item: 'Turn on exhaust fan. Verify air is being blown OUT of the filter housing.'",
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'No evidence, No evidence'
  },
  {
    id: 'FC_134',
    history: '',
    structure_processItem: 'LCD Module',
    structure_processStep: '[LCD Latch] Install Latch (p. 91)',
    structure_workElement: 'Man',
    func_processItem: 'Provide a user interface for the printer.',
    func_processStep:
      'Install the fully assembled LCD module to the printer frame.',
    func_workElement:
      'The latching mechanism must engage correctly to hold the module securely.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The LCD module is loose and rattles, or falls off the printer frame entirely, potentially damaging the screen or wiring.',
    fail_severity: 4,
    fail_mode: 'LCD module does not latch securely.',
    fail_cause:
      'The printed latch or the mating feature on the frame is out of tolerance, preventing full engagement. Or the assembler did not fully tighten the latch screws.',
    risk_prevention: 'Assembly diagram on p. 91.',
    risk_occurrence: 5,
    risk_detection:
      'Gently pulling on the module after installation to verify it is secure.',
    risk_detScore: 5,
    risk_ap: 'L',
    opt_preventive:
      'Adjust the tolerances on the 3D models for the latching parts to make the fit more reliable across a wider range of printers.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 91, No evidence'
  },
  {
    id: 'FC_059',
    history: '',
    structure_processItem: 'Afterburner (Toolhead)',
    structure_processStep: '[Cable Cover] Install Cable Cover (p. 79)',
    structure_workElement: 'Man',
    func_processItem: 'Assembly of the Clockwork extruder mechanism.',
    func_processStep: 'Install the cable management cover.',
    func_workElement:
      'Hang the cable cover off the heads of the M3x20 fasteners.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The cover does not fit or is not easily removable, making future maintenance difficult.',
    fail_severity: 3,
    fail_mode: 'Cable cover installed incorrectly (under fastener heads).',
    fail_cause:
      "Assembler misunderstands the 'OVER NOT UNDER' instruction and tries to fasten the cover down with the screws instead of hanging it from them.",
    risk_prevention: 'Explicit instruction with a clear diagram (p. 79).',
    risk_occurrence: 6,
    risk_detection:
      'The part will not fit correctly if installed under the heads.',
    risk_detScore: 3,
    risk_ap: 'L',
    opt_preventive:
      'Change the design to use small clips or tabs instead of hanging on screw heads, making the intent more obvious.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 79, Assembly Manual, p. 79'
  },
  {
    id: 'FC_118',
    history: '',
    structure_processItem: 'Z Drive Module',
    structure_processStep:
      '[Z Axis Linear Rails] Install Z-Axis Linear Rails (p. 16)',
    structure_workElement: 'Man',
    func_processItem:
      'Provide a smooth, precise, and parallel guide system for the Z-axis motion.',
    func_processStep:
      'Secure four linear rails to the four vertical frame extrusions using M3x8 SHCS fasteners.',
    func_workElement:
      'Stagger fasteners as shown in the diagram, not using every hole.',
    fail_effect:
      '1. Your Plant: Wasted fasteners and time. 2. Ship-to Plant: N\/A. 3. End User: No significant negative effect on function, but the user has wasted a large number of fasteners and may run out for later steps, halting the build.',
    fail_severity: 3,
    fail_mode: 'Excessive fasteners used on linear rail.',
    fail_cause:
      "Assembler does not follow the 'STAGGER FASTENERS' instruction and installs a fastener in every single hole of the linear rail.",
    risk_prevention:
      "Explicit instruction: 'There’s no need to use a fastener in every hole...We recommend staggering them...' (p. 16).",
    risk_occurrence: 7,
    risk_detection: 'Visual check against the diagram.',
    risk_detScore: 8,
    risk_ap: 'L',
    opt_preventive:
      'Update the bill of materials to only include the exact number of fasteners required for staggered mounting, so there are no extras.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 16, No evidence'
  },
  {
    id: 'FC_124',
    history: '',
    structure_processItem: 'Panels',
    structure_processStep: '[Bottom Panel] Install Hinges (p. 106)',
    structure_workElement: 'Man',
    func_processItem: 'Enclose the build chamber with panels.',
    func_processStep: 'Install the bottom panel.',
    func_workElement: 'Place the hinges on the rear of the machine.',
    fail_effect:
      '1. Your Plant: Rework. 2. Ship-to Plant: N\/A. 3. End User: The bottom electronics-bay panel is hinged at the front or side. It cannot be opened easily for access without conflicting with other parts or being awkward to use.',
    fail_severity: 3,
    fail_mode: 'Hinges installed in wrong location.',
    fail_cause:
      "Assembler misses the instruction 'Remember to place the hinges on the rear of the machine.'",
    risk_prevention: 'Instruction in manual (p. 106).',
    risk_occurrence: 6,
    risk_detection: 'Self-evident when trying to operate the hinged panel.',
    risk_detScore: 4,
    risk_ap: 'L',
    opt_preventive:
      'Design the skirt pieces to be asymmetrical so the hinge parts only fit on the rear section.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 106, No evidence'
  },
  {
    id: 'FC_136',
    history: '',
    structure_processItem: 'Exhaust Filter',
    structure_processStep: '[Filter Housing Mounting] Mount Housing (p. 116)',
    structure_workElement: 'Man',
    func_processItem:
      'Assemble an exhaust filter to remove VOCs from the build chamber.',
    func_processStep: 'Mount the filter housing to the printer frame.',
    func_workElement: 'Ensure the housing is mounted securely.',
    fail_effect:
      '1. Your Plant: N\/A. 2. Ship-to Plant: N\/A. 3. End User: The filter housing is loose and vibrates noisily while the fan is running.',
    fail_severity: 3,
    fail_mode: 'Filter housing rattles.',
    fail_cause:
      'The assembler fails to fully tighten the M5x10 mounting screws.',
    risk_prevention: 'Assembly diagram on p. 116.',
    risk_occurrence: 6,
    risk_detection: 'Wiggling the housing by hand after installation.',
    risk_detScore: 5,
    risk_ap: 'L',
    opt_preventive:
      'Add a foam gasket between the filter housing and the frame panel to prevent vibration and improve sealing.',
    opt_detection: 'N\/A',
    opt_responsible: '',
    opt_targetDate: '',
    opt_status: '',
    opt_actionTaken: '',
    opt_completionDate: '',
    opt_sev: '',
    opt_occ: '',
    opt_det: '',
    opt_spProdChar: '',
    opt_pfmeaAp: '',
    opt_remarks: 'Assembly Manual, p. 116, No evidence'
  }
]
