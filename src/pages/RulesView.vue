<script setup>
import PageHero from '@/components/PageHero.vue'

const sections = [
  {
    id: 'allgemein',
    number: '01',
    title: 'Allgemeine Verhaltensregeln',
    intro: 'Der Umgang miteinander  sowohl IC als auch OOC  ist die Grundlage von GoldenState. Wer diese Regeln missachtet, gefährdet das Erlebnis aller.',
    rules: [
      {
        title: 'Respekt ist Pflicht',
        text: 'Beleidigungen, Diskriminierung oder Hassrede gegenüber anderen Spielern sind absolut verboten  weder im Spiel noch im Discord oder anderen Kanälen der Community.',
      },
      {
        title: 'Teamanweisungen befolgen',
        text: 'Entscheidungen von Admins und Moderatoren sind zu akzeptieren. Kritik ist im dafür vorgesehenen Discord-Kanal willkommen  nicht mitten im Roleplay.',
      },
      {
        title: 'OOC und IC trennen',
        text: 'Was außerhalb des Spiels passiert, bleibt außerhalb. Persönliche Konflikte dürfen nicht im Roleplay ausgetragen werden. IC-Feindschaft endet, sobald die Session vorbei ist.',
      },
      {
        title: 'Kein Trolling',
        text: 'Mutwilliges Stören, Provozieren ohne RP-Hintergrund oder absurdes Verhalten, das den Spielfluss anderer zerstört, wird konsequent geahndet.',
      },
      {
        title: 'Mindestalter',
        text: 'Alle Spieler müssen mindestens 16 Jahre alt sein. Bei begründetem Zweifel kann das Team nach einem Sprachnachweis fragen.',
      },
    ],
  },
  {
    id: 'roleplay',
    number: '02',
    title: 'Roleplay-Qualität',
    intro: 'GoldenState ist ein ernstgenommenes Roleplay-Projekt. Wir erwarten von allen Spielern ein glaubwürdiges, konsistentes Spiel.',
    rules: [
      {
        title: 'In der Rolle bleiben (No Breaking Character)',
        text: 'IC-Situationen werden IC gelöst. Verlasse die Rolle nur bei einem echten Notfall (z. B. technischer Absturz). Nutze für OOC-Kommunikation im Spiel ausschließlich /ooc.',
      },
      {
        title: 'Realistisches Verhalten',
        text: 'Handle so, wie dein Charakter es in der echten Welt tun würde. Übertriebenes oder absurdes Verhalten ohne RP-Grundlage ist nicht erwünscht.',
      },
      {
        title: 'Qualität vor Geschwindigkeit',
        text: 'Nimm dir Zeit für Interaktionen. Kurze, abgehackte Antworten ohne Kontext schaden dem RP aller Beteiligten. Emotes und Beschreibungen sind ausdrücklich erwünscht.',
      },
      {
        title: 'Konsequenzen akzeptieren',
        text: 'Jede IC-Entscheidung hat IC-Folgen. Wer kriminell lebt, muss mit Verhaftung rechnen. Wer Konflikte sucht, muss Niederlagen annehmen.',
      },
      {
        title: 'RP nicht kampflos abbrechen',
        text: 'Situationen dürfen nicht abgebrochen werden, weil sie ungünstig für den eigenen Charakter laufen. Disconnect während eines aktiven RP-Konflikts gilt als Regelbruch.',
      },
    ],
  },
  {
    id: 'powergaming',
    number: '03',
    title: 'Powergaming',
    intro: 'Powergaming bedeutet, anderen Spielern keine faire Reaktionsmöglichkeit zu lassen oder eigene Fähigkeiten unrealistisch zu übertreiben.',
    rules: [
      {
        title: 'Keine erzwungenen Aktionen',
        text: 'Du darfst anderen Charakteren keine Aktionen aufzwingen, ohne dass sie reagieren können (z. B. „Ich breche dir das Handgelenk" ohne Reaktionsmöglichkeit). Formuliere Aktionen als Versuch.',
      },
      {
        title: 'Kein Gottmodus',
        text: 'Dein Charakter ist nicht unverwundbar, allwissend oder übermenschlich stark. Verletzungen, Erschöpfung und Wissengrenzen gehören dazu.',
      },
      {
        title: 'Emote-Fairness',
        text: 'Emote-Kämpfe müssen fair gestaltet sein. Beide Seiten schreiben abwechselnd. Einseitige Überlegenheit ohne Absprache ist nicht erlaubt.',
      },
      {
        title: 'Keine unrealistischen Fähigkeiten',
        text: 'Ein Zivilist kann nicht plötzlich Spezialkräfte-Taktiken ausführen. Halte dich an das, was dein Charakter wirklich beherrscht.',
      },
    ],
  },
  {
    id: 'metagaming',
    number: '04',
    title: 'Metagaming',
    intro: 'Metagaming ist das Einbringen von Wissen in das Spiel, das dein Charakter nicht wissen kann. Dies zerstört die Spannung und Fairness für alle.',
    rules: [
      {
        title: 'OOC-Wissen bleibt OOC',
        text: 'Informationen aus Discord, Streams, Zuschauer-Chat oder anderen OOC-Quellen dürfen nicht IC genutzt werden. Was dein Charakter nicht erlebt hat, weiß er nicht.',
      },
      {
        title: 'Kein Stream-Sniping',
        text: 'Einen Spieler aufgrund seines Streams verfolgen, Positionen ausspähen oder sein Tun gezielt ausnutzen ist strikt verboten und führt zu sofortigem Bann.',
      },
      {
        title: 'Charakternamen IC verdienen',
        text: 'Deinen IC-Namen kennt nur, wer dir vorgestellt wurde oder sich anderweitig IC informiert hat. Namensschilder existieren in der Spielwelt nicht.',
      },
      {
        title: 'Keine Absprachen über externe Chats',
        text: 'IC-Aktionen (z. B. Angriffe, Treffen, Deals) dürfen nicht über Discord o. Ä. koordiniert werden, wenn deine Charaktere diese Info nicht IC hatten.',
      },
    ],
  },
  {
    id: 'fearrp',
    number: '05',
    title: 'Fear RP  Wert des Lebens',
    intro: 'Jeder Charakter fürchtet den Tod. Fear RP stellt sicher, dass sich alle Beteiligten wie echte Menschen verhalten, die etwas zu verlieren haben.',
    rules: [
      {
        title: 'Lebenswille',
        text: 'Handle in Gefahrensituationen so, wie ein normaler Mensch es täte. Wer mit einer Waffe bedroht wird, flüchtet nicht leichtfertig oder greift bewaffnete Gegner ungerüstet an.',
      },
      {
        title: 'Bewaffnete Bedrohung akzeptieren',
        text: 'Steht eine geladene Waffe auf dich, bist du verpflichtet, auf Anweisungen einzugehen. Ignorieren dieser Situation ohne RP-Grundlage ist ein Regelverstoß.',
      },
      {
        title: 'Kein Heldenmut ohne Grundlage',
        text: 'Charaktere mit keiner Kampferfahrung verhalten sich nicht wie Soldaten. Unbewaffnet gegen mehrere Bewaffnete anzugehen ist kein Roleplay  es ist Powergaming.',
      },
      {
        title: 'Verletzungen ernst nehmen',
        text: 'Schusswunden, Messerstiche oder Schläge haben IC-Konsequenzen. Dein Charakter rennt nicht uneingeschränkt weiter, nachdem er angeschossen wurde.',
      },
    ],
  },
  {
    id: 'nlr',
    number: '06',
    title: 'New Life Rule (NLR)',
    intro: 'Nach dem Tod eines Charakters beginnt für ihn ein neues Leben. Die Erinnerung an die Todesumstände ist gelöscht  das ist der Kern der New Life Rule.',
    rules: [
      {
        title: 'Kein Erinnerungsrückblick',
        text: 'Nach dem Tod erinnert sich dein Charakter nicht an die Ereignisse, die zu seinem Tod geführt haben  weder an Personen, Orte noch an den Ablauf des Konflikts.',
      },
      {
        title: 'Keine Rückkehr zum Tatort',
        text: 'Nach dem Respawn oder einer Behandlung ist der frühere Tatort für mindestens 30 Minuten tabu  du kannst dort nicht auf Vergeltung sinnen.',
      },
      {
        title: 'Rache ist tabu',
        text: 'Der Tod deines Charakters berechtigt nicht zur Rache. Wer stirbt, nimmt das mit in das neue Leben  aber nicht die Feindschaft.',
      },
      {
        title: 'Ausnahme: Absprache',
        text: 'Wenn beide Parteien OOC einwilligen, können NLR-Situationen anders gehandhabt werden. Diese Absprache muss vor dem Konflikt erfolgen.',
      },
    ],
  },
  {
    id: 'rdm-vdm',
    number: '07',
    title: 'RDM & VDM',
    intro: 'Random Deathmatch (RDM) und Vehicle Deathmatch (VDM) gehören zu den häufigsten und schwersten Regelbrüchen auf jedem RP-Server.',
    rules: [
      {
        title: 'RDM  kein grundloser Angriff',
        text: 'Angriffe auf andere Charaktere erfordern einen nachvollziehbaren IC-Grund mit vorheriger Interaktion. „Ich mochte sein Gesicht nicht" ist kein RP-Grund.',
      },
      {
        title: 'VDM  Fahrzeuge sind keine Waffen',
        text: 'Fahrzeuge dürfen nicht absichtlich eingesetzt werden, um Spieler zu rammen oder zu töten  weder als erstes Mittel noch als günstige Gelegenheit.',
      },
      {
        title: 'Eskalation braucht Begründung',
        text: 'Konflikte müssen sich organisch entwickeln. Wer ohne Vorgeschichte sofort zur Waffe greift, bricht die Eskalationsregel.',
      },
      {
        title: 'Zeugen und Konsequenzen',
        text: 'Töten in der Öffentlichkeit hat IC-Folgen. Zeugen, Kameras und Behörden existieren  plane Aktionen entsprechend.',
      },
    ],
  },
  {
    id: 'charakter',
    number: '08',
    title: 'Charakter & Identität',
    intro: 'Ein guter Charakter hat Tiefe, Widersprüche und eine Geschichte. Er entwickelt sich durch Erfahrungen  nicht durch willkürliche Persönlichkeitswechsel.',
    rules: [
      {
        title: 'Hintergrundgeschichte',
        text: 'Jeder Charakter braucht eine nachvollziehbare Vergangenheit. Diese muss nicht aufgeschrieben sein, aber das Verhalten muss konsistent wirken.',
      },
      {
        title: 'Charakterkonsistenz',
        text: 'Ändere deinen Charakter nicht grundlos zwischen Sessions. Entwicklungen müssen IC erlebt worden sein.',
      },
      {
        title: 'Kein Cop-Baiting',
        text: 'Behörden grundlos zu provozieren, um eine Reaktion zu erzwingen, ist nicht erlaubt. Wenn du mit der Polizei interagieren willst, schaffe echten RP-Anlass.',
      },
      {
        title: 'Vermögen & Ressourcen trennen',
        text: 'Hast du mehrere Charaktere, darf deren Vermögen nicht geteilt werden. Kein Charakter profitiert vom Wissen oder Geld eines anderen.',
      },
      {
        title: 'Realistische Namen',
        text: 'Charakternamen müssen realistisch klingen. Spielernamen, Meme-Namen oder Promis sind nicht erlaubt.',
      },
    ],
  },
  {
    id: 'fraktionen',
    number: '09',
    title: 'Fraktionen & Behörden',
    intro: 'Offizielle Fraktionen (LSPD, LSMD etc.) tragen eine besondere Verantwortung  gegenüber anderen Spielern und gegenüber der Glaubwürdigkeit des Servers.',
    rules: [
      {
        title: 'Fraktionsregeln gelten zusätzlich',
        text: 'Jede Fraktion kann eigene interne Regeln haben. Diese gelten zusätzlich zum allgemeinen Regelwerk, niemals dagegen.',
      },
      {
        title: 'Korrektes Behördenspiel',
        text: 'Behördenmitglieder (LSPD, LSMD) agieren professionell. Machtmissbrauch, willkürliche Festnahmen oder Fehlinformation zum eigenen Vorteil sind verboten.',
      },
      {
        title: 'Fraktionszugehörigkeit offenlegen',
        text: 'Wer im Dienst ist, zeigt das erkennbar (Uniform, Badge etc.). Undercover-Arbeit ist erlaubt, aber nur mit Absprache des Fraktionsführung.',
      },
      {
        title: 'Keine Fraktionskriege ohne RP',
        text: 'Konflikte zwischen Fraktionen brauchen eine RP-Geschichte. Spontane Massenschlachten ohne Vorgeschichte sind ein Regelbruch.',
      },
      {
        title: 'Übergaben und Geiseln',
        text: 'Bei Geiselnahmen oder Übergaben gelten eigene Protokolle. Behörden müssen Verhandlungen ernstnehmen. Geiseln sind kein Spielzeug.',
      },
    ],
  },
  {
    id: 'kriminalitaet',
    number: '10',
    title: 'Kriminalität & Konflikte',
    intro: 'Kriminelles Roleplay ist ein fester Bestandteil von GoldenState  aber es muss glaubwürdig, fair und mit RP-Substanz gespielt werden.',
    rules: [
      {
        title: 'Kriminalität braucht Motivation',
        text: 'Raub, Erpressung oder Einbrüche müssen einen IC-Grund haben. Willkürliche Verbrechen ohne RP-Hintergrund sind nicht erwünscht.',
      },
      {
        title: 'Opfer haben Rechte',
        text: 'Beraube oder bedrohe niemanden ohne Reaktionsmöglichkeit. Dein Opfer muss die Chance haben, IC zu reagieren.',
      },
      {
        title: 'Keine Massenangriffe',
        text: 'Großangelegte Angriffe (mehr als 4 Personen auf einer Seite) bedürfen einer nachvollziehbaren RP-Eskalation und müssen vorab dem Team gemeldet werden.',
      },
      {
        title: 'Beute ist begrenzt',
        text: 'Was ein Charakter bei sich trägt, kann erbeutet werden. Komplette Konten, Immobilien oder Fahrzeuge können nicht per Bedrohung übertragen werden.',
      },
      {
        title: 'Verhandlungen sind ernst zu nehmen',
        text: 'Wenn ein Opfer oder eine Behörde in Verhandlung geht, ist das IC ernst zu nehmen. Sofortiger Angriff nach einem Verhandlungsangebot ist ein Regelbruch.',
      },
    ],
  },
  {
    id: 'kommunikation',
    number: '11',
    title: 'Kommunikation im Spiel',
    intro: 'Wie und wo kommuniziert wird, ist Teil des Immersionserlebnisses. Klarheit über IC- und OOC-Kanäle ist Pflicht.',
    rules: [
      {
        title: 'Mikrofon erforderlich',
        text: 'Ein funktionierendes Mikrofon ist Voraussetzung für die Teilnahme. Text-only-RP ist nur in Absprache gestattet.',
      },
      {
        title: 'Proximity-Voice nutzen',
        text: 'Gespräche finden im Nahbereich statt. Schreie und Flüstern werden über den Voicechat simuliert  IC-Gespräche werden nicht über Discord geführt.',
      },
      {
        title: '/ooc sparsam verwenden',
        text: 'Der OOC-Chat ist für dringende technische Hinweise. Gameplay-Kommentare, Witze oder Diskussionen gehören in Discord.',
      },
      {
        title: 'Radiofrequenzen sind IC',
        text: 'Funk und Telefon existieren IC. Informationen, die per Funk geteilt werden, können abgehört werden.',
      },
      {
        title: 'Keine Beleidigungen via Voice',
        text: 'Verbale Beleidigungen OOC über Voice sind genauso geahndet wie schriftliche. Behalte die IC/OOC-Grenze beim Sprechen bei.',
      },
    ],
  },
  {
    id: 'technik',
    number: '12',
    title: 'Technische Regeln',
    intro: 'Technische Manipulationen zerstören das Erlebnis für alle. Fairness beginnt damit, dass alle mit denselben Mitteln spielen.',
    rules: [
      {
        title: 'Kein Cheating',
        text: 'Jegliche Software, die einem Spieler unerlaubte Vorteile verschafft (Aimbots, Wallhacks, Speedhacks, etc.) führt zum permanenten Bann ohne Ausnahme.',
      },
      {
        title: 'Keine Exploits',
        text: 'Spielfehler oder technische Lücken dürfen nicht absichtlich ausgenutzt werden. Entdeckte Bugs sind dem Team zu melden.',
      },
      {
        title: 'Kein Duping',
        text: 'Das Duplizieren von Items, Fahrzeugen oder Geld durch technische Mittel ist verboten und wird als schwerwiegender Regelbruch behandelt.',
      },
      {
        title: 'Kein Modding ohne Freigabe',
        text: 'Nicht genehmigte Client-Mods sind verboten. Kosmetische Mods der offiziellen Allowlist sind die einzige Ausnahme.',
      },
      {
        title: 'Disconnect-Pflicht melden',
        text: 'Wer mitten in einem aktiven RP-Szenario disconnecten muss, meldet dies umgehend per /ooc und informiert das Team, damit das Szenario fair weitergeführt werden kann.',
      },
    ],
  },
  {
    id: 'sanktionen',
    number: '13',
    title: 'Sanktionen & Konsequenzen',
    intro: 'Regelverstöße werden konsequent geahndet. Das Stufensystem gilt als Richtwert  schwere Verstöße können direkt zu einem Bann führen.',
    rules: [
      {
        title: 'Stufe 1  Verwarnung',
        text: 'Erste Verstöße gegen Roleplay-Qualität, leichtes Powergaming oder unbeabsichtigtes Metagaming werden mit einer formellen Verwarnung geahndet.',
      },
      {
        title: 'Stufe 2  Temporärer Bann',
        text: 'Wiederholte Verstöße, RDM/VDM, absichtliches Metagaming oder Missachtung von Teamentscheidungen führen zu einem temporären Bann (24h7 Tage).',
      },
      {
        title: 'Stufe 3  Verlängerter Bann',
        text: 'Schwere oder gehäufte Verstöße führen zu einem verlängerten Bann von 730 Tagen inklusive Charakterreset.',
      },
      {
        title: 'Permanenter Bann',
        text: 'Cheating, Stream-Sniping, Duping, Hass oder anhaltende Missachtung des Regelwerks nach mehreren Verwarnungen führen zum permanenten Ausschluss.',
      },
      {
        title: 'Einspruch',
        text: 'Gegen Sanktionen kann schriftlich im Discord-Kanal #support Einspruch erhoben werden. Der Einspruch wird von einem anderen Teammitglied geprüft.',
      },
    ],
  },
]
</script>

<template>
  <div class="pb-24">
    <!-- <PageHero
      eyebrow="Damit alle Spaß haben"
      title="Regelwerk"
      subtitle="Klare Regeln sind die Grundlage für gutes Roleplay. Lies sie aufmerksam, bevor du deinen ersten Tag in Los Santos verbringst."
    /> -->

    <!-- Quick nav -->
    <nav v-reveal class="mx-auto mb-12 max-w-3xl px-5 sm:px-8">
      <div class="glass rounded-2xl p-5">
        <p class="mb-3 text-xs uppercase tracking-widest text-zinc-500">Springe zu einem Abschnitt</p>
        <div class="flex flex-wrap gap-2">
          <a
            v-for="s in sections"
            :key="s.id"
            :href="'#' + s.id"
            class="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400 hover:border-gold-400/40 hover:text-gold-200 transition-colors"
          >
            {{ s.number }} {{ s.title }}
          </a>
        </div>
      </div>
    </nav>

    <section class="mx-auto max-w-3xl px-5 sm:px-8">
      <div class="space-y-6">
        <article
          v-for="(s, i) in sections"
          :id="s.id"
          :key="s.id"
          v-reveal="i * 40"
          class="glass rounded-2xl p-7 scroll-mt-28"
        >
          <!-- Section header -->
          <div class="flex items-start gap-4 mb-4">
            <span class="shrink-0 grid h-10 w-10 place-items-center rounded-xl border border-gold-400/40 bg-gold-400/5 font-display text-xs text-gold-300">
              {{ s.number }}
            </span>
            <div>
              <h2 class="font-display text-xl text-gold-100">{{ s.title }}</h2>
              <p class="mt-1 text-sm text-zinc-500 leading-relaxed">{{ s.intro }}</p>
            </div>
          </div>

          <div class="mt-5 border-t border-white/10 pt-5 space-y-4">
            <div
              v-for="r in s.rules"
              :key="r.title"
              class="flex gap-3"
            >
              <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400/70"></span>
              <div>
                <span class="text-sm font-medium text-zinc-100">{{ r.title }}:</span>
                <span class="ml-1.5 text-sm leading-relaxed text-zinc-400">{{ r.text }}</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <p v-reveal class="mt-10 text-center text-xs text-zinc-500">
        Das Team behält sich vor, das Regelwerk jederzeit anzupassen. Es zählt stets die aktuelle Fassung. Letzte Überarbeitung: Mai 2026.
      </p>
    </section>
  </div>
</template>
