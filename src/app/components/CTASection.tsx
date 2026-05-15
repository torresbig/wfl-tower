import { ArrowRight, Users } from "lucide-react";
import { teamJoinUrl, registrationDate, formatDateShort } from "../constants";

interface CTASectionProps {
  variant?: "primary" | "secondary";
}

export function CTASection({ variant = "primary" }: CTASectionProps) {
  const registrationOpen = new Date() >= registrationDate;
  const formattedRegDate = formatDateShort(registrationDate);

  if (variant === "primary") {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-[#003056] via-[#002845] to-[#001f35]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="transform transition-transform duration-500">
            <Users className="w-20 h-20 mx-auto mb-6 text-white" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Bock bekommen?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              Werde Teil von Tower & Friends und lauf mit uns für die Forschung!
              <br />Jeder Schritt zählt. Jeder Meter macht den Unterschied.
            </p>
            {!registrationOpen && (
              <p className="mb-4 text-sm text-white/70">
                Anmeldung ab dem {formattedRegDate} geöffnet
              </p>
            )}
            {registrationOpen ? (
              <a
                href={teamJoinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#E2004C] text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-[#C20041] transition-all hover:scale-105 shadow-2xl"
              >
                Jetzt dem Team beitreten
                <ArrowRight className="ml-3 w-6 h-6" />
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex items-center bg-gray-500 text-white px-10 py-5 rounded-full text-xl font-bold cursor-not-allowed opacity-80"
              >
                Jetzt dem Team beitreten
                <ArrowRight className="ml-3 w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-[#003056]/10 to-[#003056]/5 border-2 border-[#003056]/20 rounded-xl p-8 text-center">
          <p className="text-2xl font-bold mb-4 text-gray-900">
            Lass uns gemeinsam Geschichte schreiben! 🏃‍♂️💪
          </p>
          {!registrationOpen && (
            <p className="mb-4 text-sm text-gray-600">
              Anmeldung ab dem {formattedRegDate} geöffnet
            </p>
          )}
          {registrationOpen ? (
            <a
              href={teamJoinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#E2004C] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#C20041] transition-all hover:scale-105 shadow-lg"
            >
              Zum Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex items-center bg-gray-400 text-white px-8 py-4 rounded-full text-lg font-bold cursor-not-allowed opacity-80"
            >
              Zum Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}