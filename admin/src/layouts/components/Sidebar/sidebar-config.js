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
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';

const config = [
    {
        root: true,
        title: "Dashboard",
        expanded: true,
        children: [
            {
                title: "Overview",
                icon: <HomeIcon fontSize='inherit' color='inherit' />,
                to: "/admin",
            },
            {
                title: "Analytics",
                icon: <QueryStatsIcon fontSize='inherit' color='inherit' />,
                to: "/admin/Analytics",
            },
            {
                title: "Sales",
                icon: <TrendingUpIcon fontSize='inherit' color='inherit' />,
                to: "/admin/Sales"
            },
        ]
    },
    {
        root: true,
        title: "Quick Menu",
        separate: true,
        expanded: true,
        children: [
            {
                title: "Users",
                icon: <PermIdentityOutlinedIcon fontSize='inherit' color='inherit' />,
                to: '/admin/users'
            },
            {
                title: "Movies",
                icon: <SlideshowIcon fontSize='inherit' color='inherit' />,
                to: '/admin/movies'
            },
            {
                title: "Cimema",
                icon: <TheatersOutlinedIcon fontSize='inherit' color='inherit' />,
                to: '/admin/cinema'
            },
            {
                title: "Add User",
                icon: <PersonAddIcon fontSize='inherit' color='inherit' />,
                to: '/admin/users/new'

            },
            {
                title: "Add Movie",
                icon: <QueuePlayNextIcon fontSize='inherit' color='inherit' />,
                to: '/admin/movies/new'
            },
            {
                title: "Add Cimema",
                icon: <PostAddOutlinedIcon fontSize='inherit' color='inherit' />,
                to: '/admin/cinema/new'
            },
        ]
    },
    {
        root: true,
        title: "Notificate",
        separate: true,
        expanded: true,
        children: [
            {
                title: "Email",
                icon: <EmailOutlinedIcon fontSize='inherit' color='inherit' />,
                to: '/admin/email'
            },
            {
                title: "Feedback",
                icon: <DynamicFeedOutlinedIcon fontSize='inherit' color='inherit' />,
                to: '/admin/feedback'
            },
            {
                title: "Message",
                icon: <SmsOutlinedIcon fontSize='inherit' color='inherit' />,
                to: '/admin/message'
            }
        ]
    },
    {
        root: true,
        title: "Staff",
        separate: true,
        expanded: true,
        children: [
            {
                title: "Mangage",
                icon: <ManageHistoryOutlinedIcon fontSize='inherit' color='inherit' />,
                to: '/admin/manage'
            },
            {
                title: "Report",
                icon: <BugReportOutlinedIcon fontSize='inherit' color='inherit' />,
                to: '/admin/report'
            }
        ]
    },
    {
        root: true,
        separate: true,
        expanded: true,
        title: "Documentation",
        icon: <TextSnippetOutlinedIcon fontSize='inherit' color='inherit' />,
        to: '/admin/documentation'
    },
]

export default config