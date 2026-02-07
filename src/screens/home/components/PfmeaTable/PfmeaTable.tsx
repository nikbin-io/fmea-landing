import { PFMEA_HEAD, PFMEA_BODY } from '~/constants/pfmea-table'

const PfmeaTable = () => {
  return (
    <div bg="white" flex="~ col" overflow="hidden" text="gray-dark" w="full">
      <div className="flex-1 overflow-auto border border-gray-300 shadow-lg relative">
        <table className="min-w-max border-collapse text-xs">
          <thead position="sticky top-0" z="2">
            <tr>
              {PFMEA_HEAD.map((section) => {
                const isIssueMeta = section.id === 'meta-issue'

                return (
                  <th
                    b="0 r-1 solid gray-light"
                    className={`
                      ${isIssueMeta ? 'bg-white ' : section.color}
                    `}
                    colSpan={section.columns.length}
                    font="bold"
                    h="8"
                    key={section.id}
                    p="1"
                    position={isIssueMeta ? 'sticky left-0' : 'static'}
                    text="center"
                    vertical-align="middle"
                    z={isIssueMeta ? '10' : 'auto'}>
                    {section.groupTitle}
                  </th>
                )
              })}
            </tr>

            <tr>
              {PFMEA_HEAD.map((section) => {
                return section.columns.map((col, colIdx) => (
                  <th
                    b="1 solid gray-light"
                    className={`${col.color ?? section.color} ${col.width} ${col.sticky ? 'sticky left-0 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]' : ''}`}
                    font="medium"
                    key={`${section.id}-sub-${colIdx}`}
                    p="2"
                    text="center"
                    vertical-align="top"
                    z={col.sticky ? '10' : 'auto'}>
                    {col.title}
                  </th>
                ))
              })}
            </tr>
          </thead>

          <tbody className="all-[td]:b-solid all-[td]:b-1 all-[td]:p-2  all-[td]:border-gray-light">
            {PFMEA_BODY.map((row: any, rIdx) => (
              <tr bg="white hover:gray-lighter" className="group" key={rIdx}>
                <td
                  b="r-1 gray-light"
                  bg="white group-hover:gray-lighter"
                  className="shadow-[1px_0_0_0_rgba(0,0,0,0.1)]"
                  font="medium"
                  position="sticky left-0">
                  {row.id}
                </td>
                <td>{row.history}</td>

                {/* STRUCTURE */}
                <td>{row.structure_processItem}</td>
                <td>{row.structure_processStep}</td>
                <td>
                  {row.structure_workElement4m ?? row.structure_workElement}
                </td>

                {/* FUNCTION */}
                <td>{row.func_processItem}</td>
                <td>{row.func_processStep}</td>
                <td>{row.func_workElement}</td>

                {/* FAILURE */}
                <td>{row.fail_effect}</td>
                <td text="center">{row.fail_severity}</td>
                <td>{row.fail_mode}</td>
                <td>{row.fail_cause}</td>

                {/* RISK */}
                <td>{row.risk_prevention}</td>
                <td text="center">{row.risk_occurrence}</td>
                <td>{row.risk_detection}</td>
                <td text="center">{row.risk_detScore}</td>
                <td text="center">{row.risk_ap}</td>
                <td text="center">{row.risk_specialChar ?? ''}</td>
                <td text="center">{row.risk_filter ?? ''}</td>

                {/* OPTIMIZATION */}
                <td>{row.opt_preventive}</td>
                <td>{row.opt_detection}</td>
                <td>{row.opt_responsible}</td>
                <td>{row.opt_targetDate}</td>
                <td>{row.opt_status}</td>
                <td>{row.opt_actionTaken}</td>
                <td>{row.opt_completionDate}</td>
                <td text="center">{row.opt_sev}</td>
                <td text="center">{row.opt_occ}</td>
                <td text="center">{row.opt_det}</td>
                <td text="center">{row.opt_spProdChar ?? ''}</td>
                <td text="center">{row.opt_pfmeaAp ?? ''}</td>
                <td>{row.opt_remarks ?? ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PfmeaTable
