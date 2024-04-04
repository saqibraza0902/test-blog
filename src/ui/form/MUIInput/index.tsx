import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  Theme,
  useTheme,
} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { inputLabelClasses, outlinedInputClasses } from "@mui/material";
import { BiMessage } from "react-icons/bi";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/styles";
import { MdOutlineMailOutline } from "react-icons/md";

const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          inputAdornedEnd: {
            width: "90%",
            // marginRight: "15px", // Adjust the spacing between the input and the icon
            // marginLeft: "15px", // Adjust the spacing between the input and the icon
          },
          notchedOutline: {
            borderColor: "#ccc",
            color: "#ccc",
            width: "100%",
            borderRadius: "40px",
          },
          root: {
            color: "#ccc",
            width: "100%",
            minWidth: "300px",
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "#ccc",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "#ccc",
            },
          },
        },
      },
    },
  });

export default function MUIInput() {
  const classes = useTheme();

  return (
    <ThemeProvider theme={customTheme(classes)}>
      <TextField
        label="Your email address"
        InputLabelProps={{
          sx: {
            color: "#ccc",
            [`&.${inputLabelClasses.shrink}`]: {
              color: "#ccc",
            },
          },
        }}
        InputProps={{
          endAdornment: <HoverIcon />,
        }}
        variant="outlined"
      />
    </ThemeProvider>
  );
}

const HoverIcon = ({ text = "Hello", href = "/", className }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={href}
      className={cn(
        ` border-black h-8 w-min flex-nowrap text-nowrap  flex items-center justify-center relative overflow-hidden ${className}`
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-7 h-7 p-2 flex justify-center transition-all duration-300 items-center  rounded-full ${
          isHovered ? "bg-blue-700" : "bg-white"
        }`}
      >
        <motion.p
          className=""
          initial={{ x: "50%" }}
          animate={{ x: isHovered ? "200%" : "50%" }}
          transition={{ duration: 0.3 }}
        >
          <MdOutlineMailOutline color="#000" size={20} />
        </motion.p>
        <motion.p
          className=" "
          initial={{ x: "-200%" }}
          animate={{ x: isHovered ? "-50%" : "-200%" }}
          transition={{ duration: 0.3 }}
        >
          <MdOutlineMailOutline color="#fff" size={20} />
        </motion.p>
      </div>
    </Link>
  );
};
