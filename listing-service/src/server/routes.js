import { Listing } from "#root/db/models";

const setupRoutes = app => {
  app.get("/listings", async (req, res, next) => {
    try {
      const listings = await Listing.findAll();
      return res.json(listings);
    } catch (error) {
      return res.json({ error });
    }
  });
};

export default setupRoutes;
