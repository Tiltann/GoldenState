<script setup>
import PageHero from '@/components/PageHero.vue'
</script>

<template>
  <div class="pb-24">
    <PageHero
      eyebrow="Rechtliches"
      title="Impressum"
      subtitle="Angaben gemäß § 5 TMG"
    />

    <section class="mx-auto max-w-2xl px-5 sm:px-8 space-y-5">

      <article class="glass rounded-2xl p-7">
        <h2 class="font-display text-lg text-gold-100 mb-4">Verantwortlich</h2>
        <div class="space-y-1 text-sm text-zinc-300 leading-relaxed">
          <p>GoldenState Community</p>
          <p>Deutschland</p>
          <p>
            E-Mail:
            <a href="mailto:kontakt@goldenstate-rp.de" class="text-gold-300 hover:text-gold-100 underline underline-offset-2">
              kontakt@goldenstate-rp.de
            </a>
          </p>
        </div>
      </article>

      <article class="glass rounded-2xl p-7">
        <h2 class="font-display text-lg text-gold-100 mb-4">Haftung für Inhalte</h2>
        <p class="text-sm text-zinc-400 leading-relaxed">
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen.
        </p>
      </article>

      <article class="glass rounded-2xl p-7">
        <h2 class="font-display text-lg text-gold-100 mb-4">Haftung für Links</h2>
        <p class="text-sm text-zinc-400 leading-relaxed">
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
          keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
          Anbieter oder Betreiber der Seiten verantwortlich. Wir haben keine Kenntnis von
          rechtswidrigen Inhalten auf verlinkten Seiten. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Links umgehend entfernen.
        </p>
      </article>

      <article class="glass rounded-2xl p-7">
        <h2 class="font-display text-lg text-gold-100 mb-4">Urheberrecht</h2>
        <p class="text-sm text-zinc-400 leading-relaxed">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
          der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
          Zustimmung des jeweiligen Autors. Downloads und Kopien dieser Seite sind nur für den
          privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p class="mt-3 text-sm text-zinc-400 leading-relaxed">
          GoldenState ist ein Fan-Projekt und steht in keiner Verbindung zu Rockstar Games oder
          Take-Two Interactive. GTA V und alle damit verbundenen Marken sind Eigentum der
          jeweiligen Rechteinhaber.
        </p>
      </article>

      <article class="glass rounded-2xl p-7">
        <h2 class="font-display text-lg text-gold-100 mb-4">Datenschutz</h2>
        <p class="text-sm text-zinc-400 leading-relaxed">
          Diese Website erhebt keine personenbezogenen Daten. Es werden keine Cookies gesetzt,
          kein Tracking durchgeführt und keine Nutzerinformationen an Dritte weitergegeben.
          Bei Nutzung unseres Discord-Servers gelten die Datenschutzbestimmungen von Discord Inc.
        </p>
      </article>

    </section>
  </div>
</template>
