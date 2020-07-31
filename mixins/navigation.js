
export const Mixin = {
    computed: {
        nav() {
            return [
                {

                    title: "Home",
                    to: "/"
                },
                {
                    title: "Discounts",
                    to: "/services-and-facilities"
                },
                {
                    title: "Rooms and Rates",
                    to: "/rooms-and-rates"
                },

                {

                    title: "Explore Saranda",
                    to: "/about"
                },

                {

                    title: "Hostel Location",
                    to: "/location"
                },
                {

                    title: "Book / Contact",
                    to: "/contact"
                },

            ];
        },
    }
}
