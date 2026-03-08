import { motion } from "framer-motion";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";

const events = [
  { id: 1, title: "Live AMA: Market Outlook Q2 2026", date: "Mar 12", time: "8PM EST", attendees: 342, type: "Live Event" },
  { id: 2, title: "Options Masterclass — Iron Condors", date: "Mar 15", time: "6PM EST", attendees: 189, type: "Workshop" },
  { id: 3, title: "Paper Trading Tournament — $5K Prize", date: "Mar 20", time: "All Day", attendees: 567, type: "Competition" },
];

const EventsSection = () => {
  return (
    <section id="events" className="relative bg-muted/30">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold">Upcoming Events</h2>
          <button className="editorial-tag cursor-pointer flex items-center gap-1 hover:border-foreground hover:text-foreground transition-all">
            <Calendar className="h-3 w-3" /> Full Calendar
          </button>
        </div>

        <hr className="rule-accent mb-8" />

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-6 flex flex-col"
            >
              <span className="editorial-tag text-xs mb-4 self-start">{event.type}</span>
              <h3 className="font-heading font-semibold text-base md:text-lg mb-6 leading-snug flex-1">{event.title}</h3>

              <div className="space-y-2 text-sm text-muted-foreground font-mono border-t border-border pt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" /> {event.time}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" /> {event.attendees} registered
                </div>
              </div>

              <button className="editorial-btn mt-6 w-full text-xs flex items-center justify-center gap-2">
                Register <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
