import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navBar: {
    backgroundColor: '#203040 !important',
    "& a": {
      color: "#ffff !important",
      textDecoration: 'none',

      padding: 10 ,
    },
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    marginTop:10,
    textAlign: "center",
  },
  brand: {
    fontWeight: 'bold !important',
    fontSize: '1.5rem !important',
  },
  grow: {
    flexGrow: 1,
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  
});

export default useStyles;
