import { CallOutlined, MailOutline, PersonOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const FormComponent = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
const navigate = useNavigate()


  const theme = useTheme();
  const loading = false;
  return (
    <Box marginTop={5}>
      <form onSubmit={handleSubmit}>
        <Stack
          gap={3}
          sx={{
            "& .MuiTypography-root": {
              fontSize: "0.8rem",
              color: theme.palette.text.secondary,
              marginBottom: "0.38rem",
            },

            "& .MuiTextField-root": {
              bgcolor: "#1A1D21",
              border: "1px solid ",
              borderRadius: "8px",
              color: "#CDCECF",
            },
          }}
        >
          {/* ------------full name---------- */}

          <Box>
            <Typography>Full Name</Typography>
            <TextField
              placeholder="Enter Your Name"
              size="small"
              fullWidth
              name="name"
              required={true}
              variant="outlined"
              // value={userDetails.name}
              // onChange={hanldeChange}

              slotProps={{
                input: {
                  inputProps: {
                    sx: {
                      color: "white",
                    },
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="start"
                      >
                        {/* ----------------- user icon---------------- */}
                        <PersonOutline
                          sx={{
                            color: "#CDCECF",
                            marginInline: "0.2rem",
                            background: "none",
                          }}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>

          {/* ------------email address---------- */}

          <Box>
            <Typography>Email Address</Typography>
            <TextField
              placeholder="Enter Your Email"
              size="small"
              fullWidth
              name="email"
              required={true}
              // value={userDetails.email}
              // onChange={hanldeChange}
              slotProps={{
                input: {
                  inputProps: {
                    sx: {
                      color: "white",
                    },
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="start"
                      >
                        {/* ----------------- Mail icon---------------- */}
                        <MailOutline
                          sx={{
                            color: "#CDCECF",
                            marginInline: "0.2rem",
                            background: "none",
                          }}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>

          {/* ------------Get Started button---------- */}

          <Button
          onClick={()=>navigate('/shopping')}
            type="submit"
            sx={{
              mt: "1.5rem",
              color: "white",
              textTransform: "none",
            }}
            variant="contained"
            fullWidth
          >
            {loading ? (
              <CircularProgress
                size={27}
                sx={{
                  color: "#fff",
                }}
              />
            ) : (
              "Get Started"
            )}
          </Button>

          <Button
            //   onClick={hanldeLogin}
            sx={{
              color: "#000",
              textTransform: "none",
            }}
            variant="outlined"
            fullWidth
          >
            Already Register!{" "}
            <span
              style={{
                fontWeight: "600",
                marginLeft: "1rem",
              }}
            >
              Try Login{" "}
            </span>
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default FormComponent;
