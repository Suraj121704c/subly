//
//  coupleBible.swift
//  coupleBible
//
//  Created by Suraj Singh on 08/05/25.
//

import WidgetKit
import SwiftUI

struct Provider: TimelineProvider {
    func placeholder(in context: Context) -> SimpleEntry {
        SimpleEntry(date: Date(), verse: "Loading...")
    }

    func getSnapshot(in context: Context, completion: @escaping (SimpleEntry) -> ()) {
        let entry = SimpleEntry(date: Date(), verse: getVerseOfTheDay())
        completion(entry)
    }

    func getTimeline(in context: Context, completion: @escaping (Timeline<SimpleEntry>) -> ()) {
        let entry = SimpleEntry(date: Date(), verse: getVerseOfTheDay())
        // Refresh every 15 minutes or when data changes
        let nextUpdate = Calendar.current.date(byAdding: .minute, value: 15, to: Date()) ?? Date()
        let timeline = Timeline(entries: [entry], policy: .after(nextUpdate))
        completion(timeline)
    }

    func getVerseOfTheDay() -> String {
        let userDefaults = UserDefaults(suiteName: "group.coupleBible")
        if let verse = userDefaults?.string(forKey: "verseOfTheDay") {
            // Request widget refresh when data changes
            WidgetCenter.shared.reloadAllTimelines()
            return verse
        }
        return "No verse available"
    }
}

struct SimpleEntry: TimelineEntry {
    let date: Date
    let verse: String
}

struct coupleBibleEntryView : View {
    var entry: Provider.Entry
    @Environment(\.widgetFamily) var family

    var body: some View {
        switch family {
        case .accessoryRectangular:
            // Lock screen widget
            VStack(alignment: .leading, spacing: 4) {
                let components = entry.verse.split(separator: "-").map(String.init)
                if components.count >= 2 {
                    Text(components[0].trimmingCharacters(in: .whitespaces))
                        .font(.system(size: 13, weight: .medium))
                    Text(components[1].trimmingCharacters(in: .whitespaces))
                        .font(.system(size: 12))
                        .lineLimit(3)
                } else {
                    Text(entry.verse)
                        .font(.system(size: 12))
                        .lineLimit(3)
                }
            }
            .padding(.horizontal, 8)
            .padding(.vertical, 4)
        case .systemSmall:
            // Small home screen widget
            VStack(alignment: .leading, spacing: 4) {
                let components = entry.verse.split(separator: "-").map(String.init)
                if components.count >= 2 {
                    Text(components[0].trimmingCharacters(in: .whitespaces))
                        .font(.system(size: 16, weight: .medium))
                    Text(components[1].trimmingCharacters(in: .whitespaces))
                        .font(.system(size: 14))
                        .lineLimit(4)
                } else {
                    Text(entry.verse)
                        .font(.system(size: 14))
                        .lineLimit(4)
                }
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 12)
        case .systemMedium:
            // Medium home screen widget
            VStack(alignment: .leading, spacing: 4) {
                let components = entry.verse.split(separator: "-").map(String.init)
                if components.count >= 2 {
                    Text(components[0].trimmingCharacters(in: .whitespaces))
                        .font(.system(size: 18, weight: .medium))
                    Text(components[1].trimmingCharacters(in: .whitespaces))
                        .font(.system(size: 16))
                        .lineLimit(3)
                } else {
                    Text(entry.verse)
                        .font(.system(size: 16))
                        .lineLimit(3)
                }
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 12)
        case .systemLarge:
            // Large home screen widget
            VStack(alignment: .leading, spacing: 4) {
                let components = entry.verse.split(separator: "-").map(String.init)
                if components.count >= 2 {
                    Text(components[0].trimmingCharacters(in: .whitespaces))
                        .font(.system(size: 20, weight: .medium))
                    Text(components[1].trimmingCharacters(in: .whitespaces))
                        .font(.system(size: 18))
                        .lineLimit(6)
                } else {
                    Text(entry.verse)
                        .font(.system(size: 18))
                        .lineLimit(6)
                }
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 12)
        default:
            EmptyView()
        }
    }
}

struct coupleBible: Widget {
    let kind: String = "coupleBible"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: Provider()) { entry in
            coupleBibleEntryView(entry: entry)
                .containerBackground(
                    LinearGradient(
                        gradient: Gradient(colors: [
                            Color(red: 170/255, green: 39/255, blue: 240/255), // #AA27F0
                            Color(red: 246/255, green: 231/255, blue: 254/255) // #F6E7FE
                        ]),
                        startPoint: .top,
                        endPoint: .bottom
                    ),
                    for: .widget
                )
        }
        .configurationDisplayName("Verse of the Day")
        .description("Shows the verse of the day from the main app.")
        .supportedFamilies([.systemSmall, .systemMedium, .systemLarge, .accessoryRectangular])
    }
}

extension ConfigurationAppIntent {
    fileprivate static var smiley: ConfigurationAppIntent {
        let intent = ConfigurationAppIntent()
        intent.favoriteEmoji = "😀"
        return intent
    }
    
    fileprivate static var starEyes: ConfigurationAppIntent {
        let intent = ConfigurationAppIntent()
        intent.favoriteEmoji = "🤩"
        return intent
    }
}

#Preview(as: .systemSmall) {
    coupleBible()
} timeline: {
    SimpleEntry(date: .now, verse: "Loading...")
}
