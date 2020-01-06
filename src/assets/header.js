const appStyle = theme => ({
  header:{
    position: "fixed",
    left:'0',
    top:'0',
    right:'0',
    zIndex:'1022',
    background:"#fff",
    height:'70px',
    borderBottom:'1px solid #eee',
    boxSizing:'border-box',
    padding:'0 15px',
    lineHeight:'70px',
    [theme.breakpoints.up("md")]: {
      left:'260px'
    },
    display: 'flex'
  },
  main:{
    flex:'1'
  },
  manager:{
    position: 'relative'
  },
  notifications:{
    position: 'absolute',
    right: '8px',
    top: '18px',
    width: '16px',
    height: '16px',
    lineHeight: '16px',
    fontSize: '10px',
    background: '#f00',
    textAlign: 'center',
    borderRadius: '50%',
    color: '#FFF',
    border:'1px solid #fff'
  },
  person:{

  },
  dropdownItem:{
    fontSize:'14px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block',
    lineHeight:'30px',
  },
  NotificationPoppers:{
    width:'240px',
    padding:'0 10px',
  },
  NotificationMenuList:{
    maxHeight:'168px',
    overflowY: 'auto',
    padding:'0',
    '&::-webkit-scrollbar':{
      width:'4px', 
      background:'#fff',
      borderRadius:'4px'
    },
    '&::-webkit-scrollbar-thumb':{
      width:'4px', 
      background:'#eee',
      borderRadius:'4px'
    }
  }
})

export default appStyle;
