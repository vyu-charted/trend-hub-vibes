import { motion } from "framer-motion";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";

const events = [
  { id: 1, title: "Live AMA: Market Outlook Q2 2026", date: "Mar 12", time: "8PM EST", attendees: 342, type: "Live" },
  { id: 2, title: "Options Masterclass — Iron Condors", date: "Mar 15", time: "6PM EST", attendees: 189, type: "Workshop" },
  { id: 3, title: "Paper Trading Tournament — $5K Prize", date: "Mar 20", time: "All Day", attendees: 567, type: "Competition" },
];

const EventsSection = () => {
  return (
    <section id="events" className="relative bg-secondary/30">
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-light">Events</h2>
          <button className="luxury-tag cursor-pointer flex items-center gap-1">
            <Calendar className="h-3 w-3" /> Calendar
          </button>
        </div>

        <div className="gold-line-left mb-10" />

        <div className="grid md:grid-cols-3 gap-px bg-border/50">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-background p-8 flex flex-col group hover:bg-secondary/30 transition-colors duration-300"
            >
              <span className="luxury-tag text-xs mb-5 self-start">{event.type}</span>
              <h3 className="font-heading font-light text-lg md:text-xl mb-8 leading-snug flex-1 group-hover:text-primary transition-colors duration-300">{event.title}</h3>

              <div className="space-y-2.5 text-sm text-muted-foreground border-t border-border pt-5">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary/60" /> {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary/60" /> {event.time}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary/60" /> {event.attendees} registered
                </div>
              </div>

              <button className="luxury-btn mt-8 w-full text-xs flex items-center justify-center gap-2">
                Register <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
