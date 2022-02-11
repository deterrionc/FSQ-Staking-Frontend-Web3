// ----------------------------------------------------------------------

export default function Timeline(theme) {
  return {
    MuiTimelineItem: {
      styleOverrides: {
        missingOppositeContent: {
          "&:before": {
            display: "none",
          },
        },
      },
    },
  };
}
