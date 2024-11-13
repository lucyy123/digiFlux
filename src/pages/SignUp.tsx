import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import FormComponent from "../component/form";

const SignUp = () => {
  return (
    <Container maxWidth="sm" sx={{
      padding:"2rem 4rem"
    }}>
      <Paper elevation={2}  sx={{
      padding:"2rem 4rem"
    }}>
        <Stack>
          {/* ----------------------- digiflux logo--------------------------- */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://www.digiflux.io/_next/static/images/Digiflux_LOGO-699dcf30a682ced7286d7fced617848e.png"
              alt="DigiFlux_logo"
              style={{
                height: "100px",
              }}
            />
          </Box>
          {/* ------------------------------- Title---------------------------------- */}

          <Typography variant="h5" fontWeight={"600"} mt={2}>
            SignUp
          </Typography>

          {/* ------------------------------------------ sinup form------------------------------------- */}

          <FormComponent />
        </Stack>
      </Paper>
    </Container>
  );
};

export default SignUp;
