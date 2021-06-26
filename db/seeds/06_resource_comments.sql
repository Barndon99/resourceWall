-- INSERT comments
INSERT INTO resource_comments (guest_id, resource_id, comments, timestamp)
VALUES (1, 3, 'good comment', current_timestamp),
       (2, 2, 'alright comment', current_timestamp),
       (3, 4, 'gnarly comment', current_timestamp),
       (4, 5, 'spectacular comment', current_timestamp),
       (3, 2, 'bad comment', current_timestamp);
