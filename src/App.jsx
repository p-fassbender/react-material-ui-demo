import './App.css'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { createTheme, colors, ThemeProvider } from '@mui/material';

// import { MuiAccordion } from './components/MuiAccordion'
// import { MuiAlert } from './components/MuiAlert'
// import { MuiAutocomplete } from './components/MuiAutocomplete'
// import { MuiAvatar } from './components/MuiAvatar'
// import { MuiBadge } from './components/MuiBadge'
// import { MuiBottomNavigation } from './components/MuiBottomNavigation'
// import { MuiBreadcrumbs } from './components/MuiBreadcrumbs'
// import { MuiButton } from './components/MuiButton'
// import { MuiCard } from './components/MuiCard'
// import { MuiCheckbox } from './components/MuiCheckbox'
// import { MuiChip } from './components/MuiChip'
// import { MuiDialog } from './components/MuiDialog'
// import { MuiDrawer } from './components/MuiDrawer'
// import { MuiImageList } from './components/MuiImageList'
// import { MuiLayout } from './components/MuiLayout'
// import { MuiLink } from './components/MuiLink'
// import { MuiList } from './components/MuiList'
// import { MuiLoadingButton } from './components/MuiLoadingButton'
// import { MuiMasonry } from './components/MuiMasonry';
// import { MuiNavbar } from './components/MuiNavbar'
// import { MuiPicker } from './components/MuiPicker';
// import { MuiProgress } from './components/MuiProgress'
// import { MuiRadioButton } from './components/MuiRadioButton'
// import { MuiRating } from './components/MuiRating'
import { MuiResponsiveness } from './components/MuiResponsiveness';
// import { MuiSelect } from './components/MuiSelect'
// import { MuiSkeleton } from './components/MuiSkeleton'
// import { MuiSnackbar } from './components/MuiSnackbar'
// import { MuiSpeedDial } from './components/MuiSpeedDial'
// import { MuiSwitch } from './components/MuiSwitch'
// import { MuiTable } from './components/MuiTable'
// import { MuiTabs } from './components/MuiTabs';
// import { MuiTextField } from './components/MuiTextField'
// import { MuiTimeline } from './components/MuiTimeline';
// import { MuiTooltip } from './components/MuiTooltip'
// import { MuiTypography } from './components/MuiTypography'

const theme = createTheme({
    status: {
        danger: '#e53e3e'
    },
    palette: {
        secondary: {
            main: colors.orange[500]
        },
        neutral: {
            main: colors.grey[500],
            darker: colors.grey[700]
        }
    }
})

function App() {
    return (
        <>
            {/* <MuiTypography /> */}

            {/* <MuiButton /> */}

            {/* <MuiTextField /> */}

            {/* <MuiSelect /> */}

            {/* <MuiRadioButton /> */}

            {/* <MuiCheckbox /> */}

            {/* <MuiSwitch /> */}

            {/* <MuiRating /> */}

            {/* <MuiAutocomplete /> */}

            {/* <MuiLayout /> */}

            {/* <MuiCard /> */}

            {/* <MuiAccordion /> */}

            {/* <MuiImageList /> */}

            {/* <MuiNavbar /> */}

            {/* <MuiLink /> */}

            {/* <MuiBreadcrumbs /> */}

            {/* <MuiDrawer /> */}

            {/* <MuiSpeedDial /> */}

            {/* <MuiBottomNavigation /> */}

            {/* <MuiAvatar /> */}

            {/* <MuiBadge /> */}

            {/* <MuiList /> */}

            {/* <MuiChip /> */}

            {/* <MuiTooltip /> */}

            {/* <MuiTable /> */}

            {/* <MuiAlert /> */}

            {/* <MuiSnackbar /> */}

            {/* <MuiDialog /> */}

            {/* <MuiProgress /> */}

            {/* <MuiSkeleton /> */}

            {/* <MuiLoadingButton /> */}

            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MuiPicker />
            </LocalizationProvider> */}

            {/* <MuiTabs /> */}

            {/* <MuiTimeline /> */}

            {/* <MuiMasonry /> */}

            <ThemeProvider theme={theme}>
                <MuiResponsiveness />
            </ThemeProvider>
        </>
    )
}

export default App
