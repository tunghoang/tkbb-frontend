export default function Scholars() {
  return (
    <div className="content-wrapper" style={{overflowX: 'hidden'}}>
      <iframe title="yearlyreport" style={{
              height: 'calc(100vh - 120px)', 
              position: 'relative', 
              left: '-60px', 
              width: 'calc(100% + 60px)'
          }}
          src="/grafana/d/ScS057SVk/scholars?orgId=1&theme=light" frameborder="0">
      </iframe>
    </div>
  )
}
