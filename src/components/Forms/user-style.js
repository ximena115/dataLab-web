const styles = theme => ({
    rootFull: {
        display: 'flex',
        width: '100%',
        zIndex: 1,
        position: 'relative',
    },
    containerSide: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            overflow: 'hidden'
        },
        [theme.breakpoints.down('sm')]: {
            overflow: 'scroll'
        },
    },
    sideFormWrap: {
        margin: "10% auto auto auto",
        borderRadius: "20px",
        width: '45%',
        zIndex: 1,
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: 0,
            height: 500,
            borderRadius: 0,
        }
    },
    sideWrap: {
        padding: '1rem 1rem 1rem 1rem',
        borderRadius: 40,
        [theme.breakpoints.down('sm')]: {
            margin: 0,
            height: "auto",
            minWidth: 320,
            overflow: "scroll",
            borderRadius: 0,
        },
    },
    headLogo: {
        margin: 'auto',
        textAlign: 'center',
        width: '42%',
        display: 'block',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    topBar: {
        display: 'flex',
        paddingBottom: theme.spacing(2),
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
            paddingBottom: theme.spacing(3),
        }
    },
    title: {
        color: '#fff',
        display: 'block',
        margin: 'auto',
        fontWeight: 700,
        fontSize: 28,
        [theme.breakpoints.down('sm')]: {
            fontSize: 24,
        }
    },
    pageFormSideWrap: {
        margin: '0 auto',
        [theme.breakpoints.only('sm')]: {
            width: 480,
        },
    },
    formControl: {
        width: '100%',
        marginRight: theme.spacing(1)
    },
    marginFields: {
        marginTop: theme.spacing(1)
    },
    input: {
        background: "white"
    },
    btnArea: {
        display: 'flex',
        justifyContent: 'center',
        margin: `${theme.spacing(4)}px 0 ${theme.spacing(3)}px`,
        fontSize: 12,
        '& $label': {
          fontSize: 12,
          '& span': {
            fontSize: 12
          }
        },
        '& button': {
          margin: `0 ${theme.spacing(1)}px`
        },
        [theme.breakpoints.down('xs')]: {
          flexDirection: 'column',
          '& button': {
            width: '100%',
            margin: 5
          }
        },
      },
});

export default styles;
