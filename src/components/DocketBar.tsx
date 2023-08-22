import './DocketBar.css';

export default function DocketBar(docket: {docketName: string, docketId: string, statusColor: string, projectSiteAddress: string})
{   
    return(
        <>
            <div className="dockets">
                <input type="button" id={docket.docketId} style={{"borderColor": docket.statusColor}}/>
                <label htmlFor={docket.docketId}>{docket.docketName}</label>
                <span style={{"backgroundColor": docket.statusColor}} className="address">{docket.projectSiteAddress}</span>
            </div>
        </>
    );
}