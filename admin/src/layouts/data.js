import HomeIcon from '@mui/icons-material/Home';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const menu = [
    {
        root: true,
        title: "Dashboard",
        children: [
            {
                title: "Home",
                icon: <HomeIcon fontSize='inherit' color='inherit' />,
                to: "/",
            },
            {
                title: "Analytics",
                icon: <QueryStatsIcon fontSize='inherit' color='inherit' />,
                to: "/Analytics",
            },
            {
                title: "Sales",
                icon: <TrendingUpIcon fontSize='inherit' color='inherit' />,
                to: "/Sales"
            },
        ]
    },
    {
        root: true,
        title: "Quick Menu",
        separate: true,
        children: [
            {
                title: "Users",
                icon: <PermIdentityOutlinedIcon fontSize='inherit' color='inherit' />,
            },
            {
                title: "Movies",
                icon: <SlideshowIcon fontSize='inherit' color='inherit' />,

            },
            {
                title: "Add User",
                icon: <PersonAddIcon fontSize='inherit' color='inherit' />,
            },
            {
                title: "Add Movie",
                icon: <QueuePlayNextIcon fontSize='inherit' color='inherit' />,
            },
        ]
    },
    {
        root: true,
        title: "Notificate",
        separate: true,
        children: [
            {
                title: "Email",
                icon: <EmailOutlinedIcon fontSize='inherit' color='inherit' />,
            },
            {
                title: "Feedback",
                icon: <DynamicFeedOutlinedIcon fontSize='inherit' color='inherit' />,

            },
            {
                title: "Message",
                icon: <SmsOutlinedIcon fontSize='inherit' color='inherit' />,
            }
        ]
    },
    {
        root: true,
        title: "Staff",
        separate: true,
        children: [
            {
                title: "Mangage",
                icon: <ManageHistoryOutlinedIcon fontSize='inherit' color='inherit' />,
            },
            {
                title: "Report",
                icon: <BugReportOutlinedIcon fontSize='inherit' color='inherit' />,

            }
        ]
    },
    {
        root: true,
        separate: true,
        title: "Documentation",
        icon: <TextSnippetOutlinedIcon fontSize='inherit' color='inherit' />
    },
]

export default menu