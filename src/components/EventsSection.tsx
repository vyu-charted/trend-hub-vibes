import { motion } from "framer-motion";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";

const events = [
  { id: 1, title: "Live AMA: Market Outlook Q2 2026", date: "2026-03-12", time: "20:00 EST", attendees: 342, type: "LIVE" },
  { id: 2, title: "Options Masterclass — Iron Condors", date: "2026-03-15", time: "18:00 EST", attendees: 189, type: "WORKSHOP" },
  { id: 3, title: "Paper Trading Tournament — $5K Prize", date: "2026-03-20", time: "ALL_DAY", attendees: 567, type: "COMP" },
];

const EventsSection = () => {
  return (
    <section id="events" className="relative bg-secondary/30">
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold">
            <span className="text-muted-foreground">cron</span> /events
          </h2>
          <button className="luxury-tag cursor-pointer flex items-center gap-1">
            <Calendar className="h-3 w-3" /> --calendar
          </button>
        </div>

        <div className="gold-line-left mb-10" />

        <div className="space-y-0">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="py-6 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4 group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="luxury-tag text-xs">{event.type}</span>
                  <span className="dateline">{event.date}</span>
                </div>
                <h3 className="font-heading font-bold text-base md:text-lg group-hover:text-primary transition-colors duration-200">{event.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground font-heading">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {event.time}</span>
                  <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {event.attendees} registered</span>
                </div>
              </div>

              <button className="luxury-btn text-xs flex items-center gap-2 shrink-0 w-fit">
                ./register <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
